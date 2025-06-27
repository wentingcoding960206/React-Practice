import React from 'react';
import {useState} from 'react';
import './holiday_search.css';

export default function HolidaySearch({ searchText, setSearchText }) {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <div>
            <input 
                className="custom-input"
                type="text"
                onFocus={() => setIsFocused(true)} // Hide placeholder
                onBlur={() => setIsFocused(false)} // Restore placeholder when it's empty
                onChange={(e) => setSearchText(e.target.value)}
                value={searchText}
                placeholder={isFocused ? '' : "Search holidays..."}
            />

        </div>
    )

}
