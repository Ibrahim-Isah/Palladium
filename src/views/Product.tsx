/* eslint-disable prettier/prettier */
import React from "react"
import { useAppSelector } from "../app/hooks"
import { selectedProduct } from "../features/productSlice"

const Product = () => {
  const product = useAppSelector(selectedProduct)

  console.log(product, "here is the product")
  return (
    <div>
      Product Details Page
      <div>
        <h1>{product.name}</h1>
        <p>{product.type}</p>
        <p>{product.description}</p>
        <p>{product.status}</p>
        <p>{new Date(product.createdAt).toLocaleDateString()}</p>
      </div>
    </div>
  )
}

export default Product
