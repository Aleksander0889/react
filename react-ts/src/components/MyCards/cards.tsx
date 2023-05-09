import NameForm from "../Form";
import { products } from "../Data/data";
import React, { useState } from "react";
import classses from './MyCards.module.css'


const RendCard = (obj) => {
   const [objArr, setValue] = useState(products);
   
       return <>
          <div className={classses.myCard} >
           <img  className={classses.myImg} src={obj.products.thumbnail} alt="" />
    
          <div className={classses.cardBloke}>                
         <p className={classses.cardText}>{obj.products.title}</p>
         <p className={classses.cardText}>Category: {obj.products.category}</p>
         <p className={classses.cardText}>Brand: {obj.products.brand}</p>
         <p className={classses.cardText}>Price: {obj.products.price}</p>         
         <p className={classses.cardText}>Discount: {obj.products.discountpercentage}</p>
         <p className={classses.cardText}>Rating: {obj.products.rating}</p>   
         <p className={classses.cardText}>Stock: {obj.products.stock}</p>   
       </div>
    </div>   
    </>
}

export default RendCard;