import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import * as utils from '../utils/utils';
import Message from './Message';
import Loader from './Loader';

const ItemDetail = (props) => {
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
      <div className='container'>
        <div className='row d-flex justify-content-center'>
          <div className='col-lg-9 col-xl-8'>
            <div className='row d-flex item-detail-container'>
              <div className='col-lg-8'>
                <img width='400' height='400' src={itemInfo.picture} alt={itemInfo.title}/>
              </div>
              <div className='col-lg-4 justify-content-center'>
                <p>
                  {`${itemInfo.condition === 'new' ? 'Nuevo' : 'Usado'} - ${itemInfo.sold_quantity} vendidos`}
                </p>
                <div>
                  <h3 className='item-detail-title'>{itemInfo.title}</h3>
                </div>
                <div className='d-flex my-3'>
                  <h1 className='item-detail-title-price'>
                    {utils.priceFormatter(itemInfo.price)}
                  </h1>
                  {itemInfo.price.decimals ?
                    <span className='price-decimals'>{itemInfo.price.decimals}</span> : null}
                </div>
                <div className='button-container'>
                  <button className="buy-button">Comprar</button>
                </div>
              </div>
              <div className='row item-description-container'>
                <div className='col-lg-10'>
                  <h3 className='description-title'>Descripción del producto</h3>
                  <p className='description-body'>{itemInfo.description}</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div> : <Loader />;
};

ItemDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }),
  categories: PropTypes.array
};

export default ItemDetail;
