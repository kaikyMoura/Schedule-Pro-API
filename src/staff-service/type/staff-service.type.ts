import { Field, Float, ID, Int, ObjectType } from '@nestjs/graphql';
import { ServiceItemType } from 'src/serviceItem/type/service-item.type';
import { UserType } from 'src/user/type/user.type';

@ObjectType()
export class StaffServiceType {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  staffId: string;

  @Field(() => String)
  serviceId: string;

  @Field(() => Float)
  customPrice: number;

  @Field(() => Int)
  customDuration: number;

  @Field(() => Boolean)
  isActive: boolean;

  @Field(() => Boolean)
  isPreferred: boolean;

  @Field(() => Int)
  skillLevel: number;

  @Field(() => Int, { nullable: true })
  experience: number;

  @Field(() => Date, { nullable: true })
  createdAt?: Date;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date;

  @Field(() => UserType)
  staff: UserType;

  @Field(() => ServiceItemType)
  service: ServiceItemType;
}
