import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import * as utils from '../utils';
import Message from './Message';
import Loader from './Loader';

function ItemDetail(props) {

  const id = props.match.params.id;
  const [itemInfo, setItemInfo] = useState({});
  const [errorMsg, showErrorMsg] = useState({error: false, text: ''});

  useEffect(() => {
    fetch(`http://localhost:5000/api/items/${id}`)
      .then(response => response.json())
      .then(response => {
        
        if(response.error){
          let text = response.error === 404
            ? 'El artículo que ingresaste no existe.'
            : 'Ups! Algo salió mal. Probá nuevamente más tarde';
          showErrorMsg({error: true, text: text});
        } else {
          setItemInfo(response.item);
        }
      })
      .catch(error => {
        console.error(error);
        showErrorMsg({error: true, text: 'Ups! Algo salió mal. Probá nuevamente más tarde'});
      });
  }, [id]);

  return errorMsg.error ? <Message error={errorMsg.error} message={errorMsg.text} /> :
    itemInfo.id ? <div>
      <div>
        <div>
          <img src={itemInfo.picture} alt={itemInfo.title}/>
        </div>
        <div>
          <p>
            {`${itemInfo.condition === 'new' ? 'Nuevo' : 'Usado'} - ${itemInfo.sold_quantity} vendidos`}
          </p>
          <h5>{itemInfo.title}</h5>
          <h3>
            {utils.priceFormatter(itemInfo.price)}
            {itemInfo.price.decimals ?
              <span>,{itemInfo.price.decimals}</span> : null}
          </h3>
          <button>Comprar</button>
        </div>
      </div>
      <div>
        <p>Descripción del producto</p>
        <p>{itemInfo.description}</p>
      </div>
    </div> : <Loader />;
}

ItemDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }),
};

export default ItemDetail;
