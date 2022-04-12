import React, { useState } from 'react';


const SearchBar = ({ onFormSubmit }) => {
    const [ term, setTerm ] = useState('');
    
    const onSubmit = event => {
        event.preventDefault();
        
        onFormSubmit(term);
    };

    return (
        <div className="search-bar segment ui">
            <form onSubmit={onSubmit} className="form ui">
                <div className="field">
                    <label>
                        video Search
                    </label>
                    <input type="text"
                        value={term}
                        onChange={(e) => setTerm(e.target.value)}
                       />
                </div>
            </form>
        </div>
    );

}

export default SearchBar;