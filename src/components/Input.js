import React, { useState } from 'react';

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
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
      <button>Submit</button>
    </form>
  );
};

export default GetReview;
