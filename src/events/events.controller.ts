/* eslint-disable prettier/prettier */
import { Body, Controller, Post, Get, Query, Param, Delete, Put, NotFoundException,Res, HttpStatus } from '@nestjs/common';
import { EventDto } from './dto/event.dto';
import { EventsService } from './events.service';
import { Public } from 'src/auth/public.setMetadata';

@Controller('events')
export class EventsController {

    constructor(private readonly service:EventsService){}

    @Public()
    @Post()
    async add(@Res() res, @Body() eventDto:EventDto){
        const event = await this.service.add(eventDto)
        return res.status(HttpStatus.OK).json({
            message:'successfully',
            event
        })
        //this.service.add(event)
    }

    @Public()
    @Get()
    getEvents(@Query("page") page?: number, @Query("page_size") pageSize?: number): EventDto[]{
        return this.service.get(page ?? 1, pageSize ?? 50 )
    }



    @Get(":id")
    getEventById(@Param("id") id: string):EventDto{
        const result = this.service.getById(id)
        if (result == undefined) {
            throw new NotFoundException()
        }
        return result
    }

    @Put(":id")
    updateEvent(@Param("id") id: string,@Body() event:EventDto){
        this.service.update(id,event)
    }

    @Delete(":id")
    removeEvent(@Param("id") id:string){
        this.service.delete(id)   

    }
}