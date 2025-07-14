# ServiceItem Module (GraphQL)

## Overview

The `ServiceItem` module defines the catalog of services offered in the application. Each service item includes attributes such as type, base price, and duration. Service items are linked to staff members via the StaffService relationship, allowing for custom pricing and staff-specific availability.

## Main Entities

- **ServiceItem**: Represents a service definition (type, price, duration).

## GraphQL Operations

### Queries
| Name                | Description                                 | Allowed Roles |
|---------------------|---------------------------------------------|--------------|
| `serviceItems`      | List all available service items             | ANY          |
| `serviceItem(id)`   | Find a specific service item by ID           | ANY          |

### Mutations
| Name                | Description                                 | Allowed Roles |
|---------------------|---------------------------------------------|--------------|
| `createServiceItem` | Create a new service item                   | ADMIN        |
| `updateServiceItem` | Update an existing service item             | ADMIN        |
| `deleteServiceItem` | Delete an existing service item             | ADMIN        |

## Usage Examples

### Create Service Item
```graphql
mutation {
  createServiceItem(input: {
    name: "Haircut",
    description: "Haircut description",
    category: "HAIRCUT",
    basePrice: 50.0,
    currency: "BRL",
    durationMinutes: 30,
    bufferMinutes: 5,
    isActive: true,
    isOnline: false,
    maxAdvanceBooking: 30,      # Optional
    minAdvanceBooking: 1,       # Optional
    color: "#FFAA00",           # Optional
    icon: "scissors",           # Optional
    tags: ["barber", "hair"]    # Optional
  }) {
    success
    message
    data {
      id
      name
      description
      category
      basePrice
      currency
      durationMinutes
      bufferMinutes
      isActive
      isOnline
      maxAdvanceBooking
      minAdvanceBooking
      color
      icon
      tags
    }
  }
}
```

### List Service Items
```graphql
query {
  serviceItems(pagination: { limit: 10, offset: 0 }) {
    items {
      id
      type
      price
      duration
    }
    totalCount
  }
}
```

### Get Service Item by ID
```graphql
query {
  serviceItem(id: "service-item-uuid") {
    id
    type
    price
    duration
  }
}
```

### Update Service Item
```graphql
mutation {
  updateServiceItem(id: "service-item-uuid", input: {
    price: 60.0,
    duration: 45
  }) {
    success
    message
  }
}
```

### Delete Service Item
```graphql
mutation {
  deleteServiceItem(id: "service-item-uuid") {
    success
    message
  }
}
```

## Authorization Observations
- All operations require authentication.
- The allowed roles for each operation are described in the tables above.
- The `serviceItems` and `serviceItem` queries are available to any authenticated user.

---
