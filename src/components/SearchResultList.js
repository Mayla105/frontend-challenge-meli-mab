import React from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem';
import Breadcrumb from './Breadcrumb';
//TODO pagination
const SearchResultList = (props) => {
  return <div className='container justify-content-center'>
    <div className='row d-flex justify-content-center'>
      <div className='col-8'>
        <Breadcrumb categories={props.categories}/>
        <div className='list-item-container'>
          {props.items.map((item, idx) => <ListItem key={idx} info={item} categories={props.categories}/>)}
        </div>
      </div>
    </div>
    
    
  </div>;
};

SearchResultList.propTypes = {
  onSubmit: PropTypes.func,
  items: PropTypes.array,
  categories: PropTypes.array
};

export default SearchResultList;