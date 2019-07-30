import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { setWizardCompleteAC } from '../../../redux/actions';
import { formatDate } from '../../../utils/format';

import './ShowInfoStep.scss';

class ShowInfoStep extends Component {
  componentDidMount() {
    const { setWizardComplete } = this.props;
    setWizardComplete();
  }

  render() {
    const {
      dateOfTerminated, cigarettesInPack, cigarettesInDay, price, nicotine, tar,
    } = this.props;

    return (
      <div className="show-info-step">
        <h3>Все верно?</h3>
        <div className="result-info">
          <div className="result-info__desc">
            День когда вы бросили курить:
          </div>
          <div className="result-info__value info-value">
            { formatDate(dateOfTerminated) }
          </div>
        </div>
        <div className="result-info">
          <div className="result-info__desc">
            Количество сигарет в пачке:
          </div>
          <div className="result-info__value info-value">
            { cigarettesInPack }
          </div>
        </div>
        <div className="result-info">
          <div className="result-info__desc">
            Количество выкуренных сигарет в день:
          </div>
          <div className="result-info__value info-value">
            { cigarettesInDay }
          </div>
        </div>
        <div className="result-info">
          <div className="result-info__desc">
            Цена за пачку:
          </div>
          <div className="result-info__value info-value">
            { price }
          </div>
        </div>
        <div className="result-info">
          <div className="result-info__desc">
            Содержание никотина:
          </div>
          <div className="result-info__value info-value">
            { nicotine }
          </div>
        </div>
        <div className="result-info">
          <div className="result-info__desc">
            Содержание смол:
          </div>
          <div className="result-info__value info-value">
            { tar }
          </div>
        </div>
        <Link to="/">
          <button type="button">Завершить!</button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  dateOfTerminated: store.smokingData.dateOfTerminated,
  cigarettesInPack: store.smokingData.cigarettesInPack,
  cigarettesInDay: store.smokingData.cigarettesInDay,
  price: store.smokingData.price,
  nicotine: store.smokingData.nicotine,
  tar: store.smokingData.tar,
  loggingIn: store.auth.loggingIn,
});

const mapDispatchToProps = dispatch => ({
  setWizardComplete: () => dispatch(setWizardCompleteAC()),
});

ShowInfoStep.propTypes = {
  dateOfTerminated: PropTypes.string,
  cigarettesInPack: PropTypes.number,
  cigarettesInDay: PropTypes.number,
  price: PropTypes.number,
  nicotine: PropTypes.number,
  tar: PropTypes.number,
  setWizardComplete: PropTypes.func,
};

ShowInfoStep.defaultProps = {
  dateOfTerminated: '',
  cigarettesInPack: 20,
  cigarettesInDay: 0,
  price: 0,
  nicotine: 0,
  tar: 0,
  setWizardComplete: () => {},
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowInfoStep);
