import { Service } from 'typedi';
import { HttpException } from '../exceptions/HttpException';
import ProductDimensions from '@/models/productdimensions';
import CategoryDimension from '@/models/categorydimension';
import ProductList from '@/models/productlist';

@Service()
export class ProductDimensionsRepository {
  // Retrieve all product dimensions filtered by productId (if provided)
  public async getAllProductDimensions(productId?: number): Promise<ProductDimensions[]> {
    try {
      const queryOptions: any = {
        include: [
          {
            model: CategoryDimension,
            as: 'categoryDimension',    // Correct alias for CategoryDimension
          },
          {
            model: ProductList,
            as: 'productList',         // Correct alias for ProductList
          },
        ],  
      };

      if (productId) {
        queryOptions.where = { productId };
      }

      const productDimensions = await ProductDimensions.findAll(queryOptions);
      return productDimensions;
    } catch (error) {
      throw new HttpException(500, `Error retrieving product dimensions: ${error.message}`);
    }
  }

  // Get a product dimension by ID
  public async getProductDimensionById(productDimensionId: number): Promise<ProductDimensions> {
    try {
      const productDimension = await ProductDimensions.findByPk(productDimensionId, {
        include: [
          {
            model: CategoryDimension,
            as: 'categoryDimension',  // Correct alias for CategoryDimension
          },
          {
            model: ProductList,
            as: 'productList',         // Correct alias for ProductList
          },
        ],  
      });
      
      if (!productDimension) {
        throw new HttpException(404, 'Product dimension not found');
      }
      return productDimension;
    } catch (error) {
      throw new HttpException(500, `Error retrieving product dimension: ${error.message}`);
    }
  }

  // Create a new product dimension
  public async createProductDimension(createProductDimensionDto: any): Promise<ProductDimensions> {
    try {
      const newProductDimension = await ProductDimensions.create(createProductDimensionDto);
      
      if (!newProductDimension) {
        throw new Error('Product dimension was not created');
      }
      return newProductDimension; 
    } catch (error) {
      throw new HttpException(500, `Error creating product dimension: ${error.message}`);
    }
  }

  // Update a product dimension by ID
  public async updateProductDimensionById(productDimensionId: number, updateProductDimensionDto: any): Promise<ProductDimensions> {
    try {
      const productDimension = await this.getProductDimensionById(productDimensionId);
      
      // If you want to throw an error if the dimension doesn't exist, consider throwing it directly here
      if (!productDimension) {
        throw new HttpException(404, 'Product dimension not found');
      }

      const updatedProductDimension = await productDimension.update(updateProductDimensionDto);
      return updatedProductDimension;
    } catch (error) {
      throw new HttpException(500, `Error updating product dimension: ${error.message}`);
    }
  }

  // Delete a product dimension by ID
  public async deleteProductDimensionById(productDimensionId: number): Promise<{ message: string }> {
    try {
      const productDimension = await this.getProductDimensionById(productDimensionId);
      
      if (!productDimension) {
        throw new HttpException(404, 'Product dimension not found');
      }
      
      await productDimension.destroy();
      return { message: 'Product dimension deleted successfully' };
    } catch (error) {
      throw new HttpException(500, `Error deleting product dimension: ${error.message}`);
    }
  }
}
