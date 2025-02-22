import { Service } from 'typedi';
import { ProductListRepository } from '@/repositories/productlist.repository';
import { HttpException } from '@/exceptions/HttpException';
import { ProductResponseDto, CreateProductDto, UpdateProductDto, ProductListResponseDto } from '@/dtos/productlist.dto';
import ProductList from '@/models/productlist';
import { AutoMapperManager } from '@/mapper-profiles/mapper';

@Service()
export class ProductListService {
  constructor(
    private productListRepository: ProductListRepository,
    private mapperManager: AutoMapperManager
  ) {}

  // Create a new product
  async create(createProductDto: CreateProductDto): Promise<ProductResponseDto> {
    try {
      // Validate the DTO (ensure no invalid data is passed)
      this.validateProductTaxRates(createProductDto);

      const newProduct = await this.productListRepository.createProduct(createProductDto);
      return this.mapperManager.mapper.map(newProduct, ProductList, ProductResponseDto);
    } catch (error) {
      console.error(`Error in ProductListService.create: ${error.message}`, { error, createProductDto });
      throw new HttpException(500, `Failed to create product: ${error.message}`);
    }
  }

  // Fetch all products with pagination
  public async getAll(
    locationId?: number,
    categoryId?: number,
    brandId?: number,
    isActive?: boolean,
    limit: number = 10,
    offset: number = 0
  ): Promise<ProductListResponseDto[]> {
    try {
      // Ensure pagination values are correct
      if (limit <= 0 || offset < 0) {
        throw new HttpException(400, 'Invalid pagination parameters');
      }

      const result = await this.productListRepository.getAllProducts(locationId, categoryId, brandId, isActive, offset, limit);

      // Map the products to response DTO
      return this.mapperManager.mapper.mapArray(result.products, ProductList, ProductListResponseDto);
    } catch (error) {
      console.error(`Error in ProductListService.getAll: ${error.message}`, { error, locationId, categoryId, brandId, isActive, limit, offset });
      throw new HttpException(500, `Failed to fetch products: ${error.message}`);
    }
  }

  // Get product by ID
  async getById(productId: number): Promise<ProductResponseDto> {
    try {
      const product = await this.productListRepository.getProductById(productId);
      if (!product) throw new HttpException(404, 'Product not found');
      return this.mapperManager.mapper.map(product, ProductList, ProductResponseDto);
    } catch (error) {
      console.error(`Error in ProductListService.getById: ${error.message}`, { error, productId });
      throw new HttpException(500, `Failed to fetch product: ${error.message}`);
    }
  }

  // Update product by ID
  async update(productId: number, updateProductDto: UpdateProductDto): Promise<ProductResponseDto> {
    try {
      // Validate the DTO
      this.validateProductTaxRates(updateProductDto);

      const updatedProduct = await this.productListRepository.updateProductById(productId, updateProductDto);
      if (!updatedProduct) throw new HttpException(404, 'Product not found');
      return this.mapperManager.mapper.map(updatedProduct, ProductList, ProductResponseDto);
    } catch (error) {
      console.error(`Error in ProductListService.update: ${error.message}`, { error, productId, updateProductDto });
      throw new HttpException(500, `Failed to update product: ${error.message}`);
    }
  }

  // Soft delete product by ID
  async delete(productId: number): Promise<{ message: string; productId: number }> {
    try {
      const result = await this.productListRepository.deleteProductById(productId);
      if (!result) throw new HttpException(404, 'Product not found or already deleted');
      return { message: 'Product marked as deleted successfully', productId };
    } catch (error) {
      console.error(`Error in ProductListService.delete: ${error.message}`, { error, productId });
      throw new HttpException(500, `Failed to delete product: ${error.message}`);
    }
  }

  // Toggle product active status
  async toggleActiveStatus(productId: number, isActive: boolean): Promise<ProductResponseDto> {
    try {
      const updatedProduct = await this.productListRepository.toggleProductActiveStatus(productId, isActive);
      if (!updatedProduct) throw new HttpException(404, 'Product not found');
      return this.mapperManager.mapper.map(updatedProduct, ProductList, ProductResponseDto);
    } catch (error) {
      console.error(`Error in ProductListService.toggleActiveStatus: ${error.message}`, { error, productId, isActive });
      throw new HttpException(500, `Failed to update product status: ${error.message}`);
    }
  }

  // Helper method to validate tax rates
  private validateProductTaxRates(productDto: CreateProductDto | UpdateProductDto): void {
    if (productDto.cgstPercent < 0 || productDto.cgstPercent > 100) {
      throw new HttpException(400, 'Invalid CGST percentage');
    }
    if (productDto.igstPercent < 0 || productDto.igstPercent > 100) {
      throw new HttpException(400, 'Invalid IGST percentage');
    }
    if (productDto.sgstPercent < 0 || productDto.sgstPercent > 100) {
      throw new HttpException(400, 'Invalid SGST percentage');
    }
  }
}
