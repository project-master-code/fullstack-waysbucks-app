import { Router } from 'express';
import * as orderController from '@controllers/order.controllers';

const OrderRouter = Router();

OrderRouter.post('/', orderController.createOrder);
OrderRouter.get('/:id', orderController.getOrderById);
OrderRouter.get('/', orderController.getAllOrders);
OrderRouter.put('/:id', orderController.updateOrder);
OrderRouter.delete('/:id', orderController.deleteOrder);

export default OrderRouter;
