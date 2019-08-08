import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setStartDataAC } from '../../../redux/actions';

import './CigarettesInfoStep.scss';

class CigarettesInfoStep extends Component {
  handleChange = (event) => {
    const { setStartData } = this.props;
    setStartData(event);
  };

  render() {
    const { nicotine, tar } = this.props;
    return (
      <div className="cigarettes-info-step">
        <h3>А что внутри ваших сигарет?</h3>
        <div className="info-container">
          <label htmlFor="nicotine">
            Содержит никотина:
            <span className="info-value">{ nicotine }</span>
          </label>
          <input
            name="nicotine"
            type="range"
            min="1"
            max="100"
            step="1"
            defaultValue={nicotine}
            onChange={this.handleChange}
          />
        </div>
        <div className="info-container">
          <label htmlFor="tar">
            Содержит смолл:
            <span className="info-value">{ tar }</span>
          </label>
          <input
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
  const { nicotine, tar } = store.smokingData;
  return {
    nicotine,
    tar,
  };
};

const mapDispatchToProps = dispatch => ({
  setStartData: event => dispatch(setStartDataAC(event)),
});

CigarettesInfoStep.propTypes = {
  setStartData: PropTypes.func,
  nicotine: PropTypes.number,
  tar: PropTypes.number,
};

CigarettesInfoStep.defaultProps = {
  setStartData: () => {},
  nicotine: 0,
  tar: 0,
};

export default connect(mapStateToProps, mapDispatchToProps)(CigarettesInfoStep);
