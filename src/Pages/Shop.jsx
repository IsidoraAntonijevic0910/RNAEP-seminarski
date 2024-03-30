import React  from "react";
import Hero from '../Components/Hero/Hero.jsx';
import Popularproducts from '../Components/Popularproducts/Popularproducts.jsx'
import Specials from "../Components/Specials/Specials.jsx";
import NewCollections from "../Components/NewCollections/NewCollections.jsx";
import NewsLetter from "../Components/NewsLetter/NewsLetter.jsx";

const Shop = () => {
    return(
        <div>
            <Hero/>
            <Popularproducts/>
            <Specials/>
            <NewCollections/>
            <NewsLetter/>
            

        </div>
    )
}
export default Shop