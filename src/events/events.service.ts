/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { EventDto } from './dto/event.dto';

@Injectable()
export class EventsService {

    events: EventDto[] = []

    add(event:EventDto){
        this.events.push(event)
    }

    update(id:string,event:EventDto){
        const index = this.events.findIndex((event)=>event.id === id)
        if (index == undefined) {
            return
        }

        this.events.splice(index,1)
    }

    get(page:number, pageSize: number): EventDto[]{
        return this.events
    }

    getById(id: string): EventDto | undefined{
        return this.events.find((e)=> e.id == id)
    }

}
