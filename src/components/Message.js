import React from 'react';
import PropTypes from 'prop-types';

const Message = (props) => {
  return <div>
    <p>{props.message}</p>
  </div>;
};

Message.propTypes = { 
  error: PropTypes.bool,
  message: PropTypes.string
};

export default Message;