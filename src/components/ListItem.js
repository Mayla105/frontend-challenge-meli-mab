import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as utils from '../utils/utils';

const ListItem = ({ info, categories }) => {
  return (
    <div className='container d-flex item-container'>
      <div className='row flex-grow-1'>
        <div className='col-auto'>
          <Link
            to={{
              pathname: `/items/${info.id}`,
              itemInfo: info,
              categories: categories,
            }}
          >
            <img width='160' height='160' src={info.picture} alt={info.title} />
          </Link>
        </div>
        
        <div className='col-md-7 p-3'>
          <h3 className='price-title'>
            {utils.priceFormatter(info.price)}
            {info.price.decimals ? <span>,{info.price.decimals}</span> : null}
          </h3>
          {info.free_shipping ? <small>Envio gratis</small> : null}
          <h4 className='item-detail-title'>
            <Link
              to={{
                pathname: `/items/${info.id}`,
                itemInfo: info,
                categories: categories,
              }}>
              {info.title}
            </Link>
          </h4>
        </div>
        <div className='col-lg-2 p-4'>
          <p>{info.condition === 'new' ? 'Nuevo' : 'Usado'}</p>
        </div>
      </div>
    </div>
  );
};

ListItem.propTypes = {
  info: PropTypes.object,
  categories: PropTypes.array,
};

export default ListItem;
