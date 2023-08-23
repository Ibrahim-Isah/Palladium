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
    <div>
      <h1>Product List Application</h1>
      <div>
        <div>
          {allProducts.length > 0 ? (
            allProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <div>
              No Product Added
              <Link to="/new">Add a New Product </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductList
