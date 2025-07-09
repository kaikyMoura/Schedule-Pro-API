<div align="center">

# 🗓️ Schedule Pro API


**Schedule-Pro-API** is the backend service for the [Schedule Pro](https://github.com/kaikyMoura/Schedule-Pro) platform. It provides robust authentication, session management, role-based access control (RBAC), email notifications via SendGrid, and OTP-based verification using Twilio. This API ensures secure user management and communication flows for the application.

</div>

<div align="center">
  
![GitHub top language](https://img.shields.io/github/languages/top/kaikyMoura/Schedule-Pro-API)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/ce1f958181d743b98107dbc70dfac5ed)](https://app.codacy.com/gh/kaikyMoura/Schedule-Pro-API/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade)
![Repository size](https://img.shields.io/github/repo-size/kaikyMoura/Schedule-Pro-API)
![Github last commit](https://img.shields.io/github/last-commit/kaikyMoura/Schedule-Pro-API)
![License](https://img.shields.io/aur/license/LICENSE)
![Languages count](https://img.shields.io/github/languages/count/kaikyMoura/Schedule-Pro-API)

</div>

## 1. About the Project

This project serves as the API implementation for Schedule Pro, a modern appointment and scheduling management system designed to streamline operations for service-based businesses.

Built with NestJS, Node.js, TypeScript, Prisma, SendGrid, and Twilio, the Schedule Pro API provides a secure and scalable backend for managing users, sessions, and appointments.

The API includes robust authentication with JWT, role-based access control (RBAC), secure session management, and integrates external services like SendGrid for transactional emails and Twilio for OTP-based verification. This architecture ensures a reliable communication flow, secure user authentication, and efficient permission management across the platform.

---

## 2. Features

- 🔐 User Authentication (JWT-based)

- 🧪 Unit and Integration Testing with `Jest`

- ⚙️ Modular & Scalable Architecture using NestJS best practices

---

## 3. Technologies

<div style="display: inline-block">
  <img alt="typescript-logo" width="48" style="margin-right: 20px" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" />
  <img alt="nest-logo" width="48" style="margin-right: 12px" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original-wordmark.svg" />
  <img alt="prisma-logo" width="48" style="margin-right: 12px" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg" />
  <img alt="nodejs-logo" width="48" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" />
  <img alt="graphql-logo" width="48" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain-wordmark.svg" />
  <img alt="postgresql-logo" width="48" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg" />
</div>

---

## 4. Installation
### Prerequisites:
Before running the project, ensure that **Node.js** is installed on your machine. If not, you can download it from the [official Node.js website](https://nodejs.org/en/) (LTS version recommended).

To verify your Node.js installation, run:

```console
node -v
npm -v
```

Clone the repository to your local machine

```console
git clone https://github.com/kaikyMoura/Schedule-Pro-API.git
```

Navigate into the project directory

```bash
cd Schedule-Pro-AP
```
Install dependencies

```bash
npm install
# or
pnpm install
# or
yarn install
```

---

## 6.  Environment Setup

### Environment Variables
Create a .env file in the project root based on the example below:

```env
# You can ask chatgpt if you don't know how to generate
JWT_SECRET_KEY=your_jwt_secret_here

# PostgreSQL
DATABASE_URL="postgresql://user:password@localhost:5432/db_schedulepro"

# SendGrid
SENDGRID_KEY=your_sendgrid_api_key_here

```

### PostgreSQL Database
You need a PostgreSQL database to run the project. You can create one in several ways:
- Install postgres sql locally: [https://www.postgresql.org/download/](https://www.postgresql.org/download/)
- Using `create db` [https://www.postgresql.org/docs/current/app-createdb.html](https://www.postgresql.org/docs/current/app-createdb.html)
- Or via Docker + postgres [https://hub.docker.com/_/postgres](https://hub.docker.com/_/postgres)

### Prisma Setup
After configuring your database and .env, initialize and generate the Prisma client:

```console
# Run the Prisma migration via pnpm
pnpm prisma migrate deploy

# Generate the Prisma client
pnpm prisma generate
```

You can use the Prisma CLI to inspect your DB or update schema as needed:

```console
pnpm prisma studio   # Open GUI to manage the DB
```

---

## 7. Running the Application:
Once the dependencies are installed, you can start the development server with:

```console
npm start:dev
# or
pnpm start:dev
# or
yarn start:dev
```

the application will be available on:

```console
http://localhost:5000
```

--- 

## 8. Deployment
The deployment is temporarily disabled. While i configure the deployment in google cloud.
---

## 9. Documentation
The API is fully documented and designed for easy integration. Each new endpoint is automatically included in the documentation.

### Pages Documentation
Each module in the codebase contains a corresponding `.md` file that serves as a usage guide and endpoint showcase.

Access it locally at:
```bash
http://localhost:5000/graphql
```

---

### 10. 📝 Terms of Use
- **Non-commercial** project.
- All rights related to user data and privacy are respected.
- This project aims to serve as a learning and portfolio tool.

#### Author 👨‍💻
Kaiky Tupinambá - Fullstack developer
