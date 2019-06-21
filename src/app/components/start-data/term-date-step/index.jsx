import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionsType } from '../../../../constants';

import './style.scss';

class TermDateStep extends Component {

  render() {
    const { setDataOfterminated } = this.props;
    const date = new Date(this.props.dateOfTerminated).toLocaleDateString()

    return (
      <div className='term-date-step'>
        <h3>TermDateStep</h3>
        <button onClick={setDataOfterminated} >Сейчас!</button>
        <p>{ date }</p>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    dateOfTerminated: store.smokingData.dateOfTerminated
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setDataOfterminated: () => dispatch({ type: actionsType.SET_SMOKING_DATA, smokingData: {
      dateOfTerminated: new Date().toJSON()
    } })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TermDateStep);
