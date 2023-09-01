/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Post,
  Get,
  Query,
  Param,
  Delete,
  Put,
  NotFoundException,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { PlansService } from './plans.service';
import { PlansDto } from './dto/plans.dto';
import { Public } from 'src/auth/public.setMetadata';

@Controller('plans')
export class PlansController {
  constructor(private readonly service: PlansService) {}

  @Public()
  @Post()
  async add(@Res() res, @Body() planDto: PlansDto) {
    const plan = await this.service.add(planDto);
    return res.status(HttpStatus.OK).json({
      message: 'received',
      plan: plan,
    });
  }

  @Public()
  @Get()
  async getPlans(
    @Res() res,
    @Query('page') page?: number,
    @Query('page_size') pageSize?: number,
  ): Promise<PlansDto[]> {
    const plans = await this.service.get(page ?? 1, pageSize ?? 50);
    return res.status(HttpStatus.OK).json({
      plans,
    });

    //return this.service.get(page ?? 1, pageSize ?? 50 )
  }

  @Public()
  @Get(':id')
  async getPlanById(@Res() res, @Param('id') id: string): Promise<PlansDto> {
    const result = await this.service.getById(id);
    if (!result) {
      throw new NotFoundException('no se encontro el producto');
    }
    return res.status(HttpStatus.OK).json({
      result,
    });
  }

  @Public()
  @Put(':id')
  async updatePlan(
    @Res() res,
    @Param('id') id: string,
    @Body() plan: PlansDto,
  ) {
    const planUpdated = await this.service.update(id, plan);
    if (!planUpdated) throw new NotFoundException('No se actulizo ningun plan');
    return res.status(HttpStatus.OK).json({
        message:'plan updated successfully',
        planUpdated
    });
  }

  @Public()
  @Delete()
  async removePlan(@Res() res, @Query('planId') planId) {
    const planDeleted = await this.service.delete(planId);
    if (!planDeleted) throw new NotFoundException('plan no existe');
    return res.status(HttpStatus.OK).json({
      message: 'plan eliminado',
      planDeleted,
    });
    //this.service.delete(id)
  }
}
