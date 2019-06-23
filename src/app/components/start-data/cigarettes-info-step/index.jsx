import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setStartDataAC } from '../../../../actions';
import PropTypes from 'prop-types';

import './style.scss';

class CigarettesInfoStep extends Component {

  handleChange = (event) => this.props.setStartDataAC(event);

  render() {
    const { nicotine, tar } = this.props; 
    return (
      <div className='cigarettes-info-step'>
        <h3>CigarettesInfoStep</h3>
        <div>
          <label htmlFor="nicotine">Содержит никотина: {nicotine}</label>
          <input 
            name="nicotine" 
            type="range" 
            min="1" 
            max="100" 
            step="1" 
            defaultValue={nicotine}
            onChange={this.handleChange} />
        </div>
        <div>
          <label htmlFor="tar">Содержит смолл: {tar}</label>
          <input 
            name="tar" 
            type="range" 
            min="1" 
            max="100" 
            step="1" 
            defaultValue={tar}
            onChange={this.handleChange} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => {
  const { nicotine, tar } = store.smokingData;
  return {
    nicotine: nicotine,
    tar: tar,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setStartDataAC: (event) => dispatch(setStartDataAC(event))
  }
}

CigarettesInfoStep.protoTypes = {
  setStartDataAC: PropTypes.func,
  nicotine: PropTypes.number,
  tar: PropTypes.number,
} 

export default connect(mapStateToProps, mapDispatchToProps)(CigarettesInfoStep);
