# StaffService Module (GraphQL)

## Overview

The `StaffService` module represents the relationship between a user with the STAFF role and a ServiceItem. Each StaffService entry defines which services a staff member can perform, including custom pricing and status.

## Main Entities

- **StaffService**: Links a staff member to a service item, with optional custom price and active status.

## GraphQL Operations

### Queries
| Name                        | Description                                         | Allowed Roles         |
|-----------------------------|-----------------------------------------------------|----------------------|
| `staffServices`             | List all staff-service relations                    | ADMIN                |
| `staffServicesByStaff(staffId)` | Get all services linked to a specific staff   | STAFF, ADMIN         |
| `staffServicesByService(serviceId)` | Get all staff linked to a specific service | ANY                  |

### Mutations
| Name                        | Description                                         | Allowed Roles         |
|-----------------------------|-----------------------------------------------------|----------------------|
| `createStaffService`        | Create a new relation between staff and service item| STAFF, ADMIN         |
| `updateStaffService`        | Update an existing staff-service relation           | ADMIN                |
| `updateStaffServiceActive`  | Update only the active status of the relation       | ADMIN                |
| `updateStaffServiceCustomPrice` | Update only the custom price of the relation   | STAFF, ADMIN         |
| `deleteStaffService`        | Delete the relation between staff and service       | STAFF, ADMIN         |

## Usage Examples

### Create StaffService
```graphql
mutation {
  createStaffService(input: {
    staffId: "uuid-of-staff",
    serviceId: "uuid-of-service",
    customPrice: 70.0, # Optional
    active: true # Optional
  }) {
    success
    message
    data {
      id
      staffId
      serviceId
      customPrice
      active
    }
  }
}
```

### List StaffServices (ADMIN)
```graphql
query {
  staffServices(pagination: { limit: 10, offset: 0 }) {
    items {
      id
      staffId
      serviceId
      customPrice
      active
    }
    totalCount
  }
}
```

### Get StaffServices by Staff
```graphql
query {
  staffServicesByStaff(staffId: "staff-uuid") {
    id
    serviceId
    customPrice
    active
  }
}
```

### Get StaffServices by Service
```graphql
query {
  staffServicesByService(serviceId: "service-uuid") {
    id
    staffId
    customPrice
    active
  }
}
```

### Update StaffService
```graphql
mutation {
  updateStaffService(id: "staff-service-uuid", input: {
    customPrice: 80.0,
    active: false
  }) {
    success
    message
  }
}
```

### Update StaffService Active Status
```graphql
mutation {
  updateStaffServiceActive(id: "staff-service-uuid", active: true) {
    success
    message
  }
}
```

### Update StaffService Custom Price
```graphql
mutation {
  updateStaffServiceCustomPrice(id: "staff-service-uuid", customPrice: 90.0) {
    success
    message
  }
}
```

### Delete StaffService
```graphql
mutation {
  deleteStaffService(id: "staff-service-uuid") {
    success
    message
  }
}
```

## Authorization Observations
- All operations require authentication.
- The allowed roles for each operation are described in the tables above.
- The `staffServicesByService` query is available to any authenticated user.

---
