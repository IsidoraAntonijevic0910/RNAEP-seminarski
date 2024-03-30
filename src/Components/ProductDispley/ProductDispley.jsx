import React, { useContext } from "react";
import './ProductDispley.css'
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext';


const ProductDispley = (props)  => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext)
    return(
        <div className="productdispley">
            <div className="productdispley-left">
                <div className="productdispley-img-list">
                    <img src={product.image}alt=""/>
                    <img src={product.image}alt=""/>
                    <img src={product.image}alt=""/>
                    <img src={product.image}alt=""/>
                </div>
                <div className="productdispley-img">
                    <img className ="productdispley-main-img"src={product.image}alt=""/>
                </div>
            </div>
            <div className="productdispley-right">
                <h1>{product.name}</h1>
                <div className="productdispley-right-prices">
                    <div className="productdispley-right-prices-old">€{product.old_price}</div>
                    <div className="productdispley-right-prices-new">€{product.new_price}</div>
                </div>
                <div className="productdispley-right-star">
                    <img src={star_icon}alt=""/>
                    <img src={star_icon}alt=""/>
                    <img src={star_icon}alt=""/>
                    <img src={star_icon}alt=""/>
                    <img src={star_dull_icon}alt=""/>
                    <p>(68)</p>
                </div>
                <div className="productdispley-right-description">
                Indulge in comfort and quality with our collection of cotton essentials, designed to provide you with the perfect blend of style and practicality.
                </div>
                <div className="productdispley-right-size">
                    <h1>Select size</h1>
                    <div  className="productdispley-right-sizes">
                        <div>XS</div>
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                    </div>
                </div>
                <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
             </div>
            
        </div>
    );
}
export default ProductDispley

