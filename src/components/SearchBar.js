import React from 'react';

function SearchBar({ filterText, onFilterTextChange }) {
    return (
        <div>
            <input
                type="text"
                placeholder="Search..."
                value={filterText}
                onChange={(e) => onFilterTextChange(e.target.value)}
            />
        </div>
    );
}

export default SearchBar;