/* eslint-disable prettier/prettier */
import React, { useState } from "react"
import { useAppDispatch } from "../app/hooks"
import { addProduct } from "../features/productSlice"
import { v4 as uuid } from "uuid"
import { useNavigate } from "react-router-dom"
import { Product } from "../components/ProductCard"

const AddProduct = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [formField, setFormField] = useState({
    name: "",
    type: "",
    description: "",
    status: "",
  })

  const handleAddProduct = () => {
    const productPayload: Product = {
      id: uuid(),
      createdAt: new Date(),
      ...formField,
    }
    dispatch(addProduct(productPayload))
    navigate("/")
  }
  return (
    <div>
      AddProduct
      <form>
        <div>
          <label>Product Name</label>
          <input
            type="text"
            value={formField.name}
            onChange={(e) =>
              setFormField({ ...formField, name: e.target.value })
            }
            placeholder="Product Name"
          />
        </div>
        <div>
          <label>Product Type</label>
          <input
            type="text"
            value={formField.type}
            onChange={(e) =>
              setFormField({ ...formField, type: e.target.value })
            }
            placeholder="Product Type"
          />
        </div>

        <div>
          <label>Product Status</label>
          <select
            value={formField.status}
            onChange={(e) =>
              setFormField({ ...formField, status: e.target.value })
            }
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
        <div>
          <label>Product Description</label>
          <textarea
            rows={5}
            value={formField.description}
            onChange={(e) =>
              setFormField({ ...formField, description: e.target.value })
            }
            placeholder="Description of Product"
          ></textarea>
        </div>
        <button type="submit" onClick={handleAddProduct}>
          Submit
        </button>
      </form>
    </div>
  )
}

export default AddProduct
