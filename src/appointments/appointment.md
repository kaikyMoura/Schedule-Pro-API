# Appointment Module (GraphQL)

## Overview

The `Appointment` module manages bookings between users (customers and staff) and the services offered. Each appointment connects a customer (CUSTOMER), a staff member (STAFF), and a service (ServiceItem), storing details such as date, time, status, price, and notes.

## Main Entities

- **Appointment**: Represents the appointment itself.
- **User**: Can be CUSTOMER (customer) or STAFF (staff).
- **ServiceItem**: Scheduled service, with type, duration, and base price.

## GraphQL Operations

### Queries
| Name                        | Description                                       | Allowed Roles            |
|-----------------------------|---------------------------------------------------|-------------------------|
| `appointments`              | List all appointments                            | ADMIN, STAFF            |
| `appointment(id)`           | Search an appointment by ID                      | ANY                     |
| `appointmentsByCustomer(customerId)` | List appointments by customer         | CUSTOMER, ADMIN         |
| `appointmentsByStaff(staffId)`       | List appointments by staff     | STAFF, ADMIN            |

### Mutations
| Name                        | Description                                       | Allowed Roles            |
|-----------------------------|---------------------------------------------------|-------------------------|
| `createAppointment`         | Create a new appointment                          | CUSTOMER, ADMIN         |
| `updateAppointment`         | Update an existing appointment                 | CUSTOMER, ADMIN         |
| `updateAppointmentStatus`   | Update only the status of an appointment        | ANY                     |
| `deleteAppointment`        

### Create Appointment
```graphql
mutation {
  createAppointment(input: {
    notes: "This is a note",
    date: "2023-06-01",
    time: "10:00",
    status: PENDING, # Optional, default: PENDING
    price: 100.0,
    customerId: "uuid-of-customer",
    staffId: "uuid-of-staff",
    serviceId: "uuid-of-service"
  }) {
    id
    status
    date
    time
    price
    customer {
      id
      name
    }
    staff {
      id
      name
    }
    service {
      id
      name
    }
  }
}
```

### List Appointments (ADMIN/STAFF)
```graphql
query {
  appointments(filter: { ... }, pagination: { ... }) {
    items {
      id
      date
      status
      customer { name }
      staff { name }
    }
    totalCount
  }
}
```

### Search Appointment by ID
```graphql
query {
  appointment(id: "uuid-do-agendamento") {
    id
    date
    status
    notes
    customer { name }
    staff { name }
    service { name }
  }
}
```

### Update Status
```graphql
mutation {
  updateAppointmentStatus(id: "appointment-uuid", status: CONFIRMED) {
    id
    status
  }
}
```

### Delete Appointment
```graphql
mutation {
  deleteAppointment(id: "appointment-uuid") {
    success
    message
  }
}
```

## Authorization Observations
- All operations require authentication.
- The allowed roles for each operation are described in the tables above.

---