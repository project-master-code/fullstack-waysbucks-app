import { Router } from 'express';
import * as cartItemController from '@controllers/cartItem.controllers';

const CartRouter = Router();

CartRouter.post('/', cartItemController.createCartItem);
CartRouter.get('/:id', cartItemController.getCartItemById);
CartRouter.get('/user/:userId', cartItemController.getCartItemsByUser);
CartRouter.put('/:id', cartItemController.updateCartItem);
CartRouter.delete('/:id', cartItemController.deleteCartItem);

export default CartRouter;
