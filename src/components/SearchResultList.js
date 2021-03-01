import React from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem';
//TODO pagination
const SearchResultList = (props) => {
  return <div>
    {props.items.map((item, idx) => <ListItem key={idx} info={item} categories={props.categories}/>)}
  </div>;
};

SearchResultList.propTypes = { 
  onSubmit: PropTypes.func,
  items: PropTypes.array,
  categories: PropTypes.array
};
export default SearchResultList;