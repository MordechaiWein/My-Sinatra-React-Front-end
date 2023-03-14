import React, { useState, useEffect } from "react";
import ItemsContainer from "./ItemsContainer";
import { useParams } from "react-router-dom";

function StoreDetail({ stores }) {
    
    const params = useParams()
    const [market, setMarket] = useState([])
    const [itemData, setItemData] = useState({
        name:"",
        image:"",
        price:"",
        store_id: parseInt(params.id)
    })

    const storeInfo = stores.find(store => parseInt(params.id) === store.id)
    const [singleStore, setSingleStore] = useState(storeInfo?.items)
  


    // useEffect(() => {
    //     fetch(`http://localhost:9292/stores/${params.id}`)
    //     .then(response => response.json())
    //     .then(data => setMarket(data.items))
    // },[])
       
    function handleChangeItem(event) {
        setItemData({...itemData,[event.target.name]: event.target.value})
    }

    function addItem(newItem) {
        setSingleStore([...singleStore, newItem])
    }

    function getRidOfItem(erasedItem) {
        const itemsToDisplay = singleStore.filter(product => product.id !== erasedItem.id)
        setSingleStore(itemsToDisplay)
    }

    function updateItem(updatedItem) {
        const updatedProduct = singleStore.map((product) => {
            if (product.id === updatedItem.id) {
            return updatedItem
            } else {
            return product
            }
        })
        setSingleStore(updatedProduct)
    }
    
    function handleSubmitItem(e) {
        e.preventDefault()
        fetch("http://localhost:9292/items", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(itemData)
        })
        .then(response => response.json())
        .then(data => addItem(data))
        setItemData({
            name:"",
            image:"",
            price:"",
            store_id: parseInt(params.id)
        })
    }

    return(
        <div className="App">
            <h1>{storeInfo?.name}</h1>
            <h2>{storeInfo?.location}</h2>
            <h2>☎️ {storeInfo?.phone_number}</h2>
            <h2>Add an item to the store!</h2>
            <form onSubmit={handleSubmitItem} >
                <input onChange={handleChangeItem} className="formStyle1" type="text" name="name" value={itemData.name} placeholder="Enter item name"/>
                <input onChange={handleChangeItem} className="formStyle1" type="text" name="image" value={itemData.image} placeholder="Enter item image"/>
                <input onChange={handleChangeItem} className="formStyle1" type="text" name="price" value={itemData.price} placeholder="Enter item price"/>
                <input onChange={handleChangeItem} className="formStyleSubmit1" type="submit"/>
            </form>
            <ItemsContainer singleStore={singleStore} market={market} getRidOfItem={getRidOfItem} updateItem={updateItem}/> 
        </div>
    )
}

export default StoreDetail