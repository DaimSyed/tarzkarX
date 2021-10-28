import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { domain } from "../domain.js";

export const fetchAllData = createAsyncThunk("allData", async () => {
  try {
    const { data: categories } = await axios.get(
      `${domain}/inventory/category/`
    );
    const { data: products } = await axios.get(`${domain}/inventory/product/`);
    const productsInCategory = [];
    categories.forEach((cate) => {
      const productInCate = products.filter(
        (pd) => pd.category.name === cate.name
      );

      if (productInCate.length === 0) {
        return;
      }

      productsInCategory.push({
        categoryName: cate.name,
        products: productInCate,
      });
    });

    console.log(categories);
    console.log(productsInCategory);

    return { categories, products: productsInCategory };
  } catch (error) {
    console.error(error.message);
  }
});

const dataSlice = createSlice({
  name: "dataBase",
  initialState: {
    categories: null,
    products: null,
  },
  reducers: {
    categories: (state, action) => {
      state.categories = action.payload;
    },
    products: (state, action) => {
      state.products = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllData.fulfilled, (state, action) => {
      state.categories = action.payload.categories;
      state.products = action.payload.products;
    });
  },
});

export const { categories, products } = dataSlice.actions;
export default dataSlice.reducer;
