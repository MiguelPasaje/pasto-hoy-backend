/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { EventsController } from './events.controller';
import { EventsService } from './events.service';
import { EventSchema } from './schemas/events.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  controllers: [EventsController],
  providers: [EventsService],
  imports: [
    MongooseModule.forFeature([
      {name:'Events', schema:EventSchema},
    ])
  ],
})
export class EventsModule {}
