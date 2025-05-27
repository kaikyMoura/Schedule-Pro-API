# Appointment Module

### Entity that represents the user's appointments and their associated details.

This entity models the appointments scheduled within the application, linking users in the roles of CUSTOMER and STAFF with specific services. It contains detailed information about each appointment, such as date, time, status, price, optional notes, and references to both the service being provided and the users involved.

Each appointment is associated with:
- A customer (user with role CUSTOMER) who booked the service. 
- A staff member (user with role STAFF) who is responsible for delivering the service.
- A service item that defines the type, duration, and base price of the appointment.

## Endpoints

| Method | Endpoint                                  | Description                                                         | Auth Required | Roles         |
|:--------:|:-------------------------------------------|:---------------------------------------------------------------------|:----------------:|:----------------:|
| GET    | `/appointments`                         | List all appointments                                    | ✅             | `ADMIN`, `STAFF`        |
| POST   | `/appointments`                         | Create a new appointment            | ✅             | `CUSTOMER`, `ADMIN` |
| GET    | `/appointments/:id`          | Find appointment by the provided id  | ✅             | `ANY` |
| GET    | `/appointments/customer/:customerId`      | Find all appointments for a customer by the provided id                          | ✅             | `CUSTOMER`, `ADMIN`          |
| GET    | `/appointments/staff/:staffId`      | Find all appointments for a staff by the provided id                          | ✅             | `STAFF`, `ADMIN`          |
| PUT    | `/appointments/:id`                     | Update an existing appointment                           | ✅             | `CUSTOMER`, `ADMIN`        |
| PATCH    | `/appointments/:id/status`                     | Update the status of an existing appointment                           | ✅             | `ANY`        |
| DELETE | `/appointments/:id`                     | Delete an existing appointment                           | ✅             | `CUSTOMER`, `ADMIN`        |

---

## Example Payloads

### Create User
```json
POST /appointments

{
  "notes": "This is a note",
  "date": "2023-06-01",
  "time": "10:00",
  "status": "PENDING", // Optional - Default: PENDING
  "price": 100.0,
  "customerId": "uuid-of-customer",
  "staffId": "uuid-of-staff",
  "serviceId": "uuid-of-service",
}
