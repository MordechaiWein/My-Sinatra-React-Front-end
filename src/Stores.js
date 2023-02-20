import React, { useState } from "react";
import LinkContainer from "./LinkContainer";

function Stores({stores, addStore}) {

    const [data, setData] = useState({
        name:"",
        location:"",
        phone_number:""
    })

    function handleChange(event) {
        setData({...data,[event.target.name]: event.target.value})
    }

    function handleSubmit(e) {
        e.preventDefault()
        fetch("http://localhost:9292/stores", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => addStore(data))
        setData({
            name:"",
            location:"",
            phone_number:""
        })
    }
    
    return(
        <div className="linkCenter">
            <div className="linkForm">
                <h1>Add a store to our website !</h1>
                <form onSubmit={handleSubmit}>
                    <input onChange={handleChange} className="formStyle"  type="text" name="name" value={data.name} placeholder="Enter store name" />
                    <input onChange={handleChange} className="formStyle"  type="text" name="location" value={data.location} placeholder="Enter store location"/>
                    <input onChange={handleChange} className="formStyle"  type="text" name="phone_number" value={data.phone_number} placeholder="Enter store phone number"/>
                    <input onChange={handleChange} className="formStyleSubmit" type="submit"  />
                </form>
                <br />
                <br />
                <hr />
                <br />
                <LinkContainer stores={stores} />
                <br />
                <br />
            </div>
        </div>
    )
}

export default Stores