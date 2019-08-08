import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setStartDataAC } from '../../../redux/actions';

import './CommonInfoStep.scss';

class CommonInfoStep extends Component {
  handleChange = (event) => {
    const { setStartData } = this.props;
    setStartData(event);
  };

  render() {
    const { cigarettesInPack, cigarettesInDay, price } = this.props;
    return (
      <div className="cigarettes-info-step">
        <h3>Немного информации о вашем увлечение</h3>
        <div className="info-container">
          <label htmlFor="cigarettesInPack">
            Сигарет в пачке:
            <span className="info-value">{cigarettesInPack}</span>
          </label>
          <input
            name="cigarettesInPack"
            type="range"
            min="1"
            max="100"
            step="1"
            defaultValue={cigarettesInPack}
            onChange={this.handleChange}
          />
        </div>

        <div className="info-container">
          <label htmlFor="cigarettesInDay">
            Выкуриваю в день:
            <span className="info-value">{cigarettesInDay}</span>
          </label>
          <input
            name="cigarettesInDay"
            type="range"
            min="1"
            max="100"
            step="1"
            defaultValue={cigarettesInDay}
            onChange={this.handleChange}
          />
        </div>
        <div className="info-container">
          <label htmlFor="price">
            Стоимость пачки:
            <span className="info-value">{price}</span>
          </label>
          <input
            name="price"
            type="range"
            min="1"
            max="100"
            step="1"
            defaultValue={price}
            onChange={this.handleChange}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  const { cigarettesInPack, cigarettesInDay, price } = store.smokingData;
  return {
    cigarettesInPack,
    cigarettesInDay,
    price,
  };
};

const mapDispatchToProps = dispatch => ({
  setStartData: event => dispatch(setStartDataAC(event)),
});

CommonInfoStep.propTypes = {
  cigarettesInPack: PropTypes.number,
  cigarettesInDay: PropTypes.number,
  price: PropTypes.number,
  setStartData: PropTypes.func,
};

CommonInfoStep.defaultProps = {
  cigarettesInPack: 20,
  cigarettesInDay: 0,
  price: 0,
  setStartData: () => {},
};

export default connect(mapStateToProps, mapDispatchToProps)(CommonInfoStep);
