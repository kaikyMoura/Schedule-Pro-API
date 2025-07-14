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
mutation CreateAppointment($input: CreateAppointmentInput!) {
  createAppointment(input: $input) {
    success
    message
    error
    data {
      id
      currency
      discount
      endTime
      finalPrice
      notes
      price
      scheduledDate
      scheduledTime
      startTime
      status
      timezone
      type
      createdAt
      updatedAt
    }
  }
}
```

### Variables Example
```json
{
  "input": {
    "currency": "USD",
    "customerId": "uuid-of-customer",
    "discount": 0,
    "endTime": "2024-01-15T11:00:00Z",
    "finalPrice": 100.0,
    "notes": "This is a note",
    "price": 100.0,
    "scheduledDate": "2024-01-15T00:00:00Z",
    "scheduledTime": "10:00",
    "serviceId": "uuid-of-service",
    "staffId": "uuid-of-staff",
    "startTime": "2024-01-15T10:00:00Z",
    "status": "PENDING",
    "timezone": "America/New_York",
    "type": "REGULAR"
  }
}
```

### Success Response
```json
{
  "success": true,
  "message": "Appointment created successfully",
  "error": null,
  "data": {
    "id": "appointment-id",
    "currency": "USD",
    "discount": 0,
    "endTime": "2024-01-15T11:00:00Z",
    "finalPrice": 100.0,
    "notes": "This is a note",
    "price": 100.0,
    "scheduledDate": "2024-01-15T00:00:00Z",
    "scheduledTime": "10:00",
    "startTime": "2024-01-15T10:00:00Z",
    "status": "PENDING",
    "timezone": "America/New_York",
    "type": "REGULAR",
    "createdAt": "2024-01-15T09:30:00Z",
    "updatedAt": "2024-01-15T09:30:00Z"
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