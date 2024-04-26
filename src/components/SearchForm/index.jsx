import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import './index.css';
const SearchForm = () => {
  const [SearchValue, setSearchValue] = useState('');
  const [, setSearchParams] = useSearchParams();

  const handleOnChange = e => setSearchValue(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ name: SearchValue });
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', alignItems: 'center' }}
    >
      <input
        type="text"
        placeholder="Enter movie name"
        value={SearchValue}
        onChange={handleOnChange}
        style={{
          padding: '10px',
          border: '2px solid #007bff',
          borderRadius: '5px',
          marginRight: '10px',
          flex: '1',
          marginTop: '10px',
        }}
      />
      <button
        style={{
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          marginTop: '10px',
        }}
      >
        Search
      </button>
    </form>
  );
};
export default SearchForm;
