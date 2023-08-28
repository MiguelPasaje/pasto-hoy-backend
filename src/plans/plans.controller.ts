/* eslint-disable prettier/prettier */
import { Body, Controller, Post, Get, Query, Param, Delete, Put, NotFoundException } from '@nestjs/common';
import { PlansService } from './plans.service';
import { PlansDto } from './dto/plans.dto';


@Controller('plans')
export class PlansController {

    constructor(private readonly service:PlansService){}

    @Post()
    add(@Body() plan:PlansDto){
        this.service.add(plan)
    }

    @Get()
    getPlans(@Query("page") page?: number, @Query("page_size") pageSize?: number): PlansDto[]{
        return this.service.get(page ?? 1, pageSize ?? 50 )
    }



    @Get(":id")
    getPlanById(@Param("id") id: string):PlansDto{
        const result = this.service.getById(id)
        if (result == undefined) {
            throw new NotFoundException()
        }
        return result
    }

    @Put(":id")
    updatePlan(@Param("id") id: string,@Body() plan:PlansDto){
        this.service.update(id,plan)
    }

    @Delete(":id")
    removePlan(@Param("id") id:string){
       this.service.delete(id)   
    }

}
