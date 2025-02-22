import { JsonController, Get } from 'routing-controllers';
import { OpenAPI, ResponseSchema } from 'routing-controllers-openapi';
import { Service } from 'typedi';
import { HomepageService } from '@/services/homepage.service';
import { HomepageDTO } from '@/dtos/homepage.dto';
import { HttpException } from '../exceptions/HttpException';

@JsonController('/homepage')
@Service()
export class HomepageController {
  constructor(private readonly homepageService: HomepageService) {}

  /**
   * @route GET /homepage/
   * @desc Fetch homepage data including locations, products, testimonials, and customers.
   */
  @Get('/')
  @OpenAPI({
    summary: 'Get homepage data',
    description: 'Returns the homepage data, including locations, products, testimonials, and customers.',
    responses: {
      '200': {
        description: 'Successfully retrieved homepage data',
        content: {
          'application/json': {
            schema: { $ref: '#/components/schemas/HomepageDTO' },
          },
        },
      },
      '500': {
        description: 'Internal server error',
      },
    },
  })
  @ResponseSchema(HomepageDTO)
  async getHomepageData(): Promise<HomepageDTO> {
    try {
      console.log('Fetching homepage data...'); 
      const data = await this.homepageService.getHomepageData();
      console.log('Homepage data fetched successfully:', data); 
      return data;
    } catch (error: any) {
      console.error('Error in getHomepageData controller:', {
        message: error.message,
        stack: error.stack,
      });
      throw new HttpException(500, `Error retrieving homepage data: ${error.message}`);
    }
  }
}
