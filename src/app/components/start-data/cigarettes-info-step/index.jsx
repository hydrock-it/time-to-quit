import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionsType } from '../../../../constants';
import { setStartData } from '../../../../actions';

import './style.scss';

class CigarettesInfoStep extends Component {

  render() {
    const { nicotine, tar, setStartData } = this.props; 
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
            onChange={() => setStartData(event)} />
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
            onChange={() => setStartData(event)} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    nicotine: store.smokingData.nicotine,
    tar: store.smokingData.tar,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setStartData: (event) => dispatch(setStartData(event))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CigarettesInfoStep);
