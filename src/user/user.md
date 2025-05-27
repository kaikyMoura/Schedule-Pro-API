# User Module

### Entity that represents the main user of the application

This entity represents the core user of the application. All user operations are role-based, ensuring proper access control and permission management across different functionalities. Each user has a specific role (e.g., CUSTOMER, STAFF, ADMIN) which defines their capabilities within the system. The entity includes essential personal information, authentication credentials, and relations to appointments, services, availability schedules, and session data. It serves as the foundation for user-related operations, supporting both client-side and administrative features.
## Endpoints

| Method | Endpoint                                  | Description                                                         | Auth Required | Roles         |
|:--------:|:-------------------------------------------|:---------------------------------------------------------------------|:----------------:|:----------------:|
| GET    | `/users`                         | List all users                                    | ✅             | `ADMIN`        |
| POST   | `/users`                         | Create a new user            | ❌             | `ANY` |
| GET    | `/users/:id`          | Find user by the provided id  | ✅             | `ADMIN` |
| GET    | `/users/email/:email`      | Find user by the provided email                          | ✅             | `ANY`          |
| GET    | `/users/me`      | Get the current user                          | ✅             | `ANY`          |
| PUT    | `/users/:id`                     | Update an existing user                           | ✅             | `ANY`        |
| PATCH    | `/users/:id/password`                     | Update the password of an existing user                           | ✅             | `ANY`        |
| DELETE | `/users/:id`                     | Delete an existing user                           | ✅             | `ADMIN`        |

---

## Example Payloads

### Create User
```json
POST /users

{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "password": "securePassword123",
  "role": "CUSTOMER", // Optional - Default: CUSTOMER
  "phone": "1234567890",
  "photo": "profile-picture.jpg" // Optional
}
