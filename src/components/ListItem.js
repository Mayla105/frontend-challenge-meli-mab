import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as utils from '../utils/utils';

const ListItem = ({ info, categories }) => {
  return (
    <div>
      <div id={info.id}>
        <Link
          to={{
            pathname: `/items/${info.id}`,
            itemInfo: info,
            categories: categories,
          }}
        >
          <img width='160' height='160' src={info.picture} alt={info.title} />
        </Link>
        <div>
          <p>
            {utils.priceFormatter(info.price)}
            {info.price.decimals ? <span>,{info.price.decimals}</span> : null}
          </p>
          {info.free_shipping ? <small>Envio gratis</small> : null}
          <Link
            to={{
              pathname: `/items/${info.id}`,
              itemInfo: info,
              categories: categories,
            }}>
            <p>{info.title}</p>
          </Link>
        </div>
        <div>
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
