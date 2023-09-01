/* eslint-disable prettier/prettier */
import { IsDate, IsNotEmpty, IsUrl, Min, ValidateIf, IsDateString,ValidationOptions } from "class-validator";

export class EventDto {
  id?: string;
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  // @IsDate()
  @IsDateString()
  date: string;

  @IsUrl()
  images: string;

  @IsNotEmpty()
  owner: string;

  @IsNull()
  address: number;

  @ValidateIf((_,value)=> value != undefined)
  @Min(0)
  cost?: number;
}

function IsNull(validationOptions?: ValidationOptions){
    return ValidateIf((_,value)=> value != undefined, validationOptions)
}