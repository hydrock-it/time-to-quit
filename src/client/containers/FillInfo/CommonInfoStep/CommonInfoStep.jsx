import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updateUserSmokingDataAC } from '../../../redux/actions/userActions';

import './CommonInfoStep.scss';

class CommonInfoStep extends Component {
  handleChange = (event) => {
    const { updateUserSmokingData } = this.props;
    const { name, value } = event.target;
    updateUserSmokingData({ [name]: +value });
  };

  render() {
    const { cigarettesInPack, cigarettesInDay, price } = this.props;
    return (
      <div className="uk-container">
        <h3>Немного информации о вашем увлечение</h3>
        <div className="uk-margin uk-text-left">
          <label className="uk-form-label" htmlFor="cigarettesInPack">
            Сигарет в пачке:
            <span>{cigarettesInPack}</span>
          </label>
          <input
            className="uk-range"
            name="cigarettesInPack"
            type="range"
            min="1"
            max="100"
            step="1"
            defaultValue={cigarettesInPack}
            onChange={this.handleChange}
          />
        </div>
        <div className="uk-margin uk-text-left">
          <label className="uk-form-label" htmlFor="cigarettesInDay">
            Сигарет в деньц:
            <span>{cigarettesInDay}</span>
          </label>
          <input
            className="uk-range"
            name="cigarettesInDay"
            type="range"
            min="1"
            max="100"
            step="1"
            defaultValue={cigarettesInDay}
            onChange={this.handleChange}
          />
        </div>
        <div className="uk-margin uk-text-left">
          <label className="uk-form-label" htmlFor="price">
            Стоимость пачки:
            <span>{price}</span>
          </label>
          <input
            className="uk-range"
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
  const { cigarettesInPack, cigarettesInDay, price } = store.user.smokingData;
  return {
    cigarettesInPack,
    cigarettesInDay,
    price,
  };
};

const mapDispatchToProps = dispatch => ({
  updateUserSmokingData: data => dispatch(updateUserSmokingDataAC(data)),
});

CommonInfoStep.propTypes = {
  cigarettesInPack: PropTypes.number.isRequired,
  cigarettesInDay: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  updateUserSmokingData: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(CommonInfoStep);
