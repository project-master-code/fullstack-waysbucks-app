import { Router } from 'express';
import * as productController from '@controllers/product.controllers';

const ProductRouter = Router();

ProductRouter.post('/', productController.createProduct);
ProductRouter.get('/:id', productController.getProductById);
ProductRouter.get('/', productController.getAllProducts);
ProductRouter.put('/:id', productController.updateProduct);
ProductRouter.delete('/:id', productController.deleteProduct);

export default ProductRouter;
