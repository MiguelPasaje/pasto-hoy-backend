/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PlansDto } from './dto/plans.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Plans } from './interfaces/plans.interface';

@Injectable()
export class PlansService {
  constructor(@InjectModel('Plan') private readonly plansModel: Model<Plans>) {}

  plans: PlansDto[] = [];

  async add(createPlan: PlansDto): Promise<Plans> {
    const plan = new this.plansModel(createPlan);
    return await plan.save();
    //this.plans.push(plan)
  }

  async update(id: string, plan: PlansDto): Promise<Plans> {
    const updatePlan = await this.plansModel.findByIdAndUpdate(id, plan, {
      new: true,
    });
    return updatePlan;

    /* const index = this.plans.findIndex((plan)=>plan.id === id)
        if (index == undefined) {
            return
        }
        this.plans[index] = { ...this.plans[index], ...plan }; */
  }

  async get(page: number, pageSize: number): Promise<Plans[]> {
    console.log(page, pageSize);
    const plans = await this.plansModel.find();
    return plans;
  }

  async getById(id: string): Promise<Plans | undefined> {
    try {
      const plan = await this.plansModel.findById(id).exec();
      return plan;
    } catch (error) {
      return undefined;
    }
    //return this.plans.find((e)=> e.id == id)
  }

  async delete(id: string): Promise<Plans> {
    const deletePlan = await this.plansModel.findByIdAndDelete(id);
    return deletePlan;
    // this.plans = this.plans.filter((plan) => plan.id !== id)
  }
}
