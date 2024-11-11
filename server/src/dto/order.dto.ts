export interface CreateOrderDTO {
  transactionId: number;
  productId: number;
  quantity: number;
  price: number;
}

export interface UpdateOrderDTO {
  quantity?: number;
  price?: number;
}
