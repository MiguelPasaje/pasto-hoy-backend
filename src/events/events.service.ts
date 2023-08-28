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

        //this.events.splice(index,1)
        this.events[index] = { ...this.events[index], ...event };
    }

    get(page:number, pageSize: number): EventDto[]{
        console.log(page,pageSize);
        return this.events
    }

    getById(id: string): EventDto | undefined{
        return this.events.find((e)=> e.id == id)
    }

    delete(id: string) {
        this.events = this.events.filter((event)=> event.id !== id)
    }

}
