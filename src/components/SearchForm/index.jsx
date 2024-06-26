import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import './index.css';
const SearchForm = () => {
  const [searchValue, setSearchValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const name = searchParams.get('name');
    if (name !== null) {
      setSearchValue(name);
    }
  }, [searchParams]);

  const handleOnChange = e => setSearchValue(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ name: searchValue });
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', alignItems: 'center' }}
    >
      <input
        type="text"
        placeholder="Enter movie name"
        value={searchValue}
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
