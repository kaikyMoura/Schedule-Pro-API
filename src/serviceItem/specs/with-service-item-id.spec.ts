import { ServiceItem } from 'prisma/app/generated/prisma/client';
import { FieldIdSpec } from 'src/common/specs/field-id.spec';

export class WithServiceItemIdSpec extends FieldIdSpec<ServiceItem> {
  constructor(serviceItemId: string) {
    super('id', serviceItemId);
  }
}
