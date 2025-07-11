import { Field, ID, ObjectType, registerEnumType } from '@nestjs/graphql';
import { DayOfWeek } from 'prisma/app/generated/prisma/client';

registerEnumType(DayOfWeek, {
  name: 'DayOfWeek',
  description: 'The day of the week',
});

@ObjectType()
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
  specificDate: Date | null;

  @Field(() => Boolean)
  isAvailable: boolean;

  @Field(() => String, { nullable: true })
  breakStartTime: string | null;

  @Field(() => String, { nullable: true })
  breakEndTime: string | null;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
