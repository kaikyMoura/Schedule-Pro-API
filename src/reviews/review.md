# Review Module (GraphQL)

## Overview

The `Review` module manages customer reviews for services and staff. It allows users to create, fetch, and filter reviews, supporting pagination and custom queries. The module is integrated with Google Pub/Sub for event-driven actions, such as publishing a message when a new review is created.

## Main Entities

- **Review**: Represents a customer's review, including rating, comment, and references to the customer, staff, and service items.

## GraphQL Operations

### Queries
| Name         | Description                                 | Allowed Roles         |
|--------------|---------------------------------------------|----------------------|
| `reviews`    | List all reviews with optional filters, pagination, and ordering | ANY authenticated user |
| `review(id)` | Get a review by its ID                      | ANY authenticated user |

### Mutations
| Name              | Description                                         | Allowed Roles                |
|-------------------|-----------------------------------------------------|------------------------------|
| `createReview`    | Create a new review                                 | CUSTOMER                     |

---

### List Reviews

```graphql
query {
  reviews(
    filter: { staffId: "staff-uuid" }
    pagination: { limit: 10, page: 0 }
    orderBy: { createdAt: DESC }
  ) {
    nodes {
      id
      rating
      comment
      customerId
      staffId
      serviceItemIds
      createdAt
    }
    totalCount
    hasNextPage
    hasPreviousPage
  }
}
```

### Get Review by ID

```graphql
query {
  review(id: "review-uuid") {
    success
    message
    data {
      id
      rating
      comment
      customerId
      staffId
      serviceItemIds
      createdAt
    }
  }
}
```

### Create Review

```graphql
mutation {
  createReview(input: {
    rating: 5,
    comment: "Excellent service!",
    customerId: "customer-uuid",
    staffId: "staff-uuid",
    serviceItemIds: ["service-item-uuid"]
  }) {
    success
    message
    data {
      id
      rating
      comment
      customerId
      staffId
      serviceItemIds
      createdAt
    }
  }
}
```

---

## Pub/Sub Integration

- When a review is created, a message is published to the `addReview` topic using Google Pub/Sub.
- The service listens to the `addReview` subscription and logs received messages.

---

## Authorization Observations

- All operations require authentication.
- Only customers can create reviews.
- All authenticated users can query reviews.

---

For more details on the Review type fields or advanced queries, refer to the GraphQL schema or request specific examples.
