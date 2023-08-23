// import { Routes, Route } from "react-router-dom"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./App.css"
import ProductList from "./views/ProductList"
import AddProduct from "./views/AddProduct"
import Product from "./views/Product"

const routes = createBrowserRouter([
  {
    path: "/",
    element: <ProductList />,
  },
  {
    path: "/product/:id",
    element: <Product />,
  },
  {
    path: "/new",
    element: <AddProduct />,
  },
])

function App() {
  return <RouterProvider router={routes} />
}

export default App
