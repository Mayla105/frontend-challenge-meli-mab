import React from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem';

const SearchResultList = (props) => {
  console.log(props.categories);
  return <div className='container justify-content-center'>
    <div className='row d-flex justify-content-center'>
      <div className='col-8'>
        <div className='list-item-container mb-5 pb-0'>
          {props.items.slice(0,4).map((item, idx) => <ListItem key={idx} info={item} categories={props.categories}/>)}
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