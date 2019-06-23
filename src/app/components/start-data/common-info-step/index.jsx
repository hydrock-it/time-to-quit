import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setStartDataAC } from '../../../../actions';
import PropTypes from 'prop-types';

import './style.scss';

class CommonInfoStep extends Component {

  handleChange = (event) => this.props.setStartDataAC(event);
  
  render() {
    const { cigarettesInPack, cigarettesInDay, price } = this.props;
    return (
      <div className='cigarettes-info-step'>
        <h3>CommonInfoStep</h3>
        <div>
          <label htmlFor="cigarettesInPack">Сигарет в пачке: {cigarettesInPack}</label>
          <input 
            name="cigarettesInPack"
            type="range" 
            min="1" 
            max="100" 
            step="1" 
            defaultValue={cigarettesInPack}
            onChange={this.handleChange} />
        </div>
        
        <div>
          <label htmlFor="cigarettesInDay">Выкуриваю в день: {cigarettesInDay}</label>
          <input 
            name="cigarettesInDay"
            type="range" 
            min="1" 
            max="100" 
            step="1" 
            defaultValue={cigarettesInDay}
            onChange={this.handleChange} />
        </div>
        <div>
          <label htmlFor="price">Стоимость пачки: {price}</label>
          <input 
            name="price"
            type="range" 
            min="1" 
            max="100" 
            step="1" 
            defaultValue={price}
            onChange={this.handleChange} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => {
  const { cigarettesInPack, cigarettesInDay, price } = store.smokingData;
  return {
    cigarettesInPack: cigarettesInPack,
    cigarettesInDay: cigarettesInDay,
    price: price,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setStartDataAC: (event) => dispatch(setStartDataAC(event))
  }
}

CommonInfoStep.propTypes = {
  cigarettesInPack: PropTypes.number,
  cigarettesInDay: PropTypes.number,
  price: PropTypes.number,
  setStartDataAC: PropTypes.func,
}

export default connect(mapStateToProps, mapDispatchToProps)(CommonInfoStep);
