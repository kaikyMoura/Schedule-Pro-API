```
refactor(core): transition to GraphQL-only API and restructure modules

This major refactor transitions the application to a pure GraphQL API, removing all REST controllers and related infrastructure. It also includes significant code reorganization to improve modularity, maintainability, and type safety.

Key changes include:
- **GraphQL-Only Architecture**: All REST controllers and their associated test files have been removed across modules (User, ServiceItem, Appointment, etc.). The application now exclusively uses GraphQL for its API. The generated `schema.gql` is now tracked in version control.
- **Module Reorganization**:
  - DataLoaders have been moved from a central location into their respective feature modules (e.g., `UserModule`, `ServiceItemModule`).
  - Modules now explicitly export their public providers (services, guards) and use `forwardRef` to resolve circular dependencies that arose from this stricter structure.
- **Interceptor Consolidation**: A new `GlobalInterceptor` has been introduced to orchestrate the execution order of other interceptors (Logging, Audit, Metrics, Response), simplifying the global setup in `main.ts`.
- **Directory & Naming Conventions**:
  - DTO, entity, and type files have been systematically moved into more consistent subdirectories like `dtos/`, `types/`, and `dataloader/`.
  - GraphQL input types and enums have been refined to improve schema clarity and avoid naming conflicts (e.g., `AppointmentType` enum renamed to `AppointmentTypeEnum`).
- **Dependency & Type Safety**:
  - DTOs are now explicitly defined with validation decorators rather than inheriting from entity types.
  - Corrected module dependencies and exports for services like `NotificationService`, `HashingService`, and `UserSessionService`.

BREAKING CHANGE: All REST API endpoints have been removed. Consumers must now use the GraphQL API available at the `/graphql` endpoint.
```