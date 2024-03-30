import React, { useContext } from "react"
import { ShopContext } from '../Context/ShopContext'
import {useParams} from 'react-router-dom';
import Breadcrumbnavigation from '../Components/Breadcrumbnavigation/Breadcrumbnavigation'
import ProductDispley from "../Components/ProductDispley/ProductDispley";
import OtherProducts from "../Components/OtherProducts/OtherProducts";
import Emptyspace from "../Components/Emptyspace/Emptyspace";
import Review from '../Components/Review/Review'
const Products = ()  => {
    const{all_product} =useContext(ShopContext);
    const{productId} = useParams();
    const product = all_product.find((e)=> e.id=== Number(productId));


    return(
        <div>
            <Breadcrumbnavigation product={product}/>
            <ProductDispley product={product}/>
            <Review/>
            <Emptyspace/>
            <OtherProducts/>

        </div>
    )
}
export default Products