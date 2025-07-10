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

### 🔐 Authentication & Security
- JWT-based authentication with refresh tokens
- Role-based access control (RBAC) - Customer, Staff, Admin
- Session management with user sessions tracking
- OTP verification via Twilio SMS
- Rate limiting and throttling protection

### 📅 Appointment Management
- Complete CRUD operations for appointments
- Advanced filtering and pagination
- Real-time availability checking
- Appointment status tracking (Scheduled, Confirmed, Completed, Cancelled)

### 👥 User Management
- Multi-role user system (Customer, Staff, Admin)
- Profile management with avatar support
- Email verification via SendGrid
- Password reset functionality

### 📊 Business Intelligence
- Appointment analytics and reporting
- Staff performance metrics
- Customer engagement tracking
- Audit logging for compliance

### 🧪 Testing & Quality
- Comprehensive unit and integration tests with Jest
- E2E testing setup
- Code coverage reporting
- Automated testing pipeline

---

## 3. Technologies

### 🎯 Backend Framework
- **NestJS** - Progressive Node.js framework for building scalable applications
- **TypeScript** - Type-safe JavaScript for better development experience

### 🗄️ Database & ORM
- **PostgreSQL** - Robust relational database
- **Prisma** - Modern database toolkit with type-safe queries
- **Redis** - In-memory caching for performance optimization

### 🔐 Authentication & Security
- **JWT** - JSON Web Tokens for stateless authentication
- **Passport.js** - Authentication middleware
- **bcrypt** - Password hashing and verification

### 🌐 External Services
- **SendGrid** - Transactional email service
- **Twilio** - SMS and OTP verification
- **GraphQL** - Query language for APIs

### 🧪 Testing & Development
- **Jest** - Testing framework
- **ESLint** - Code linting
- **Prettier** - Code formatting

---

## 4. Installation

### Prerequisites
- **Node.js** 18+ (LTS version recommended)
- **PostgreSQL** 14+
- **Redis** (optional, for caching)
- **pnpm** (recommended package manager)

### Quick Start
```bash
# 1. Clone the repository
git clone https://github.com/kaikyMoura/Schedule-Pro-API.git
cd Schedule-Pro-API

# 2. Install dependencies
pnpm install

# 3. Set up environment variables
cp .env.example .env
# Edit .env with your configuration

# 4. Set up database
pnpm prisma migrate deploy
pnpm prisma generate

# 5. Start development server
pnpm start:dev
```

### Alternative: Docker Setup
```bash
# Using Docker Compose
docker-compose up -d

# Or build manually
docker build -t schedule-pro-api .
docker run -p 5000:5000 schedule-pro-api
```

---

## 5. Environment Setup

### Required Environment Variables
```env
# Application
NODE_ENV=development
PORT=5000

# Database
DATABASE_URL="postgresql://user:password@localhost:5432/schedule_pro"

# JWT Authentication
JWT_SECRET_KEY=your_super_secret_jwt_key_here
JWT_EXPIRATION_TIME=1h
JWT_REFRESH_EXPIRATION_TIME=7d

# External Services
SENDGRID_API_KEY=your_sendgrid_api_key
SENDGRID_SENDER_EMAIL=noreply@yourdomain.com
TWILIO_ACCOUNT_SID=your_twilio_account_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token
TWILIO_VERIFY_SERVICE_SID=your_twilio_verify_service_sid

# Redis (Optional)
REDIS_URL=redis://localhost:6379
REDIS_TTL=300

# Rate Limiting
THROTTLER_TTL=60
THROTTLER_LIMIT=10

# CORS
FRONTEND_URL=http://localhost:3000
```

### Environment Variables Guide
- **JWT_SECRET_KEY**: Generate a strong secret key (min 32 characters)
- **DATABASE_URL**: PostgreSQL connection string
- **SENDGRID_API_KEY**: Get from SendGrid dashboard
- **TWILIO_***: Get from Twilio console

---

## 6. API Documentation

### GraphQL Playground
Access the interactive GraphQL playground at:
```
http://localhost:5000/graphql
```

### Available Endpoints

#### Authentication
- `POST /auth/register` - User registration
- `POST /auth/login` - User login
- `POST /auth/refresh` - Refresh JWT token
- `POST /auth/logout` - User logout

#### Users
- `GET /users` - Get users (with pagination)
- `GET /users/:id` - Get user by ID
- `PUT /users/:id` - Update user
- `DELETE /users/:id` - Delete user

#### Appointments
- `GET /appointments` - Get appointments (with filters)
- `POST /appointments` - Create appointment
- `PUT /appointments/:id` - Update appointment
- `DELETE /appointments/:id` - Cancel appointment

### GraphQL Schema
The API uses GraphQL for flexible data querying. Explore the schema in the GraphQL playground.

---

## 7. Development

### Available Scripts
```bash
# Development
pnpm start:dev          # Start development server with hot reload
pnpm start:debug        # Start with debug mode

# Testing
pnpm test               # Run unit tests
pnpm test:e2e          # Run end-to-end tests
pnpm test:cov          # Run tests with coverage
pnpm test:watch        # Run tests in watch mode

# Database
pnpm prisma studio     # Open Prisma Studio
pnpm prisma migrate dev # Create and apply new migration
pnpm prisma generate   # Generate Prisma client

# Code Quality
pnpm lint              # Run ESLint
pnpm lint:fix          # Fix ESLint issues
pnpm format            # Format code with Prettier
```

### Project Structure
```
src/
├── appointment/        # Appointment management
├── auth/              # Authentication & authorization
├── common/            # Shared utilities & interceptors
├── graphql/           # GraphQL loaders & context
├── notification/      # Email & SMS notifications
├── reviews/           # Review system
├── serviceItem/       # Service management
├── staff-availability/ # Staff scheduling
├── staff-service/     # Staff-service associations
├── user/              # User management
└── user-session/      # Session tracking
```

---

## 8. Contributing

### Development Workflow
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Standards
- Follow TypeScript best practices
- Write unit tests for new features
- Use conventional commit messages
- Ensure all tests pass before submitting PR

---

## 9. Troubleshooting

### Common Issues

#### Database Connection Issues
```bash
# Check if PostgreSQL is running
sudo systemctl status postgresql

# Reset database
pnpm prisma migrate reset
```

#### JWT Issues
- Ensure `JWT_SECRET_KEY` is at least 32 characters
- Check token expiration settings

#### External Services
- Verify SendGrid API key is valid
- Check Twilio credentials and service SID

---

## 10. Deployment

### Production Setup
```bash
# Build the application
pnpm build

# Start production server
pnpm start:prod
```

### Docker Deployment
```bash
# Build Docker image
docker build -t schedule-pro-api .

# Run with environment variables
docker run -p 5000:5000 \
  -e DATABASE_URL="your_production_db_url" \
  -e JWT_SECRET_KEY="your_production_jwt_secret" \
  schedule-pro-api
```

### Environment Variables for Production
- Set `NODE_ENV=production`
- Use strong JWT secrets
- Configure production database
- Set up proper CORS origins

---

## 📝 Terms of Use
- **Non-commercial** project.
- All rights related to user data and privacy are respected.
- This project aims to serve as a learning and portfolio tool.

## Author 👨‍💻
Kaiky Tupinambá - Fullstack developer
