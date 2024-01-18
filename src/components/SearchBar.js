import { LuSearch } from "react-icons/lu"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState("")
    const navigate = useNavigate()

    const handleSearch = () => {
        navigate(`/Productos?search=${searchTerm}`)
    }

    return (
        <div className="navbar-item">
            <div className="field has-addons">
                <div className="control">
                    <input
                        id="barrabuscona"
                        className="input"
                        type="text"
                        placeholder="Buscar productos..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="control">
                    <button className="button is-warning" onClick={handleSearch}>
                        <LuSearch className="lupa" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SearchBar

