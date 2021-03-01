import React from 'react';
import PropTypes from 'prop-types';

const Message = (props) => {
   return 'error component'
};

Message.propTypes = { 
  error: PropTypes.bool,
  message: PropTypes.string
};

export default Message;