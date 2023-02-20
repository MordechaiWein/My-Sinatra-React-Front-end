import React, { useState } from "react";

function ItemCard({item, getRidOfItem, updateItem}) {

    const [cardData, setCardData] = useState({
        price:""
    })

    function handleClick() {
        fetch(`http://localhost:9292/items/${item.id}`, {
          method: "DELETE"  
        })
        .then(response => response.json())
        .then(data => getRidOfItem(item))
    }

    function handleChangeCard(event) {
        setCardData({...cardData,[event.target.name]: event.target.value})
    }
    
    function handleSubmitCard(e) {
        e.preventDefault()
        fetch(`http://localhost:9292/items/${item.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(cardData)
        })
        .then(response => response.json())
        .then(data => updateItem(data))
        setCardData({
            price:""
        })
    }

    return(
        <div className="card">
            <h2>{item.name}</h2>
            <img src={item.image} alt="image" className="image"/>
            <h3>$ {item.price}</h3>
            <form onSubmit={handleSubmitCard}>
                <input onChange={handleChangeCard} type="text" name="price" value={cardData.price} placeholder="Edit price"/>
                <input value="Edit" type="submit"/>
            </form>
            <br />
            <button onClick={handleClick}>Out of Stock</button>
        </div>
    )
}

export default ItemCard