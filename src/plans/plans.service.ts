/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PlansDto } from './dto/plans.dto';

@Injectable()
export class PlansService {

    plans: PlansDto[] = []

    add(plan:PlansDto){
        this.plans.push(plan)
    }

    update(id:string,plan:PlansDto){
        const index = this.plans.findIndex((plan)=>plan.id === id)
        if (index == undefined) {
            return
        }
        /* if (plan) { */
            console.log(plan, index);
            
        //}
        //this.plans.splice(index,1)
        this.plans[index] = { ...this.plans[index], ...plan };

    }

    get(page:number, pageSize: number): PlansDto[]{
        console.log(page,pageSize);
        
        return this.plans
    }

    getById(id: string): PlansDto | undefined{
        return this.plans.find((e)=> e.id == id)
    }

    delete(id:string){
        this.plans = this.plans.filter((plan) => plan.id !== id)
    }
    

}
