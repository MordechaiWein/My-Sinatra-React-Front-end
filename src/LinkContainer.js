import React from "react";
import { Link } from "react-router-dom";

function LinkContainer({stores}) {

    const storeList = stores.map(store => (
        <ul key={store.id}>
            <Link className="links" to={`/stores/${store.id}`}> {store.name} </Link> 
        </ul>
    ))

    return(
        <div>
            {storeList}
        </div>
    )
}

export default LinkContainer