/* eslint-disable prettier/prettier */
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Product } from "../components/ProductCard"
import { RootState } from "../app/store"

interface ProductState {
  product: Product
  allProducts: Product[]
}

const initialState: ProductState = {
  product: {
    id: 0,
    name: "",
    type: "",
    description: "",
    status: "",
    createdAt: new Date(),
  },
  allProducts: [],
}

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProduct: (state, action: PayloadAction<Product>) => {
      state.product = action.payload
    },
    addProduct: (state, action: PayloadAction<Product>) => {
      const newProduct = action.payload

      state.allProducts.push({ ...newProduct })

      localStorage.setItem("products", JSON.stringify(state.allProducts))
    },
  },
})

export const selectedProduct = (state: RootState) => state.product.product
export const productsList = (state: RootState) => state.product.allProducts

export const { setProduct, addProduct } = productSlice.actions

export default productSlice.reducer
