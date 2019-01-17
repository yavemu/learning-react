import React from 'react';
import "./search.css";

const Search = (props) => (
  <form 
    className="Search"
    onSubmit={props.handleSubmit}
    >
    <input
      ref={props.setRef}
      type="text"
      className="Search-input"
      placeholder="Busqueda filtrada"
      name='search'
      value={props.value}
      onChange={props.handleChange}
    />
  </form>
);


export default Search;