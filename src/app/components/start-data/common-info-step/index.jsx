import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setStartData } from '../../../../actions';

import './style.scss';

class CommonInfoStep extends Component {
  
  render() {
    const { cigarettesInPack, cigarettesInDay, price, setStartData } = this.props;
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
            onChange={() => setStartData(event)} />
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
            onChange={() => setStartData(event)} />
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
            onChange={() => setStartData(event)} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    cigarettesInPack: store.smokingData.cigarettesInPack,
    cigarettesInDay: store.smokingData.cigarettesInDay,
    price: store.smokingData.price,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setStartData: (event) => dispatch(setStartData(event))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommonInfoStep);
