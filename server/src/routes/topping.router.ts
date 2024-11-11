import { Router } from 'express';
import * as toppingController from '@controllers/topping.controllers';

const ToppingRouter = Router();

ToppingRouter.post('/', toppingController.createTopping);
ToppingRouter.get('/:id', toppingController.getToppingById);
ToppingRouter.get('/', toppingController.getAllToppings);
ToppingRouter.put('/:id', toppingController.updateTopping);
ToppingRouter.delete('/:id', toppingController.deleteTopping);

export default ToppingRouter;
