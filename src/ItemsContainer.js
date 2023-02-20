import React from "react";
import ItemCard from "./ItemCard";

function ItemsContainer({market, getRidOfItem, updateItem}) {
    
    const itemsList = market.map(item => <ItemCard key={item.id} item={item} getRidOfItem={getRidOfItem} updateItem={updateItem}/>)
    
    return(
        <div>
           {itemsList}
        </div>
    )
}

export default ItemsContainer