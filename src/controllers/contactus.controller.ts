import { JsonController, Get, Post, Put, Delete, Param, Body, QueryParam, UseBefore } from 'routing-controllers';
import { OpenAPI, ResponseSchema } from 'routing-controllers-openapi';
import { Service } from 'typedi';
import { ContactUsService } from '@/services/contactus.service';
import { CreateContactUsDto, UpdateContactUsDto, ContactUsDto, ContactUsListResponseDto } from '@/dtos/contactus.dto';
import { validationMiddleware } from '@/middlewares/validation.middleware';
import { HttpException } from '@/exceptions/HttpException';

@Service()
@JsonController('/contact-us')
export class ContactUsController {
  constructor(private readonly contactUsService: ContactUsService) {}

  @Get('')
  @OpenAPI({
    summary: 'Get all contact messages',
    description: 'Returns a list of all contact messages',
  })
  async getAllMessages(): Promise<ContactUsDto[]> {
    try {
      const messages = await this.contactUsService.getAllMessages(); 
      return messages;
    } catch (error) {
      console.error('Error in getAllMessages controller:', error);
      throw new HttpException(500, `Error retrieving messages: ${error.message}`);
    }
  }

  // Get a contact message by ID
  @Get('/:id')
  @OpenAPI({
    summary: 'Get contact message by ID',
    description: 'Returns the details of a specific contact message by its ID',
  })
  async getMessageById(
    @Param('id') id: number
  ): Promise<ContactUsDto | undefined> {
    try {
      const message = await this.contactUsService.getMessageById(id);
      if (!message) {
        throw new HttpException(404, `Message with ID ${id} not found`);
      }
      return message;
    } catch (error) {
      console.error(`Error in getMessageById controller for message ID ${id}:`, error);
      throw new HttpException(500, `Error retrieving message: ${error.message}`);
    }
  }

  // Create a new contact message
  @Post('')
  @OpenAPI({
    summary: 'Create a new contact message',
    description: 'Creates a new contact message and returns the created message details',
  })
  @UseBefore(validationMiddleware(CreateContactUsDto))
  @ResponseSchema(ContactUsDto, {
    contentType: 'application/json',
    description: 'Created message data',
    statusCode: '201',
    isArray: false,
  })
  async createMessage(
    @Body() messageData: CreateContactUsDto
  ): Promise<ContactUsDto> {
    try {
      return await this.contactUsService.create(messageData); 
    } catch (error) {
      console.error('Error in createMessage controller:', error);
      throw new HttpException(500, `Error creating message: ${error.message}`);
    }
  }

  // Update an existing contact message by ID
  @Put('/:id')
  @OpenAPI({
    summary: 'Update contact message by ID',
    description: 'Updates the details of a specific contact message by its ID',
  })
  @UseBefore(validationMiddleware(UpdateContactUsDto))
  @ResponseSchema(ContactUsDto, {
    contentType: 'application/json',
    description: 'Updated message data',
    statusCode: '200',
    isArray: false,
  })
  async updateMessage(
    @Param('id') id: number,
    @Body() messageData: UpdateContactUsDto
  ): Promise<ContactUsDto | null> {
    try {
      return await this.contactUsService.updateMessageById(id, messageData);
    } catch (error) {
      console.error(`Error in updateMessage controller for message ID ${id}:`, error);
      throw new HttpException(500, `Error updating message: ${error.message}`);
    }
  }

  // Delete a contact message by ID
  @Delete('/:id')
  @OpenAPI({
    summary: 'Delete contact message by ID',
    description: 'Deletes a specific contact message by its ID',
  })
  async deleteMessage(
    @Param('id') id: number
  ): Promise<{ message: string }> {
    try {
      const result = await this.contactUsService.deleteMessageById(id);
      if (!result) {
        throw new HttpException(404, `Message with ID ${id} not found or already deleted`);
      }
      return { message: 'Message successfully deleted' };
    } catch (error) {
      console.error(`Error in deleteMessage controller for message ID ${id}:`, error);
      if (error.status === 404) {
        throw new HttpException(404, `Message with ID ${id} not found or already deleted`);
      }
      throw new HttpException(500, `Error deleting message: ${error.message}`);
    }
  }
}
