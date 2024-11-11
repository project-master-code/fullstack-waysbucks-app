import { Router } from 'express';
import * as productController from '@controllers/product.controllers';
import upload from '@src/middlewares/uploadFile';

const ProductRouter = Router();

ProductRouter.post(
  '/',
  upload.single('imageUrl'),
  productController.createProduct
);
ProductRouter.get('/:id', productController.getProductById);
ProductRouter.get('/', productController.getAllProducts);
ProductRouter.put(
  '/:id',
  upload.single('imageUrl'),
  productController.updateProduct
);
ProductRouter.delete('/:id', productController.deleteProduct);

export default ProductRouter;
