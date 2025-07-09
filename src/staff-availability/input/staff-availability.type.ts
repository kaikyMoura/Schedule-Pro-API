import { Field, ID, InputType } from '@nestjs/graphql';
import { DayOfWeek } from 'prisma/app/generated/prisma/client';
import { UserType } from 'src/user/type/user.entity';

@InputType()
export class StaffAvailabilityType {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  staffId: string;

  @Field(() => DayOfWeek)
  dayOfWeek: DayOfWeek;

  @Field(() => String)
  startTime: string;

  @Field(() => String)
  endTime: string;

  @Field(() => Date, { nullable: true })
  specificDate?: Date;

  @Field(() => Boolean)
  isAvailable: boolean;

  @Field(() => String, { nullable: true })
  breakStartTime?: string;

  @Field(() => String, { nullable: true })
  breakEndTime?: string;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;

  @Field(() => UserType)
  staff: UserType;
}
