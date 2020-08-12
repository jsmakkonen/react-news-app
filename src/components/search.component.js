import React, { useState } from 'react'

const Search = (props) => {
    const [searchValue, setSearchValue] = useState("");
    
    const handleChange = (e) => {
        setSearchValue(e.target.value)
    }

    const resetInputField = () => {
        setSearchValue("")
    }

    const callSearchFunction = (e) => {
        e.preventDefault();
        props.search(searchValue);
        resetInputField();
    }

    return (
        <div className="form-group mt-4">
            <label>Search news</label>
            <form className="search">
                <input type="text" 
                value={searchValue} 
                onChange={handleChange} 
                />
                <input onClick={callSearchFunction} type="submit" value="Search" className="btn btn-primary ml-3" />
            </form>
        </div>
    )
}

export default Search;