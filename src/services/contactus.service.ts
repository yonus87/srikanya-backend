import { Service } from 'typedi';
import { ContactUsRepository } from '@/repositories/contactus.repository';
import { HttpException } from '@/exceptions/HttpException';
import { ContactUsDto, CreateContactUsDto, UpdateContactUsDto } from '@/dtos/contactus.dto';
import ContactUs from '@/models/contactus';
import { AutoMapperManager } from '@/mapper-profiles/mapper';

@Service()
export class ContactUsService {
  constructor(
    private contactUsRepository: ContactUsRepository,
    private mapperManager: AutoMapperManager
  ) {}

  // Create a new contact message
  async create(createContactUsDto: CreateContactUsDto): Promise<ContactUsDto> {
    try {
      const newMessage = await this.contactUsRepository.createMessage(createContactUsDto);
      return this.mapperManager.mapper.map(newMessage, ContactUs, ContactUsDto);
    } catch (error) {
      console.error('Error in ContactUsService during create:', error);
      throw new HttpException(400, `Failed to create contact message: ${error.message}`);
    }
  }

  // Get all contact messages without pagination
  async getAllMessages(): Promise<ContactUsDto[]> {
    try {
      const messages = await this.contactUsRepository.getAllMessages();
      const mappedMessages = this.mapperManager.mapper.mapArray(messages, ContactUs, ContactUsDto);
      return mappedMessages;
    } catch (error) {
      console.error('Error in ContactUsService while fetching all messages:', error);
      throw new HttpException(500, `Failed to fetch contact messages: ${error.message}`);
    }
  }

  // Get a contact message by ID
  async getMessageById(id: number): Promise<ContactUsDto> {
    try {
      const message = await this.contactUsRepository.getMessageById(id);
      if (!message) throw new HttpException(404, 'Contact message not found');
      return this.mapperManager.mapper.map(message, ContactUs, ContactUsDto);
    } catch (error) {
      console.error(`Error in ContactUsService while fetching message by ID ${id}:`, error);
      throw new HttpException(500, `Failed to fetch contact message: ${error.message}`);
    }
  }

  // Update a contact message by ID
  async updateMessageById(id: number, updateContactUsDto: UpdateContactUsDto): Promise<ContactUsDto> {
    try {
      const updatedMessage = await this.contactUsRepository.updateMessageById(id, updateContactUsDto);
      return this.mapperManager.mapper.map(updatedMessage, ContactUs, ContactUsDto);
    } catch (error) {
      console.error(`Error in ContactUsService while updating message by ID ${id}:`, error);
      throw new HttpException(400, `Failed to update contact message: ${error.message}`);
    }
  }

  // Delete a contact message by ID
  async deleteMessageById(id: number): Promise<{ message: string }> {
    try {
      const result = await this.contactUsRepository.deleteMessageById(id);
      return { message: `Message with ID ${id} was successfully deleted.` };
    } catch (error) {
      console.error(`Error in ContactUsService while deleting message by ID ${id}:`, error);
      throw new HttpException(500, `Failed to delete contact message: ${error.message}`);
    }
  }
}
