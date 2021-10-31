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
    const categoriesFind = [];
    const featuredProducts = [];
    categories.forEach((cate) => {
      const productInCate = products.filter((pd) => {
        // ! First check whether it is feature and then check tha it does not already in featuredProducts array
        if (pd.featured && !featuredProducts.find((pr) => pr.id === pd.id))
          featuredProducts.push(pd);
        return pd.category.name === cate.name;
      });

      if (productInCate.length === 0) {
        return;
      }
      categoriesFind.push(cate);
      productsInCategory.push({
        categoryName: cate.name,
        categoryImg: cate.image,
        products: productInCate,
      });
    });

    console.log(categoriesFind);
    console.log(productsInCategory);

    return {
      categories: categoriesFind,
      products: productsInCategory,
      featured: featuredProducts,
    };
  } catch (error) {
    console.error(error.message);
  }
});

const dataSlice = createSlice({
  name: "dataBase",
  initialState: {
    categories: null,
    products: null,
    featured: null,
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
      state.categories = action.payload?.categories;
      state.products = action.payload?.products;
      state.featured = action.payload?.featured;
    });
  },
});

export const { categories, products } = dataSlice.actions;
export default dataSlice.reducer;
