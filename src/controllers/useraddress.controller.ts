import { JsonController, Get, Post, Put, Delete, Param, Body, QueryParam, UseBefore } from 'routing-controllers';
import { OpenAPI } from 'routing-controllers-openapi';
import { Service } from 'typedi';
import { UserAddressService } from '@/services/useraddress.service';
import { CreateUserAddressDto, UpdateUserAddressDto, UserAddressDto } from '@/dtos/useraddress.dto';
import { validationMiddleware } from '@/middlewares/validation.middleware';
import { HttpException } from '@/exceptions/HttpException';

@Service()
@JsonController('/useraddress')
export class UserAddressController {
  constructor(private readonly userAddressService: UserAddressService) {}

  // Get all user addresses by user ID
  @Get('/user/:userId')
  @OpenAPI({
    summary: 'Get all user addresses by user ID',
    description: 'Returns all addresses associated with the specified user ID.',
  })
  async getUserAddressesByUserId(@Param('userId') userId: string): Promise<UserAddressDto[]> {
    return await this.userAddressService.getUserAddressesByUserId(userId);
  }

  // Get all user addresses by mobile number
  @Get('/mobile/:mobileNumber')
  @OpenAPI({
    summary: 'Get all user addresses by mobile number',
    description: 'Returns all addresses associated with the specified mobile number.',
  })
  async getUserAddressesByMobile(@Param('mobileNumber') mobileNumber: string): Promise<UserAddressDto[]> {
    return await this.userAddressService.getUserAddressesByMobileNumber(mobileNumber);
  }

  // Get a specific user address by address ID
  @Get('/:addressId')
  @OpenAPI({
    summary: 'Get a user address by ID',
    description: 'Returns details of a user address by its address ID.',
  })
  async getUserAddressById(@Param('addressId') addressId: number): Promise<UserAddressDto> {
    return await this.userAddressService.getUserAddressById(addressId);
  }

  // Create a new user address
  @Post('')
  @OpenAPI({
    summary: 'Create a new user address',
    description: 'Creates a new user address and returns the created address details.',
  })
  @UseBefore(validationMiddleware(CreateUserAddressDto))
  async createUserAddress(@Body() createUserAddressDto: CreateUserAddressDto): Promise<UserAddressDto> {
    return await this.userAddressService.createUserAddress(createUserAddressDto);
  }

  // Update an existing user address by ID
  @Put('/:addressId')
  @OpenAPI({
    summary: 'Update a user address by ID',
    description: 'Updates the user address details based on the address ID.',
  })
  @UseBefore(validationMiddleware(UpdateUserAddressDto))
  async updateUserAddressById(
    @Param('addressId') addressId: number,
    @Body() updateUserAddressDto: UpdateUserAddressDto
  ): Promise<UserAddressDto> {
    return await this.userAddressService.updateUserAddressById(addressId, updateUserAddressDto);
  }

  // Delete a user address by ID
  @Delete('/:addressId')
  @OpenAPI({
    summary: 'Delete a user address by ID',
    description: 'Deletes a user address by its address ID.',
  })
  async deleteUserAddressById(@Param('addressId') addressId: number): Promise<{ message: string }> {
    await this.userAddressService.deleteUserAddressById(addressId);
    return { message: 'User address deleted successfully' };
  }
}
