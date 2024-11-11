export interface CreateTransactionDTO {
  userId: number;
  customerName: string;
  address: string;
  postalCode: string;
  totalIncome: number;
  status:
    | 'WAITING_APPROVAL'
    | 'SUCCESS'
    | 'CANCELLED'
    | 'ON_THE_WAY'
    | 'COMPLETED';
  orders: {
    productId: number;
    quantity: number;
    price: number;
  }[];
  toppings?: {
    toppingId: number;
  }[];
}

export interface UpdateTransactionDTO {
  status?:
    | 'WAITING_APPROVAL'
    | 'SUCCESS'
    | 'CANCELLED'
    | 'ON_THE_WAY'
    | 'COMPLETED';
  totalIncome?: number;
  subtotal?: number;
  qrCodeImageUrl?: string;
}
