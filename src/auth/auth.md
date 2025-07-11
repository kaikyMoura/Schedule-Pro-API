# Auth Module (GraphQL)

## Overview

The `Auth` module manages authentication, authorization, and secure session handling. It validates user credentials, issues tokens, enforces role-based access control, manages sessions, and supports password recovery and verification flows.

## Main Entities

- **User**: Represents the authenticated user.
- **UserSession**: Represents a user session (login, refresh, logout).

## GraphQL Operations

### Mutations
| Name                | Description                                 | Allowed Roles |
|---------------------|---------------------------------------------|--------------|
| `register`          | Register a new user                         | PUBLIC       |
| `login`             | Authenticate a user and return tokens        | PUBLIC       |
| `logout`            | Finish the user's session                    | ANY          |
| `refreshToken`      | Refresh the user's session                   | ANY          |
| `forgotPassword`    | Initiate password recovery process           | PUBLIC       |
| `resetPassword`     | Reset the user's password                    | ANY          |
| `sendVerificationEmail` | Send email verification to user           | PUBLIC       |
| `verifyEmail`       | Verify user's email                          | PUBLIC       |
| `sendOtp`           | Send OTP to user's phone                     | PUBLIC       |
| `verifyOtp`         | Verify OTP code                              | PUBLIC       |

## Usage Examples

### Register
```graphql
mutation {
  register(input: {
    firstName: "John",
    lastName: "Doe",
    phone: "+5511999999999",
    email: "john.doe@email.com",
    password: "StrongP@ssw0rd!"
    role: CUSTOMER // Optional
    dateOfBirth: "1990-01-01" // Optional
    gender: MALE // Optional
    address: "123 Main St, Anytown, USA" // Optional
    city: "Anytown" // Optional
    state: "CA" // Optional
    zipCode: "12345" // Optional
    country: "USA" // Optional
    timezone: "America/New_York" // Optional
    language: "en" // Optional
    currency: "USD" // Optional
    avatar: "https://example.com/avatar.jpg" // Optional
  })
  } {
    success
    message
    data {
      id
      email
      role
      # ...token fields if returned
    }
  }
```



### Login
```graphql
mutation {
  login(input: {
    email: "john.doe@email.com",
    password: "StrongP@ssw0rd!"
  }) {
    success
    message
    data {
      id
      email
      role
      # ...token fields if returned
    }
  }
}
```

### Logout
```graphql
mutation {
  logout {
    success
    message
  }
}
```

### Refresh Token
```graphql
mutation {
  refreshToken {
    success
    message
    data {
      # ...token fields if returned
    }
  }
}
```

### Forgot Password
```graphql
mutation {
  forgotPassword(email: "john.doe@email.com") {
    success
    message
  }
}
```

### Reset Password
```graphql
mutation {
  resetPassword(token: "reset-token", newPassword: "NewP@ssw0rd!") {
    success
    message
  }
}
```

### Send Verification Email
```graphql
mutation {
  sendVerificationEmail {
    success
    message
  }
}
```

### Verify Email
```graphql
mutation {
  verifyEmail(token: "verification-token") {
    success
    message
  }
}
```

### Send OTP
```graphql
mutation {
  sendOtp(phone: "+5511999999999") {
    success
    message
  }
}
```

### Verify OTP
```graphql
mutation {
  verifyOtp(phone: "+5511999999999", code: "123456") {
    success
    message
  }
}
```

## Authorization Observations
- All operations require authentication unless marked as PUBLIC (e.g., login, forgotPassword, sendOtp).
- The allowed roles for each operation are described in the table above.

---
