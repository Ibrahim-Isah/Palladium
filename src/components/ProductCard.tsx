/* eslint-disable prettier/prettier */
import React from "react"
import { useNavigate } from "react-router-dom"
import { useAppDispatch } from "../app/hooks"
import { setProduct } from "../features/productSlice"

export interface Product {
  id: number | string
  name: string
  type: string
  description?: string
  status: string
  createdAt: any
}
interface ProductCardProps {
  product: Product
}
const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const openProductDetails = () => {
    dispatch(setProduct(product))

    navigate(`/product/${product.id}`)
  }

  return (
    <div onClick={openProductDetails}>
      <div>
        <h1>{product.name}</h1>
        <p>{product.description}</p>
      </div>
    </div>
  )
}

export default ProductCard
