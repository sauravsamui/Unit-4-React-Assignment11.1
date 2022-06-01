import React, { useEffect } from 'react'
import axios from "axios"
import { useState } from 'react'
import {useParams} from "react-router-dom"
const ProductDetails = () => {
    const [productDetails,setProductDetails] = useState({})
    const {id} = useParams()
  
useEffect(() => {
  if(id){
      axios.get(`http://localhost:3006/data/${id}`)
      .then((res)=>(setProductDetails(res.data)))
  }

  return () => {
    
  }
}, [id])



  return (
     <>
    <div>{productDetails.name}</div>
    <div>Price: {productDetails.price}</div>
    </>
  )
}

export default ProductDetails