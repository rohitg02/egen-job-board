import React from 'react';
import PropTypes from 'prop-types';


function OrderedListOption(props) {
  const { value } = props;
  return <li className="value">{value}</li>;
}


function OrderedList(props) {
  const { options } = props;
  if (!options.length) {
    return <span className="empty">No options added.</span>;
  }

  return (
    <ol className="options">
      {options.map(option => <OrderedListOption key={option} value={option} />)}
    </ol>
  );
}

OrderedList.propTypes = {
  options: PropTypes.array,
};

OrderedList.defaultProps = {
  options: [],
};

export default OrderedList;
