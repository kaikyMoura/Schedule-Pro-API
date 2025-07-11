# User Module (GraphQL)

## Overview

The `User` module manages the application's users, supporting role-based access control and permission management. Each user has a specific role (e.g., CUSTOMER, STAFF, ADMIN) that defines their capabilities. The module handles personal information, authentication, and relations to appointments, services, availability, and sessions.

## Main Entities

- **User**: Represents the user, including personal and authentication details.

## GraphQL Operations

### Queries
| Name         | Description                                 | Allowed Roles         |
|--------------|---------------------------------------------|----------------------|
| `users`      | List all users, with optional filters        | ADMIN, STAFF         |
| `me`         | Get the current authenticated user           | ANY                  |
| `user(id)`   | Get a user by ID                            | ADMIN, MANAGER       |

### Mutations
| Name              | Description                                         | Allowed Roles                |
|-------------------|-----------------------------------------------------|------------------------------|
| `updateUser`      | Update a user by ID (self or admin/manager)         | ADMIN, MANAGER, CUSTOMER, STAFF |
| `deactivateUser`  | Deactivate a user by ID (self or admin/manager)     | ADMIN, MANAGER, CUSTOMER, STAFF |
| `activateUser`    | Activate a user by ID                               | ADMIN                        |
| `deleteUser`      | Delete a user by ID                                 | ADMIN, MANAGER               |

### List Users (ADMIN/STAFF)
```graphql
query {
  users(filter: { role: STAFF }, pagination: { limit: 10, offset: 0 }) {
    nodes {
      id
      email
      firstName
      lastName
      role
    }
    totalCount
    hasNextPage
    hasPreviousPage
  }
}
```

### Get Current User
```graphql
query {
  me {
    success
    data {
      id
      email
      firstName
      lastName
      role
    }
  }
}
```

### Get User by ID (ADMIN/MANAGER)
```graphql
query {
  user(id: "user-uuid") {
    success
    data {
      id
      email
      firstName
      lastName
      role
    }
  }
}
```

### Update User (Self or Admin/Manager)
```graphql
mutation {
  updateUser(id: "user-uuid", input: {
    firstName: "Johnny",
    lastName: "Doe",
    phone: "+5511988888888"
  }) {
    success
    message
  }
}
```

### Deactivate User (Self or Admin/Manager)
```graphql
mutation {
  deactivateUser(id: "user-uuid") {
    success
    message
  }
}
```

### Activate User (ADMIN)
```graphql
mutation {
  activateUser(id: "user-uuid") {
    success
    message
  }
}
```

### Delete User (ADMIN/MANAGER)
```graphql
mutation {
  deleteUser(id: "user-uuid") {
    success
    message
  }
}
```

## Authorization Observations
- All operations require authentication unless marked as PUBLIC (e.g., register, login).
- The allowed roles for each operation are described in the tables above.
- The `me` query is available to any authenticated user.

---

For more details on the User type fields or advanced queries, refer to the GraphQL schema or request specific examples.