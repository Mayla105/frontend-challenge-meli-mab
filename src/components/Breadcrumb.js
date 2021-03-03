import React from 'react';
import PropTypes from 'prop-types';

const Breadcrumb = (props) =>{
  return <div className='container'>
    <div className='row d-flex justify-content-center'>
      <div className='col-8 categories-breadcrum'>
        <ul className={'breadcrumb-container'}>
          {props.categories ? props.categories.map((category, idx) =>
            <span key={idx}>{category}
              {idx !== props.categories.length - 1 ? ' > ' : null}
            </span>)
            : null}
        </ul>
      </div>
    </div>
  </div>;
};

Breadcrumb.propTypes = {
  categories: PropTypes.array
};


export default Breadcrumb;

