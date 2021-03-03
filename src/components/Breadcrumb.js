import React from 'react';
import PropTypes from 'prop-types';

const Breadcrumb = (props) =>{
  console.log(props);
  return <div className='categories-breadcrum'>
    <ul className={'breadcrumb-container'}>
      {props.categories ? props.categories.map((category, idx) =>
        <span key={idx}>{category}
          {idx !== props.categories.length - 1 ? ' > ' : null}
        </span>)
        : null}
    </ul>
  </div>;
};

Breadcrumb.propTypes = {
  categories: PropTypes.array
};


export default Breadcrumb;

