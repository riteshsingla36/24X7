import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
  const {id} = useParams();
  return (
    <div>
      Product Details
    </div>
  )
}

export default ProductDetails
