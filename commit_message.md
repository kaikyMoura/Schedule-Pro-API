feat(pubsub): integrate Google Cloud Pub/Sub for event-driven actions

This commit introduces Google Cloud Pub/Sub to enable an event-driven architecture within the application. A new `GoogleModule` and `PubsubService` are created to encapsulate the logic for connecting to Pub/Sub, publishing messages, and handling subscriptions.

Key changes include:
- Added the `@google-cloud/pubsub` dependency.
- Implemented a reusable `PubsubService` for publishing and subscribing to topics.
- The `ReviewResolver` now publishes a message to the 'addReview-sub' topic when a new review is created.
- The `PubsubService` subscribes to the 'addReview-sub' topic on application startup to process incoming events.
- Added `credentials.json` to `.gitignore` to prevent committing sensitive keys.