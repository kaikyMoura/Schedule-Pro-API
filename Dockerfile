# syntax=docker/dockerfile:1

# Define versions as build arguments for easy updates
ARG NODE_VERSION=22.14.0
ARG PNPM_VERSION=10.6.4

# ---- 1. Base Stage ----
# Use a lightweight Node.js Alpine image for all stages
FROM node:${NODE_VERSION}-alpine AS base
WORKDIR /usr/src/app
# Install pnpm globally
RUN --mount=type=cache,target=/root/.npm \
    npm install -g pnpm@${PNPM_VERSION}

# ---- 2. Production Dependencies Stage ----
# Install ONLY production dependencies.
# Note: "prisma" package must be in "dependencies", not "devDependencies".
FROM base AS prod-deps
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=pnpm-lock.yaml,target=pnpm-lock.yaml \
    --mount=type=bind,source=prisma/schema.prisma,target=prisma/schema.prisma \
    --mount=type=cache,target=/root/.local/share/pnpm/store \
    pnpm install --prod --frozen-lockfile

# ---- 3. Development Dependencies Stage ----
# Install ALL dependencies (including devDependencies) needed for the build process.
FROM base AS dev-deps
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=pnpm-lock.yaml,target=pnpm-lock.yaml \
    --mount=type=cache,target=/root/.local/share/pnpm/store \
    pnpm install --frozen-lockfile

# ---- 4. Build Stage ----
# Use the development dependencies to build the application.
FROM dev-deps AS build
# Copy the rest of the source code
COPY . .
# Generate the Prisma Client so TypeScript can find its types during compilation
RUN pnpm prisma generate
# Run the application build script
RUN pnpm run build

# ---- 5. Final Stage ----
# Create the final, minimal production image from the clean base.
FROM base AS final
WORKDIR /usr/src/app
ENV NODE_ENV=production

# Run the application as a non-root user for better security
USER node

# Copy files and change their ownership to the 'node' user simultaneously.
# This is the key fix for the permissions error.
COPY --chown=node:node --from=prod-deps /usr/src/app/node_modules ./node_modules
COPY --chown=node:node --from=build /usr/src/app/prisma ./prisma
COPY --chown=node:node --from=build /usr/src/app/package.json .
COPY --chown=node:node --from=build /usr/src/app/dist ./dist

# Expose the application port
EXPOSE ${PORT}

# Command to apply migrations and then start the application.
# Assumes you have a "start:prod" script in package.json (e.g., "node dist/main.js")
CMD ["sh", "-c", "pnpm prisma migrate deploy && pnpm start:prod"]