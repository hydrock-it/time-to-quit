import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './style.scss';

class ShowInfoStep extends Component {
  render() {
    const { dateOfTerminated, cigarettesInPack, cigarettesInDay, price, nicotine, tar} = this.props;

    return (
      <div className='show-info-step'>
        <h3>ShowInfoStep</h3>
        <ul>
          <li>Date of treminated: { dateOfTerminated }</li>
          <li>Cigarettes in pack: { cigarettesInPack }</li>
          <li>Cigarettes in day: { cigarettesInDay}</li>
          <li>Price for pack: { price }</li>
          <li>Nicotine: { nicotine }</li>
          <li>Tar: { tar }</li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    dateOfTerminated: store.smokingData.dateOfTerminated,
    cigarettesInPack: store.smokingData.cigarettesInPack,
    cigarettesInDay: store.smokingData.cigarettesInDay,
    price: store.smokingData.price,
    nicotine: store.smokingData.nicotine,
    tar: store.smokingData.tar,
  }
}

ShowInfoStep.propTypes = {
  dateOfTerminated: PropTypes.string,
  cigarettesInPack: PropTypes.number,
  cigarettesInDay: PropTypes.number,
  price: PropTypes.number,
  nicotine: PropTypes.number,
  tar: PropTypes.number,
}

export default connect(mapStateToProps)(ShowInfoStep);
