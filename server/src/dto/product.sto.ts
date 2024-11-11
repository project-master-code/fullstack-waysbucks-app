export interface CreateProductDTO {
  name: string;
  price: number;
  imageUrl: string;
  toppingIds?: number[]; // Opsional jika ingin menambahkan topping ke product
}

export interface UpdateProductDTO {
  name?: string;
  price?: number;
  imageUrl?: string;
  toppingIds?: number[];
}
