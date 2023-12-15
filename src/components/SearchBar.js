import React from "react"
import "../styles/SearchBar.css"

function SearchBar({placeholder, data}) {

    return (
        <div>
        <div>
            <input type="text" placeholder={placeholder}  className="navbar-item" id="barrabuscona"/>
        </div>
        <div>
            {data.map((value, key)=>{
                return <div>{} </div>
            } )}
        </div>
        </div>
    )
}

export default SearchBar