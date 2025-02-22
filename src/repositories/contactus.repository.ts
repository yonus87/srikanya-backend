import { Service } from 'typedi';
import { HttpException } from '../exceptions/HttpException';
import ContactUs from '@/models/contactus';
import { CreateContactUsDto, UpdateContactUsDto } from '@/dtos/contactus.dto';

@Service()
export class ContactUsRepository {
  
  public async getAllMessages(): Promise<ContactUs[]> {
    try {
      const messages = await ContactUs.findAll({
        order: [['createdAt', 'DESC']],
      });
      return messages;
    } catch (error) {
      throw new HttpException(500, `Error retrieving messages: ${error.message}`);
    }
  }

  // Get a single contact message by ID
  public async getMessageById(id: number): Promise<ContactUs> {
    try {
      const message = await ContactUs.findByPk(id);
      if (!message) throw new HttpException(404, 'Message not found');
      return message;
    } catch (error) {
      throw new HttpException(500, `Error retrieving message: ${error.message}`);
    }
  }

  // Create a new contact message
  public async createMessage(data: CreateContactUsDto): Promise<ContactUs> {
    try {
      const newMessage = await ContactUs.create({
        name: data.name,
        email: data.email,
        message: data.message,
        status: data.status,
        note: data.note,
      });
      return newMessage;
    } catch (error) {
      throw new HttpException(400, `Error creating message: ${error.message}`);
    }
  }

  // Update a contact message by ID
  public async updateMessageById(id: number, data: UpdateContactUsDto): Promise<ContactUs> {
    try {
      const message = await this.getMessageById(id);

      // Update the message and return the updated instance
      await message.update(data);
      const updatedMessage = await message.reload();
      return updatedMessage;
    } catch (error) {
      throw new HttpException(400, `Error updating message: ${error.message}`);
    }
  }

  // Delete a contact message by ID
  public async deleteMessageById(id: number): Promise<{ message: string }> {
    try {
      const message = await this.getMessageById(id);
      await message.destroy();
      return { message: 'Message deleted successfully' };
    } catch (error) {
      throw new HttpException(500, `Error deleting message: ${error.message}`);
    }
  }
}
