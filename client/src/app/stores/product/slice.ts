import { createSlice } from '@reduxjs/toolkit';
import { createProductAsync } from './async';

interface IProduct {
  name: string;
  price: number;
  imageUrl: string;
  toppingIds?: number[];
}

interface ProductState {
  Products: IProduct[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductState = {
  Products: [],
  loading: false,
  error: null,
};

const ProductSlice = createSlice({
  name: 'Product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createProductAsync.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(createProductAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createProductAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default ProductSlice.reducer;
