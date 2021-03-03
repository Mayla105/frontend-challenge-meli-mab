import React from 'react';
import PropTypes from 'prop-types';

const Message = (props) => {
  return <div className='container-fluid large-container'>
    <div className='row h-100 align-items-center justify-content-center'>
      <div className='col-8 d-flex align-items-center justify-content-center message-container'>
        <div className='d-flex'>
          <h2>
            {props.error ? <span className="fas fa-exclamation-triangle mr-4"></span>
              : <span className="fab fa-searchengin mr-4"></span>}
          </h2>
          <h2>
            {props.message}</h2>
        </div>
      </div>
    </div>;
  </div>;
};

Message.propTypes = { 
  error: PropTypes.bool,
  message: PropTypes.string
};

export default Message;