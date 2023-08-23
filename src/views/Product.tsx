/* eslint-disable prettier/prettier */
import React from "react"
import { useAppSelector } from "../app/hooks"
import { selectedProduct } from "../features/productSlice"
import { Link } from "react-router-dom"
import { onTestFailed } from "vitest"

const Product = () => {
  const product = useAppSelector(selectedProduct)

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginRight: "20px",
          marginLeft: "20px",
        }}
      >
        <h1
          style={{
            fontSize: "28px",
            fontWeight: "bold",
            textAlign: "center",
            flex: 1,
          }}
        >
          Product Details Page
        </h1>
        <Link
          to="/"
          style={{
            padding: "10px",
            backgroundColor: "blue",
            color: "white",
            borderRadius: "5px",
            cursor: "pointer",
            textAlign: "center",
            marginTop: "20px",
            textDecoration: "none",
          }}
        >
          {" "}
          Product List
        </Link>
      </div>
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
