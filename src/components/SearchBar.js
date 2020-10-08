import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import styled from 'styled-components';

const SearchBox = styled.form`
  width: 50%;
`;

const Input = styled.input`
  width: 75%;
  border: none;
  margin-top: 20px;
  margin-left: 40px;
  padding: 5px 20px;
  font-weight: 300;
  font-size: 1.4rem;
  background: transparent;
  border-bottom: 3px solid #8d93ab;

  &:focus {
    outline: none;
    border-bottom: 3px solid #393b44;
  }
`;

const SearchBar = function (props) {
  const [value, setValue] = useState('');
  const history = useHistory();

  const handleChange = function (e) {
    setValue(e.target.value);
  };

  const handleSubmit = function (e) {
    e.preventDefault();
    let url = `/products/all`;
    if (value) {
      url = `/search?input=${value}`;
    }
    history.push(url);
  };

  return (
    <SearchBox onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Search"
        value={value}
        onChange={handleChange}
      />
    </SearchBox>
  );
};

export default SearchBar;
