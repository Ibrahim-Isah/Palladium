/* eslint-disable prettier/prettier */
import { useEffect, useState } from "react"
import ProductCard from "../components/ProductCard"
import { Link } from "react-router-dom"

const ProductList = () => {
  const [allProducts, setAllProducts] = useState([])

  useEffect(() => {
    const getProducts = localStorage.getItem("products")

    if (!getProducts) return
    setAllProducts(JSON.parse(getProducts))
  }, [])
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
        marginBottom: "20px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1
        style={{
          fontSize: "28px",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Product List Application
      </h1>
      <div
        style={{
          margin: "20px auto",
          alignSelf: "center",
          justifySelf: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            margin: "20px auto",
          }}
        >
          {allProducts.length > 0 ? (
            allProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <div
              style={{
                marginBottom: "20px",
              }}
            >
              No Product Added
            </div>
          )}
        </div>
        <Link
          to="/new"
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
          Add a New Product{" "}
        </Link>
      </div>
    </div>
  )
}

export default ProductList
