
import './App.css';
import {Routes,Route} from "react-router-dom"
import Home from './Component/Home';
import Products from './Component/Products';
import ProductDetails from './Component/ProductDetails';
import Navbar from './Component/Navbar';
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='products' element={<Products/>}/>
     <Route path="productdetails/:id" element={<ProductDetails/>}/>



     </Routes>



    </div>
  );
}

export default App;
