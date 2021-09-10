import React from 'react';

const handleChange = (filter, updateFilter) => e => (
  updateFilter(filter, parseInt(e.currentTarget.value))
);

const SearchFilter = ({ minSeating, maxSeating, updateFilter }) => (
    <div className="search-filter-form">
        <label>Price
            <input type="checkbox" value="$$" onChange={handleChange('price', )} />
            <label>$</label>
            <input type="checkbox" value="$$$" onChange={handleChange('price', )} />
            <label>$$</label>
            <input type="checkbox" value="$$$$" onChange={handleChange('price', )} />
            <label>$$$</label>
        </label>
        <br/>
        <label>Neighborhood
            <input type="checkbox" value="NYC1" onChange={handleChange('neighborhood', )} />
            <label>NYC1</label>
            <input type="checkbox" value="NYC2" onChange={handleChange('neighborhood', )} />
            <label>NYC2</label>
            <input type="checkbox" value="NYC3" onChange={handleChange('neighborhood', )} />
            <label>NYC3</label>
            <input type="checkbox" value="NYC4" onChange={handleChange('neighborhood', )} />
            <label>NYC4</label>
        </label>
        <br/>
        <label>Cuisine
            <input type="checkbox" value="Cuisine1" onChange={handleChange('cuisine', )} />
            <label>Cuisine1</label>
            <input type="checkbox" value="Cuisine2" onChange={handleChange('cuisine', )} />
            <label>Cuisine2</label>
            <input type="checkbox" value="Cuisine3" onChange={handleChange('cuisine', )} />
            <label>Cuisine3</label>
            <input type="checkbox" value="Cuisine4" onChange={handleChange('cuisine', )} />
            <label>Cuisine4</label>
        </label>
        <br/>


  </div>
);

export default SearchFilter;