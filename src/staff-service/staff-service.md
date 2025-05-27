# StaffService Module

Entity that represents the relation between a `User` with role `STAFF` and a `ServiceItem`.  
Each `StaffService` entry defines which services a staff member can perform, including custom pricing and status.

## Endpoints

| Method | Endpoint                                  | Description                                                         | Auth Required | Roles         |
|:--------:|:-------------------------------------------|:---------------------------------------------------------------------|:----------------:|:----------------:|
| GET    | `/staff-services`                         | List all staff-service relations                                    | ✅             | `ADMIN`        |
| POST   | `/staff-services`                         | Create a new relation between a staff and a service item            | ✅             | `STAFF`, `ADMIN` |
| GET    | `/staff-services/staff/:staffId`          | Get all services linked to a specific staff                         | ✅             | `STAFF`, `ADMIN` |
| GET    | `/staff-services/service/:serviceId`      | Get all staff linked to a specific service                          | ✅             | `ANY`          |
| PUT    | `/staff-services/:id`                     | Update an existing staff-service relation                           | ✅             | `ADMIN`        |
| PATCH  | `/staff-services/:id/active`              | Update only the active status of the relation                       | ✅             | `ADMIN`        |
| PATCH  | `/staff-services/:id/custom-price`        | Update only the custom price of the relation                        | ✅             | `STAFF`, `ADMIN` |
| DELETE | `/staff-services/:id`                     | Delete the relation between staff and service                       | ✅             | `STAFF`, `ADMIN` |

---

## Example Payloads

### Create StaffService
```json
POST /staff-services

{
  "staffId": "uuid-of-staff",
  "serviceId": "uuid-of-service",
  "customPrice": 70.0, // Optional
  "active": true // Optional
}
