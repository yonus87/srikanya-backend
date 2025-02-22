import { AutoMap } from '@automapper/classes';
import { 
  IsInt, 
  IsString, 
  IsOptional, 
  Min, 
  Max, 
  Matches, 
  IsNotEmpty, 
  IsDate 
} from 'class-validator';

// DTO for User Registration
export class UserRegistrationDto {
  @AutoMap()
  @IsInt()
  public id!: number;

  @AutoMap()
  @IsOptional()
  @IsString()
  @Matches(/^[0-9]{10}$/, { message: 'Mobile number must be a valid 10-digit number' })
  public mobileNumber?: string;

  @AutoMap()
  @IsOptional()
  @IsInt()
  @Min(1000)
  @Max(9999)
  public otp?: number;

  @AutoMap()
  @IsOptional()
  @IsInt()
  @Min(0)
  @Max(5, { message: 'Maximum OTP sent attempts reached' }) // Limiting OTP attempts to 5
  public numberOfOtpSent?: number;

  @AutoMap()
  @IsOptional()
  @IsInt()
  @Min(0)
  @Max(5, { message: 'Maximum OTP tries reached' }) // Limiting OTP attempts to 5
  public numberOfOtpTried?: number;
}

// DTO for Creating User Registration
export class CreateUserRegistrationDto {
  @AutoMap()
  @IsString()
  @IsNotEmpty()
  @Matches(/^[0-9]{10}$/, { message: 'Mobile number must be a valid 10-digit number' })
  public mobileNumber!: string;

  @AutoMap()
  @IsInt()
  @Min(1000)
  @Max(9999)
  public otp!: number;

  @AutoMap()
  @IsOptional()
  @IsInt()
  @Min(0)
  public numberOfOtpSent?: number;

  @AutoMap()
  @IsOptional()
  @IsInt()
  @Min(0)
  @Max(5, { message: 'Maximum OTP tries reached' })
  public numberOfOtpTried?: number;
}

// DTO for Updating User Registration
export class UpdateUserRegistrationDto {
  @AutoMap()
  @IsOptional()
  @IsString()
  @Matches(/^[0-9]{10}$/, { message: 'Mobile number must be a valid 10-digit number' })
  public mobileNumber?: string;

  @AutoMap()
  @IsOptional()
  @IsInt()
  @Min(1000)
  @Max(9999)
  public otp?: number;

  @AutoMap()
  @IsOptional()
  @IsInt()
  @Min(0)
  @Max(5, { message: 'Maximum OTP sent attempts reached' })
  public numberOfOtpSent?: number;

  @AutoMap()
  @IsOptional()
  @IsInt()
  @Min(0)
  @Max(5, { message: 'Maximum OTP tries reached' })
  public numberOfOtpTried?: number;
}

// DTO for User Registration Response
export class UserRegistrationResponseDto {
  @AutoMap()
  @IsInt()
  public id!: number;

  @AutoMap()
  @IsString()
  public mobileNumber!: string;

  @AutoMap()
  @IsInt()
  public otp!: number;

  @AutoMap()
  @IsInt()
  public numberOfOtpSent!: number;

  @AutoMap()
  @IsInt()
  public numberOfOtpTried!: number;

  @AutoMap()
  @IsDate()
  public createdAt!: Date;

  @AutoMap()
  @IsDate()
  public updatedAt!: Date;

  @AutoMap()
  @IsString()
  public status?: string; //  optional status
}
