import { ServiceItem } from 'prisma/app/generated/prisma/client';
import { FieldInSpec } from 'src/common/specs/field-in.spec';

export class WithServiceItemsSpec extends FieldInSpec<ServiceItem> {
  constructor(serviceItemIds: string[]) {
    super('id', serviceItemIds);
  }
}
