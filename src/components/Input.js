import React, { useState } from 'react';
import styled from 'styled-components';

const Input = styled.input`
  width: 60%;
  padding: 0.4rem;
  font-size: 1.2rem;
  border-radius: 3px;
  border: 2px solid lightgrey;
  margin: 20px 0px 0px 50px;

  &:focus {
    border: 2px solid black;
    outline: none;
  }
`;

const Submit = styled.button`
  color: white;
  margin: 0px 20px;
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  border: 1px solid grey;
  background-color: rgb(107, 107, 107);

  &:hover {
    border: 1px solid black;
    background-color: #393b44;
  }
`;

const GetReview = function ({ placeholder, onSubmit }) {
  const [value, setValue] = useState('');

  const handleSubmit = function (e) {
    e.preventDefault();
    if (value) {
      onSubmit(value);
      setValue('');
    }
  };

  const handleChange = function (e) {
    setValue(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
      <Submit>Submit</Submit>
    </form>
  );
};

export default GetReview;
