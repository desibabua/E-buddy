import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const SearchBox = function (props) {
  const [value, setValue] = useState('');
  const history = useHistory();

  const handleChange = function (e) {
    setValue(e.target.value);
  };

  const handleSubmit = function (e) {
    e.preventDefault();
    let url = `/products/all`;
    if (value) {
      url = `/search?input=${value}`
      setValue('');
    }
    history.push(url)
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search"
        value={value}
        onChange={handleChange}
      />
    </form>
  );
};

const SearchBar = function (props) {
  return (
    <div className="search-bar">
      <SearchBox />
    </div>
  );
};

export default SearchBar;
