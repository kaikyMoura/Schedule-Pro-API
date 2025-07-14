import { PubSub, Subscription } from '@google-cloud/pubsub';
import { Injectable, Logger, OnModuleInit } from '@nestjs/common';

@Injectable()
export class PubsubService implements OnModuleInit {
  private readonly logger = new Logger(PubsubService.name);
  private pubSubClient: PubSub;
  private subscription: Subscription;

  constructor() {
    this.pubSubClient = new PubSub();
  }

  onModuleInit() {
    this.subscription = this.pubSubClient.subscription('addReview-sub', {
      flowControl: {
        maxMessages: 10,
      },
    });

    this.subscription.on('message', (message) => {
      this.logger.log('Received message:', message.data.toString());
    });
    this.subscription.on('error', (error) => {
      this.logger.error('PubSub error:', error);
    });

    this.logger.log(`🟢 Subscribed to addReview`);
  }

  /**
   * Subscribe to a topic and create a subscription.
   * @param topicNameOrId - The name or ID of the topic to subscribe to.
   * @param subscriptionNameOrId - The name or ID of the subscription to create.
   * @returns A promise that resolves to a string indicating the success of the operation.
   *
   * @example
   * ```typescript
   * const pubsubService = new PubsubService(pubsub);
   * await pubsubService.subscribe('my-topic', 'my-subscription');
   * ```
   */
  async subscribe(
    topicNameOrId: string,
    subscriptionNameOrId: string,
  ): Promise<void> {
    const subscription = await this.pubSubClient
      .topic(topicNameOrId)
      .createSubscription(subscriptionNameOrId);

    if (!subscription) {
      throw new Error(
        `Unexpected error creating subscription "${subscriptionNameOrId}"`,
      );
    }

    this.logger.log(
      `Subscription "${subscriptionNameOrId}" created successfully`,
    );
  }

  /**
   * Publish a message to a topic.
   * @param topicNameOrId - The name or ID of the topic to publish to.
   * @param data - The data to publish.
   * @param customAttributes - Custom attributes to add to the message.
   * @param callback - A callback function to be called when the message is published.
   */
  publishMessage(
    topicNameOrId: string,
    data:
      | string
      | Uint8Array<ArrayBufferLike>
      | Buffer<ArrayBufferLike>
      | null
      | undefined,
    customAttributes?: Record<string, string>,
    callback?: (message: unknown) => void,
  ): void {
    void this.pubSubClient.topic(topicNameOrId).publishMessage(
      {
        data,
        attributes: customAttributes,
      },
      (err, messageId) => {
        if (callback) {
          callback(messageId);
        }
        if (err) {
          this.logger.error('Error publishing message:', err);
        } else {
          this.logger.log(`Message published with ID: ${messageId}`);
        }
      },
    );
  }
}
