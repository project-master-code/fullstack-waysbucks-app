import { Router } from 'express';
import * as toppingController from '@controllers/topping.controllers';
import upload from '@src/middlewares/uploadFile';

const ToppingRouter = Router();

ToppingRouter.post(
  '/',
  upload.single('imageUrl'),
  toppingController.createTopping
);
ToppingRouter.get('/:id', toppingController.getToppingById);
ToppingRouter.get('/', toppingController.getAllToppings);
ToppingRouter.put(
  '/:id',
  upload.single('imageUrl'),
  toppingController.updateTopping
);
ToppingRouter.delete('/:id', toppingController.deleteTopping);

export default ToppingRouter;
