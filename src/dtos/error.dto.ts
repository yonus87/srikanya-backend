import { IsNumber, IsString } from 'class-validator';

export class ErrorDto {
    @IsNumber()
  public statuscode: number;

    @IsString()
    public message: string;

    @IsString()
    public errorcode: string;

  // @IsArray()
  // public data: any[];
}