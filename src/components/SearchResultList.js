import React from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem';
import Breadcrumb from './Breadcrumb';
//TODO pagination
const SearchResultList = (props) => {
  return <div>
    <Breadcrumb categories={props.categories}/>
    {props.items.map((item, idx) => <ListItem key={idx} info={item} categories={props.categories}/>)}
  </div>;
};

SearchResultList.propTypes = {
  onSubmit: PropTypes.func,
  items: PropTypes.array,
  categories: PropTypes.array
};

export default SearchResultList;