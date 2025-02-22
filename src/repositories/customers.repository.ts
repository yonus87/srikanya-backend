import { Service } from 'typedi';
import { HttpException } from '../exceptions/HttpException';
import Customer from '@/models/customers'; 
import Location from '@/models/location'; 

@Service()
export class CustomersRepository {
  public async getAllCustomers(): Promise<{ locationId: number | null; image: string | null; name: string }[]> {
    try {
      const customers = await Customer.findAll({
        attributes: ['image', 'name'],
        include: [
          {
            model: Location,
            required: false, 
            attributes: ['id'], 
          },
        ],
      });

      return customers.map((customer) => {
        const plainCustomer = customer.get({ plain: true });

        return {
          locationId: plainCustomer.location?.id || null, // Associate with location
          image: plainCustomer.image || null,
          name: plainCustomer.name,
        };
      });
    } catch (error: any) {
      console.error('Database Error:', error);
      throw new HttpException(500, `Error retrieving customers: ${error.message}`);
    }
  }
}
