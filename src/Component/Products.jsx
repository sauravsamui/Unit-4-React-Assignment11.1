import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"

const Products = () => {
    const [products,setProducts] = useState([])


useEffect(() => {

  axios.get("http://localhost:3006/data")
  .then((res)=>(setProducts(res.data)))
  return () => {
   
  }
}, [])


  return (
    <div>
     <h1>Products:</h1>
      <div  style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr"}}>
        {products.map((el)=>(
            <div key={el.id}><Link to={`/productDetails/${el.id}`}>{el.name}</Link></div>
        ))}
      </div>
    </div>
  )
}

export default Products