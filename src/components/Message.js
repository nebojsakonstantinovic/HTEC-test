import React from 'react';
import { Alert } from 'react-bootstrap';
import PropTypes from 'prop-types';

const propTypes = {
  variant: PropTypes.string,
  children: PropTypes.node.isRequired,
};

const Message = ({ variant, children }) => {
  return <Alert variant={variant}>{children}</Alert>;
};

Message.propTypes = propTypes;

Message.defaultProps = {
  variant: 'info',
};

export default Message;
