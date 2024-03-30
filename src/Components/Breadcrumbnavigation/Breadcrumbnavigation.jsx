import React from "react";
import './Breadcrumbnavigation.css';
import arrow_icon from '../Assets/breadcrum_arrow.png';

const Breadcrumbnavigation = (props) => {
    const {product} = props;
    return(
        <div className="breadcrumbnavigation">
            HOME <img src={arrow_icon} alt=""/> SHOP <img src={arrow_icon} alt=""/> {product.category} <img src={arrow_icon} alt=""/> {product.name}
        </div>
    )
}
export default Breadcrumbnavigation;