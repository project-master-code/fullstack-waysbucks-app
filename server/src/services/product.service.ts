import * as productRepository from '@repositories/product.repo';
import { CreateProductDTO, UpdateProductDTO } from '@dto/product.sto';

export const createProduct = async (data: CreateProductDTO) => {
  return productRepository.createProduct(data);
};

export const getProductById = async (productId: number) => {
  const product = await productRepository.getProductById(productId);
  if (!product) {
    throw new Error(`Product with ID ${productId} not found`);
  }
  return product;
};

export const getAllProducts = async () => {
  return productRepository.getAllProducts();
};

export const updateProduct = async (
  productId: number,
  data: UpdateProductDTO
) => {
  const product = await productRepository.getProductById(productId);
  if (!product) {
    throw new Error(`Product with ID ${productId} not found`);
  }
  return productRepository.updateProduct(productId, data);
};

export const deleteProduct = async (productId: number) => {
  const product = await productRepository.getProductById(productId);
  if (!product) {
    throw new Error(`Product with ID ${productId} not found`);
  }
  return productRepository.deleteProduct(productId);
};
