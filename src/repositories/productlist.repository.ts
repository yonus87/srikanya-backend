//src/repositories/productlist.repository.ts

import { Service } from 'typedi';
import { HttpException } from '../exceptions/HttpException';
import ProductList from '@/models/productlist';
import CategoryTypes from '@/models/categorytypes';
import BrandList from '@/models/brandlist';
import InventoryList from '@/models/inventorylist';
import Locations from '@/models/location';

@Service()
export class ProductListRepository {
  public async getAllProducts(
    locationId?: number,
    categoryId?: number,
    brandId?: number,
    isActive?: boolean,
    page: number = 1, 
    pageSize: number = 10 
  ): Promise<{ products: ProductList[], total: number }> {
    try {
      // Ensure valid pagination values
      if (page < 1) page = 1;
      
      if (pageSize < 1) pageSize = 10;
  
      const whereConditions: any = { isDeleted: false };
  
      // Filter conditions
      if (locationId) whereConditions.locationId = locationId;
      if (categoryId) whereConditions.categoryId = categoryId;
      if (brandId) whereConditions.brandId = brandId;
      if (typeof isActive !== 'undefined') whereConditions.isDisabled = !isActive;
  
      // Fetch total count for pagination
      const total = await ProductList.count({ where: whereConditions });
  
      // Log pagination info
      console.log(`Page: ${page}, PageSize: ${pageSize}, Offset: ${(page - 1) * pageSize}`);
  
      // Fetch products with pagination
      const products = await ProductList.findAll({
        where: whereConditions,
        attributes:[
          'id','name','imageLink','description','primaryRate','cgstPercent','igstPercent','sgstPercent','conversionRatio',
          'hsnCode','isDeleted','isDisabled','createdAt','updatedAt','categoryId','brandId','inventoryId',
          'locationId','Rodprice','length','breadth','height','thickness','diameter','grade','angle','shape'
        ],
        include: [
          { model: CategoryTypes, attributes: [['id', 'categoryId'], 'type', 'name'] },
          { model: BrandList, attributes: [['id', 'brandId'], ['name', 'brandName']] },
          { model: InventoryList, attributes: [['id', 'inventoryId'], ['name', 'inventoryName']] },
          { model: Locations, attributes: [['id', 'locationId'], ['name', 'locationName'], ['city', 'locationCity']] }
        ],
        raw: true,
        nest: true,
        limit: pageSize,
        offset: (page - 1) * pageSize,
      });
  
      return { products, total };
    } catch (error) {
      throw new HttpException(500, `Error retrieving products: ${error.message}`);
    }
  }
  
  // Get a single product by its ID
  public async getProductById(productId: number): Promise<ProductList | null> {
    try {
      return await ProductList.findOne({
        where: { id: productId, isDeleted: false },
        attributes: [
          'id','name','imageLink','description','primaryRate','cgstPercent','igstPercent','sgstPercent','conversionRatio',
          'hsnCode','isDeleted','isDisabled','createdAt','updatedAt','categoryId','brandId','inventoryId',
          'locationId','Rodprice','length','breadth','height','thickness','diameter','grade','angle','shape'
        ],
        include: [
          { model: CategoryTypes, attributes: [['id', 'categoryId'], 'type', 'name'] },
          { model: BrandList, attributes: [['id', 'brandId'], ['name', 'brandName']] },
          { model: InventoryList, attributes: [['id', 'inventoryId'], ['name', 'inventoryName']] },
          { model: Locations, attributes: [['id', 'locationId'], ['name', 'locationName'], ['city', 'locationCity']] }
        ],
      });
    } catch (error) {
      throw new HttpException(500, `Error retrieving product with ID ${productId}: ${error.message}`);
    }
  }
  

  // Create a new product
  public async createProduct(createProductDto: any): Promise<ProductList> {
    try {
      await this.validateAssociations(createProductDto);
      return await ProductList.create(createProductDto);
    } catch (error) {
      throw new HttpException(500, `Error creating product: ${error.message}`);
    }
  }

  // Update an existing product by ID
  public async updateProductById(productId: number, updateProductDto: any): Promise<ProductList | null> {
    try {
      const product = await this.getProductById(productId);
      if (!product) return null;
      await this.validateAssociations(updateProductDto);
      await product.update(updateProductDto); 
      return product; 
    } catch (error) {
      throw new HttpException(500, `Error updating product with ID ${productId}: ${error.message}`);
    }
  }
  
  // Soft delete a product by ID (only if inactive)
  public async deleteProductById(productId: number): Promise<boolean> {
    try {
      const product = await this.getProductById(productId);
      if (!product) return false;
      if (!product.isDisabled) {
        throw new HttpException(400, 'Only inactive products can be deleted.');
      }
      await product.update({ isDeleted: true });
      return true;
    } catch (error) {
      throw new HttpException(500, `Error deleting product with ID ${productId}: ${error.message}`);
    }
  }

  // Toggle the active status of a product
  public async toggleProductActiveStatus(productId: number, isActive: boolean): Promise<ProductList | null> {
    try {
      const product = await this.getProductById(productId);
      if (!product) return null;
      if (isActive && !await this.checkBrandAndCategoryActive(product)) {
        throw new HttpException(400, 'Cannot enable product. Ensure the brand and category are enabled first.');
      }
      return await product.update({ isDisabled: !isActive });
    } catch (error) {
      throw new HttpException(500, `Error toggling product status for ID ${productId}: ${error.message}`);
    }
  }

  // Validate associations (category, brand, inventory, location) for product creation/update
  private async validateAssociations(productDto: any): Promise<void> {
    const { categoryId, brandId, inventoryId, locationId } = productDto;
    if (categoryId && !await CategoryTypes.findByPk(categoryId)) throw new HttpException(400, 'Category not found');
    if (brandId && !await BrandList.findByPk(brandId)) throw new HttpException(400, 'Brand not found');
    if (inventoryId && !await InventoryList.findByPk(inventoryId)) throw new HttpException(400, 'Inventory not found');
    if (locationId && !await Locations.findByPk(locationId)) throw new HttpException(400, 'Location not found');
  }

  // Check if the associated brand and category are active
  private async checkBrandAndCategoryActive(product: ProductList): Promise<boolean> {
    const brand = await BrandList.findByPk(product.brandId);
    const category = await CategoryTypes.findByPk(product.categoryId);
    return brand?.isDisabled === false && category?.isDisabled === false;
  }
}
