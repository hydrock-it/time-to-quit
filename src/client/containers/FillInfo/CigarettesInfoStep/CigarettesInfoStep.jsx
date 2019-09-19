import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updateUserSmokingDataAC } from '../../../redux/actions/userActions';

import './CigarettesInfoStep.scss';

class CigarettesInfoStep extends Component {
  handleChange = (event) => {
    const { updateUserSmokingData } = this.props;
    const { name, value } = event.target;
    updateUserSmokingData({ [name]: +value });
  };

  render() {
    const { nicotine, tar } = this.props;
    return (
      <div className="uk-container">
        <h3>А что внутри ваших сигарет?</h3>
        <div className="uk-margin uk-text-left">
          <label className="uk-form-label" htmlFor="nicotine">
            Содержит никотина:
            <span>{nicotine}</span>
          </label>
          <input
            className="uk-range"
            name="nicotine"
            type="range"
            min="1"
            max="100"
            step="1"
            defaultValue={nicotine}
            onChange={this.handleChange}
          />
        </div>
        <div className="uk-margin uk-text-left">
          <label className="uk-form-label" htmlFor="tar">
            Содержит смолл:
            <span>{ tar }</span>
          </label>
          <input
            className="uk-range"
            name="tar"
            type="range"
            min="1"
            max="100"
            step="1"
            defaultValue={tar}
            onChange={this.handleChange}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  const { nicotine, tar } = store.user.smokingData;
  return {
    nicotine,
    tar,
  };
};

const mapDispatchToProps = dispatch => ({
  updateUserSmokingData: data => dispatch(updateUserSmokingDataAC(data)),
});

CigarettesInfoStep.propTypes = {
  updateUserSmokingData: PropTypes.func.isRequired,
  nicotine: PropTypes.number,
  tar: PropTypes.number,
};

CigarettesInfoStep.defaultProps = {
  nicotine: 0,
  tar: 0,
};

export default connect(mapStateToProps, mapDispatchToProps)(CigarettesInfoStep);
