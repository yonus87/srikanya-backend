import { Service } from 'typedi';
import { TestimonialsRepository } from '@/repositories/testimonials.repository';
import { CustomersRepository } from '@/repositories/customers.repository';
import { ProductListRepository } from '@/repositories/productlist.repository';
import { HomepageDTO } from '@/dtos/homepage.dto';
import { HttpException } from '../exceptions/HttpException';

@Service()
export class HomepageService {
  constructor(
    private readonly testimonialsRepository: TestimonialsRepository,
    private readonly customersRepository: CustomersRepository,
    private readonly productListRepository: ProductListRepository,
  ) {}

  async getHomepageData(): Promise<HomepageDTO> {
    try {
      // Fetch testimonials, customers, and products data
      const testimonials = await this.testimonialsRepository.getAllTestimonials();
      const customers = await this.customersRepository.getAllCustomers();
      const productsResponse = await this.productListRepository.getAllProducts(); 
  
      // Extract the products array from the response
      const products = productsResponse.products;
  
      // Map the data to the HomepageDTO structure
      const homepageData: HomepageDTO = {
        id: '1',
        logo: ['https://srikanya2024.web.app/assets/logo.png'],
        locations: [
          {
            testimonials: this.mapTestimonials(testimonials),
            customers: this.mapCustomers(customers),
            productlist: this.mapProducts(products),  
          }
        ],
      };
  
      return homepageData;
    } catch (error: any) {
      console.error('Error retrieving homepage data:', error);
      throw new HttpException(500, `Failed to fetch homepage data: ${error.message}`);
    }
  }
  

  private mapTestimonials(testimonials: { image_logo?: string, content?: string, name?: string, designation?: string }[]): HomepageDTO['locations'][0]['testimonials'] {
    return testimonials.map(t => ({
      image_logo: t.image_logo ?? '', 
      content: t.content ?? '',
      name: t.name ?? 'Anonymous',
      designation: t.designation ?? '',
    }));
  }

  private mapCustomers(customers: { image?: string, name?: string }[]): HomepageDTO['locations'][0]['customers'] {
    return customers.map(c => ({
      image: c.image ?? '', 
      name: c.name ?? 'Unknown',
    }));
  }

  private mapProducts(products: { name: string, imageLink: string, categoryId: number, primaryRate: number }[]): HomepageDTO['locations'][0]['productlist'] {
    const mappedProductList: HomepageDTO['locations'][0]['productlist'] = {};

    // Dynamic mapping for categories
    products.forEach(product => {
      const productData = {
        images: product.imageLink ? [product.imageLink] : [],
        name: product.name ?? 'Unnamed Product', // Default product name if missing
        primaryRate: product.primaryRate ?? 0, // Default primaryRate to 0 if missing
      };

      // Get category name by categoryId
      const categoryName = this.getCategoryNameFromId(product.categoryId);
      if (!mappedProductList[categoryName]) {
        mappedProductList[categoryName] = [];
      }
      mappedProductList[categoryName].push(productData);
    });

    // Ensure all categories are returned, even if no products belong to them
    for (const category in mappedProductList) {
      if (mappedProductList[category].length === 0) {
        mappedProductList[category] = undefined; //  could also set this to [] if you prefer empty arrays
      }
    }

    return mappedProductList;
  }

  private getCategoryNameFromId(categoryId: number): string {
    const categoryMapping: Record<number, string> = {
      1: 'Cement',
      2: 'Steel',
      // You can add more categories here based on the categoryId
    };

    return categoryMapping[categoryId] ?? 'Other'; // Default to 'Other' if categoryId isn't mapped
  }
}

