import { api } from '@/app/api/api.config';
import { createAsyncThunk } from '@reduxjs/toolkit';
import Swal from 'sweetalert2';

export const createProductAsync = createAsyncThunk(
  'product/create',
  async (data: FormData, thunkAPI) => {
    try {
      const res = await api.post('/product', data);
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
      if (error instanceof Error) {
        Swal.fire({
          title: error.message,
          icon: 'error',
        });
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  }
);
