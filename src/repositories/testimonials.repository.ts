import { Service } from 'typedi';
import { HttpException } from '../exceptions/HttpException';
import Testimonial, { TestimonialAttributes } from '@/models/testimonials';
import Location from '@/models/location';

interface TestimonialWithLocation extends TestimonialAttributes {
  Location?: {
    id: number;
    name: string;
    address: string;
  } | null;
}

@Service()
export class TestimonialsRepository {
  public async getAllTestimonials(): Promise<TestimonialWithLocation[]> {
    try {
      const testimonials = await Testimonial.findAll({
        where: { is_active: 1 },
        include: [
          {
            model: Location,
            required: false,
            attributes: ['id', 'name', 'address'],
          },
        ],
        attributes: [
          'id',
          'image_logo',
          'content',
          'name',
          'designation',
          'createdAt',
          'locationId', 
        ],
      });

      return testimonials.map((testimonial) => testimonial.get({ plain: true }) as TestimonialWithLocation);
    } catch (error: any) {
      console.error('Database Error:', error);
      throw new HttpException(500, `Error retrieving testimonials: ${error.message}`);
    }
  }
}
