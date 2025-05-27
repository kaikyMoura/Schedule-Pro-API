# Service Item Module

### Entity that represents the Service Items and their associated details.

This entity defines the catalog of services offered within the application. Each service item includes essential attributes such as the service type, base price, and duration in minutes. It represents standardized service definitions that can be linked to one or more staff members who are qualified to deliver them.

Each ServiceItem serves as a blueprint for scheduling appointments and enables the platform to:
- Provide a consistent set of available services to users. 
- Define the expected duration and default pricing for each service. 
- Associate services with multiple staff members through the StaffService relationship, allowing for custom pricing and staff-specific availability.

## Endpoints

| Method | Endpoint                                  | Description                                                         | Auth Required | Roles         |
|:--------:|:-------------------------------------------|:---------------------------------------------------------------------|:----------------:|:----------------:|
| GET    | `/service-items`                         | List all available service items                                    | ✅             | `ANY`        |
| POST   | `/service-items`                         | Create a new service item            | ✅             | `ADMIN` |
| GET    | `/service-items/:id`          | Find a specific service item by the provided id  | ✅             | `ANY` |
| PUT    | `/service-items/:id`                     | Update an existing service item                           | ✅             | `ADMIN`        |
| DELETE | `/service-items/:id`                     | Delete an existing service item                           | ✅             | `ADMIN`        |

---

## Example Payloads

### Create Service Item
```json
POST /service-items

{
  "type": "HAIRCUT",
  "price": 50.0,
  "duration": 30 // Duration in minutes
}
