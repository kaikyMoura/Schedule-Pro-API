import { InputType } from '@nestjs/graphql';
import { ServiceItemType } from '../type/service-item.type';

@InputType()
export class UpdateServiceItemInput extends ServiceItemType {}
