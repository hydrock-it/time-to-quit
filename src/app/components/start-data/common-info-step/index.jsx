import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setStartDataAC } from '../../../../actions';

import './style.scss';

class CommonInfoStep extends Component {
  handleChange = (event) => {
    const { setStartData } = this.props;
    setStartData(event);
  };

  render() {
    const { cigarettesInPack, cigarettesInDay, price } = this.props;
    return (
      <div className="cigarettes-info-step">
        <h3>CommonInfoStep</h3>
        <div>
          <label htmlFor="cigarettesInPack">
            Сигарет в пачке:
            {cigarettesInPack}
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

        <div>
          <label htmlFor="cigarettesInDay">
            Выкуриваю в день:
            {cigarettesInDay}
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
        <div>
          <label htmlFor="price">
            Стоимость пачки:
            {price}
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
