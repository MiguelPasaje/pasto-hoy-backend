/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventsModule } from './events/events.module';
import { PlansModule } from './plans/plans.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    EventsModule,
    PlansModule,
    AuthModule,
    UsersModule,
    MongooseModule.forRoot(
      'mongodb+srv://cartel17dy:RQnT49ZcaruoEhmM@cluster0.wg3uxkv.mongodb.net/?retryWrites=true&w=majority',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

