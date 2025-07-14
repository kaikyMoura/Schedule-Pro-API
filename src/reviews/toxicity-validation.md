# Toxicity Validation for Reviews

## Overview

This system implements automatic toxicity validation for reviews using Google's Perspective API. All reviews created go through content analysis before being saved to the database.

## How It Works

### 1. Content Analysis
When a review is created, the system:
- Combines the review title and comment into a single text
- Sends the text to Google's Perspective API
- Analyzes multiple toxicity attributes

### 2. Analyzed Attributes
The API analyzes the following attributes:
- **TOXICITY**: General toxic content
- **INSULT**: Insults and offenses
- **PROFANITY**: Profane language
- **THREAT**: Threats
- **SEXUALLY_EXPLICIT**: Sexually explicit content
- **FLIRTATION**: Flirtatious content
- **SEXIST**: Sexist content
- **SEXIST_JOKES**: Sexist jokes (various categories)

### 3. Toxicity Limits
Each attribute has a configurable limit:
```typescript
{
  TOXICITY: 0.6,
  SEVERE_TOXICITY: 0.6,
  IDENTITY_ATTACK: 0.6,
  INSULT: 0.6,
  PROFANITY: 0.6,
  THREAT: 0.6,
  SEXUALLY_EXPLICIT: 0.5,
  FLIRTATION: 0.5,
}
```

### 4. Behavior
- **Approved Content**: If all scores are below the limits, the review is created normally
- **Rejected Content**: If any score exceeds the limit, a `ToxicContentException` is thrown
- **API Failure**: If the API fails, the review is allowed for safety (fail-safe)

## Usage Example

### GraphQL Mutation
```graphql
mutation CreateReview($input: CreateReviewInput!) {
  createReview(input: $input) {
    success
    message
    data {
      id
      appointmentId
      customerId
      staffId
      serviceId
      rating
      title
      comment
      isApproved
      isPublic
      createdAt
      updatedAt
    }
  }
}
```

### Input Example
```json
{
  "appointmentId": "uuid-of-appointment",
  "customerId": "uuid-of-customer",
  "staffId": "uuid-of-staff",
  "serviceId": "uuid-of-service",
  "rating": 5,
  "title": "Great service!",
  "comment": "Very satisfied with the service provided.",
}
```

### Success Response
```json
{
  "success": true,
  "message": "Review created successfully",
  "data": {
    "id": "review-id",
    "appointmentId": "uuid-of-appointment",
    "customerId": "uuid-of-customer",
    "staffId": "uuid-of-staff",
    "serviceId": "uuid-of-service",
    "rating": 5,
    "title": "Great service!",
    "comment": "Very satisfied with the service provided.",
    "isApproved": false,
    "isPublic": true,
    "createdAt": "2024-01-15T10:30:00Z",
    "updatedAt": "2024-01-15T10:30:00Z"
  }
}
```

### Error Response (Toxic Content)
```json
{
  "success": false,
  "message": "Content exceeds toxicity limit (0.85 > 0.7)",
  "error": "Content exceeds toxicity limit (0.85 > 0.7)",
  "data": null
}
```

## Configuration

### Environment Variables
```env
PERSPECTIVE_API_KEY=your_google_perspective_api_key
```

### Adjusting Limits
To modify toxicity limits, edit the `review.service.ts` file:

```typescript
private readonly toxicityLimits: ToxicityLimits = {
  TOXICITY: 0.6,
  INSULT: 0.6,
  // ... other limits
};
```

## Error Handling

### ToxicContentException
Thrown when content exceeds toxicity limits:
```typescript
throw new ToxicContentException(
  `Content exceeds ${attribute.toLowerCase()} limit (${score} > ${limit})`
);
```

### API Failures
If Google's Perspective API fails:
- The error is logged to console
- The review is allowed for safety
- This prevents technical failures from blocking legitimate reviews

## Testing

Tests include scenarios for:
- ✅ Content that passes validation
- ❌ Content that exceeds toxicity limits
- 📝 Empty content (always allowed)
- 🔧 API failures (fail-safe)

## Performance Considerations

- Toxicity analysis adds latency to review creation
- The API has rate limiting
- Consider implementing cache for similar results if needed

## Security

- The API key must be kept secure
- Limits are configured to balance security and usability
- The system is fail-safe to prevent accidental blocking 