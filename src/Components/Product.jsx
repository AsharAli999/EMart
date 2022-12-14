 
import React, {useState,useEffect} from  'react';
import {useParams} from 'react-router';
import {NavLink} from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import {  useDispatch } from 'react-redux/es/exports';
import {addcart} from '../redux/action/index';
import {delcart} from '../redux/action/index';
import { removeItem } from '../redux/action/index';

const Product = () => {
  
  const {id} = useParams();  
  const [product, setProduct] = useState([]) ;  
  const [loading, setLoading] = useState(false);
  
//Redux Work
const dispatch = useDispatch();

const addProduct = (product)=>{
    dispatch(addcart(product));
}

const delProduct = (product)=>{
    dispatch(removeItem(product));
}

useEffect(()  => {
    
    const getProduct = async ()=>{
      setLoading(true);
      const response = await fetch( `https://fakestoreapi.com/products/${id}` );
      setProduct(await response.json());
      setLoading(false);
    }

    getProduct();
},  []);
 


const Loading = ()=>{
    return(
    <>
    <div className="col-md-6"> 
    <Skeleton height={450}/> 
     </div>
  
    </> );
}


const ShowProduct = ()=>{
    return(
        <>
        <div className='col-md-6'>
            <img src= {product.image}  alt="noob" height= "400px" width = "400px"/>
        </div>

        <div className='col-md-6'>
             <h4 className='text-uppercase text-black-50'>
                {product.category}
             </h4>
             <h1 className='display-5'>{product.title}</h1>
             <p className="lead fw-bolder">
                Rating {product.rating && product.rating.rate}
                <i className='fa fa-star'></i> 
                <h3 className='display-6 fw-bold my-4'>
                    $ {product.price}
                </h3>
                <p className="lead">{product.description}</p>
                <button className='btn btn-outline-dark px-4 py-2' onClick={( )=>addProduct(product)}>Add to Cart</button>
        
                <NavLink to="/cart" className='btn btn-dark ms-2 px-3 py-2'>Go to Cart</NavLink>
             </p>
        </div>

        </>
    );
}


    return (
    <div> 
<div className="container py-5">
    <div className="row py-4">
        {loading ? <Loading/> : <ShowProduct/>}
    </div>
</div>
    </div>
  )
}

export default Product