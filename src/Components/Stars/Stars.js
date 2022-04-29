import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Star from '../Star';
import './Stars.css';

function Stars(props) {
  const { count } = props;
  const validCount = count > 0 && count <= 5 && Number.isInteger(count);
  const arrayCount = [...Array(count).keys()];
  const stars = arrayCount.map((item) => <li key={item}><Star /></li>);

  return (
    <Fragment>{validCount && <ul className="card-body-stars u-clearfix">{stars}</ul>}</Fragment>
  )
}

Stars.defaultProps = {
  count: 0
}

Stars.propTypes = {
  count: PropTypes.number
}

export default Stars;
