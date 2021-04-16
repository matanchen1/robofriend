import React from "react";

const SearchBox = ({searchChange}) => {
    return (
        <div className="pa4 black-80">
            <input
                className="pa3 bg-dark-green bg-light-blue input-reset ba b--black-20  mb2 shadow-5 tc  "
                type='Search'
                placeholder='Search robots'
                onChange={searchChange}
            />
        </div>
    );
}
export default SearchBox;