import Navbar from './Components/Navbar'; 
import Home from './Components/Home';
import './App.css';
import Products from './Components/Products';
import { Redirect, Route, Routes } from 'react-router-dom';
import Product from './Components/Product';
import Cart from "./Components/Cart";
import Checkout from './Components/Checkout';

function App() {
  return (
    <> 
    <Navbar/>
    <Routes>
        <Route exact path="/" element={ <Home/> } />
        <Route exact path="/products" element={  <Products/> } />
        <Route exact path="/cart" element={<Cart/>} />
        <Route exact path="/products/:id" element={ <Product/> } />
        <Route exact path="/checkout" element={ <Checkout/> } />
        </Routes>
    </>
  );
}

export default App;
