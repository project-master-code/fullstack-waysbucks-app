import { Request, Response } from 'express';
import * as productService from '@services/product.service';
import { CreateProductDTO, UpdateProductDTO } from '@dto/product.sto';
import { uploadSingle } from '@src/utils/cloudinary';

export const createProduct = async (req: Request, res: Response) => {
  try {
    const data: CreateProductDTO = req.body;

    if (req.file) {
      const { url } = await uploadSingle(req.file as Express.Multer.File);
      data.imageUrl = url;
    }
    console.log(req.file);
    const product = await productService.createProduct(data);
    res.status(201).json(product);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: (error as Error).message });
  }
};

export const getProductById = async (req: Request, res: Response) => {
  try {
    const productId = parseInt(req.params.id);
    const product = await productService.getProductById(productId);
    res.json(product);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: (error as Error).message });
  }
};

export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await productService.getAllProducts();
    res.json(products);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: (error as Error).message });
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  try {
    const productId = parseInt(req.params.id);
    const data: UpdateProductDTO = req.body;

    if (req.file) {
      const { url } = await uploadSingle(req.file as Express.Multer.File);
      data.imageUrl = url;
    }
    console.log(req.file);
    const updatedProduct = await productService.updateProduct(productId, data);
    res.json(updatedProduct);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: (error as Error).message });
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const productId = parseInt(req.params.id);
    await productService.deleteProduct(productId);
    res.status(204).send();
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: (error as Error).message });
  }
};
