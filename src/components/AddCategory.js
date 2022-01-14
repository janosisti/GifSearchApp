import React, { useState } from "react";

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setinputValue] = useState('');

  const handleInputChange = (el) => {
    setinputValue(el.target.value);
  };

  const handleSummit = (el) => {
    el.preventDefault();
    if (inputValue.trim().length > 2){
      setCategories((cat) => [inputValue,...cat]);
      setinputValue('');
    }
  };

  return (
    <form onSubmit={handleSummit}>
      <input type="text" value={inputValue} onChange={handleInputChange} placeholder="Search GIF"/>
    </form>
  );
};
