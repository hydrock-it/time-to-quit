/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { updateUserAC } from '../../../redux/actions/userActions';
import { formatDate } from '../../../utils/format';
import { styleClasses } from '../../../constants';
import { RESET_STEP } from '../../../redux/actions/types';

import './ShowInfoStep.scss';

class ShowInfoStep extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    const { updateUser } = this.props;
    updateUser({ isNewUser: false });
  }

  onClick() {
    const {
      smokingData, id, isNewUser, history, resetStep,
    } = this.props;
    const newSmokingData = { smokingData, id, isNewUser };
    axios
      .post('/api/users/update', newSmokingData)
      .then(() => {
        resetStep();
        history.push('/');
      })
      .catch((err) => { console.log(err); });
  }

  render() {
    const {
      dateOfTerminated, cigarettesInPack, cigarettesInDay, price, nicotine, tar,
    } = this.props;

    return (
      <div className="uk-container uk-block uk-flex uk-flex-column">
        <h3>Все верно?</h3>
        <div className="uk-inline">
          <div className="result-info__desc">
            День когда вы бросили курить:
          </div>
          <div className="result-info__value info-value">
            { formatDate(dateOfTerminated) }
          </div>
        </div>
        <div className="uk-inline">
          <div className="result-info__desc">
            Количество сигарет в пачке:
          </div>
          <div className="result-info__value info-value">
            { cigarettesInPack }
          </div>
        </div>
        <div className="uk-inline">
          <div className="result-info__desc">
            Количество выкуренных сигарет в день:
          </div>
          <div className="result-info__value info-value">
            { cigarettesInDay }
          </div>
        </div>
        <div className="uk-inline">
          <div className="result-info__desc">
            Цена за пачку:
          </div>
          <div className="result-info__value info-value">
            { price }
          </div>
        </div>
        <div className="uk-inline">
          <div className="result-info__desc">
            Содержание никотина:
          </div>
          <div className="result-info__value info-value">
            { nicotine }
          </div>
        </div>
        <div className="uk-inline">
          <div className="result-info__desc">
            Содержание смол:
          </div>
          <div className="result-info__value info-value">
            { tar }
          </div>
        </div>
        <button type="button" className={styleClasses.BUTTON} onClick={this.onClick}>Завершить!</button>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  id: store.user.id,
  isNewUser: store.user.isNewUser,
  smokingData: store.user.smokingData,
  dateOfTerminated: store.user.smokingData.dateOfTerminated,
  cigarettesInPack: store.user.smokingData.cigarettesInPack,
  cigarettesInDay: store.user.smokingData.cigarettesInDay,
  price: store.user.smokingData.price,
  nicotine: store.user.smokingData.nicotine,
  tar: store.user.smokingData.tar,
});

ShowInfoStep.propTypes = {
  dateOfTerminated: PropTypes.string,
  cigarettesInPack: PropTypes.number,
  cigarettesInDay: PropTypes.number,
  price: PropTypes.number,
  nicotine: PropTypes.number,
  tar: PropTypes.number,
  updateUser: PropTypes.func.isRequired,
  smokingData: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  isNewUser: PropTypes.bool.isRequired,
  history: PropTypes.object.isRequired,
  resetStep: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  updateUser: data => dispatch(updateUserAC(data)),
  resetStep: () => dispatch({ type: RESET_STEP }),
});

ShowInfoStep.defaultProps = {
  dateOfTerminated: '',
  cigarettesInPack: 20,
  cigarettesInDay: 0,
  price: 0,
  nicotine: 0,
  tar: 0,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ShowInfoStep));
