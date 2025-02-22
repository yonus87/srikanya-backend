import { JsonController, Get, Post, Put, Delete, Param, Body, QueryParam, UseBefore } from 'routing-controllers';
import { OpenAPI } from 'routing-controllers-openapi';
import { Service } from 'typedi';
import { ProductListService } from '@/services/productlist.service';
import { CreateProductDto, UpdateProductDto, ProductResponseDto, ProductListResponseDto } from '@/dtos/productlist.dto';
import { validationMiddleware } from '@/middlewares/validation.middleware';
import { HttpException } from '../exceptions/HttpException';

@Service()
@JsonController('/productlist')
export class ProductListController {
  constructor(private readonly productListService: ProductListService) {}

  @Get('')
@OpenAPI({
  summary: 'Get all products',
  description: 'Returns a list of all products, optionally filtered by location, category, or brand.',
})
async getAllProducts(
  @QueryParam('locationId') locationId?: number,
  @QueryParam('categoryId') categoryId?: number,
  @QueryParam('brandId') brandId?: number,
  @QueryParam('isActive') isActive?: string, 
  @QueryParam('limit') limit: number = 10,  
  @QueryParam('offset') offset: number = 0
): Promise<ProductListResponseDto[]> {
  try {
    // Pagination validation
    if (limit <= 0 || offset < 0) {
      throw new HttpException(400, 'Invalid pagination parameters');
    }

    // Convert 'isActive' string to boolean (if passed)
    const isActiveBool = isActive ? (isActive === 'true') : undefined;

    return await this.productListService.getAll(locationId, categoryId, brandId, isActiveBool, limit, offset);
  } catch (error) {
    console.error('Error in getAllProducts controller:', error);
    throw new HttpException(500, `Error retrieving products: ${error.message}`);
  }
}


  // Get product by ID
  @Get('/:id')
  @OpenAPI({
    summary: 'Get a product by ID',
    description: 'Returns details of a specific product by its ID',
  })
  async getProductById(@Param('id') id: number): Promise<ProductResponseDto> {
    try {
      return await this.productListService.getById(id);
    } catch (error) {
      console.error(`Error in getProductById controller for product ID ${id}:`, error);
      if (error.status === 404) {
        throw new HttpException(404, `Product with ID ${id} not found`);
      }
      throw new HttpException(500, `Error retrieving product: ${error.message}`);
    }
  }

  // Create a new product
  @Post('')
  @OpenAPI({
    summary: 'Create a new product',
    description: 'Creates a new product and returns the created details',
  })
  @UseBefore(validationMiddleware(CreateProductDto))
  async createProduct(@Body() createProductDto: CreateProductDto): Promise<ProductResponseDto> {
    try {
      return await this.productListService.create(createProductDto);
    } catch (error) {
      console.error('Error in createProduct controller:', error);
      throw new HttpException(500, `Error creating product: ${error.message}`);
    }
  }

  // Update a product by ID
  @Put('/:id')
  @OpenAPI({
    summary: 'Update a product by ID',
    description: 'Updates the details of a specific product by its ID',
  })
  @UseBefore(validationMiddleware(UpdateProductDto))
  async updateProductById(
    @Param('id') id: number,
    @Body() updateProductDto: UpdateProductDto
  ): Promise<ProductResponseDto> {
    try {
      return await this.productListService.update(id, updateProductDto);
    } catch (error) {
      console.error(`Error in updateProductById controller for product ID ${id}:`, error);
      if (error.status === 404) {
        throw new HttpException(404, `Product with ID ${id} not found`);
      }
      throw new HttpException(500, `Error updating product: ${error.message}`);
    }
  }

  // Delete a product by ID
  @Delete('/:id')
  @OpenAPI({
    summary: 'Delete a product by ID',
    description: 'Deletes a specific product by its ID',
  })
  async deleteProductById(@Param('id') id: number): Promise<{ message: string; productId: number }> {
    try {
      await this.productListService.delete(id);
      return { message: 'Product deleted successfully', productId: id };
    } catch (error) {
      console.error(`Error in deleteProductById controller for product ID ${id}:`, error);
      
      if (error.status === 404) {
        throw new HttpException(404, `Product with ID ${id} not found`);
      }

      throw new HttpException(500, `Error deleting product: ${error.message}`);
    }
  }
}
