/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { PlansService } from './plans.service';
import { PlansController } from './plans.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PlanSchema } from './schemas/plans.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name:'Plan', schema:PlanSchema},
    ])
  ],
  providers: [PlansService],
  controllers: [PlansController]
})
export class PlansModule {}
