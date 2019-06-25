import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { actionsType } from '../../../../constants';

import './style.scss';

const TermDateStep = (props) => {
  const { setDataOfTerminated, dateOfTerminated } = props;
  const date = new Date(dateOfTerminated).toLocaleDateString();
  return (
    <div className="term-date-step">
      <h3>TermDateStep</h3>
      <button type="button" onClick={setDataOfTerminated}>Сейчас!</button>
      <p>{ date }</p>
    </div>
  );
};

const mapStateToProps = store => ({
  dateOfTerminated: store.smokingData.dateOfTerminated,
});

const mapDispatchToProps = dispatch => ({
  setDataOfTerminated: () => dispatch({
    type: actionsType.SET_SMOKING_DATA,
    payload: {
      dateOfTerminated: new Date().toJSON(),
    },
  }),
});

TermDateStep.propTypes = {
  dateOfTerminated: PropTypes.string,
  setDataOfTerminated: PropTypes.func,
};

TermDateStep.defaultProps = {
  dateOfTerminated: '',
  setDataOfTerminated: () => {},
};

export default connect(mapStateToProps, mapDispatchToProps)(TermDateStep);
