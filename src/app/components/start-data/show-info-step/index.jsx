import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './style.scss';

const ShowInfoStep = (props) => {
  const {
    dateOfTerminated, cigarettesInPack, cigarettesInDay, price, nicotine, tar,
  } = props;
  return (
    <div className="show-info-step">
      <h3>ShowInfoStep</h3>
      <ul>
        <li>
          Date of treminated:
          { dateOfTerminated }
        </li>
        <li>
          Cigarettes in pack:
          { cigarettesInPack }
        </li>
        <li>
          Cigarettes in day:
          { cigarettesInDay}
        </li>
        <li>
          Price for pack:
          { price }
        </li>
        <li>
          Nicotine:
          { nicotine }
        </li>
        <li>
          Tar:
          { tar }
        </li>
      </ul>
    </div>
  );
};

const mapStateToProps = store => ({
  dateOfTerminated: store.smokingData.dateOfTerminated,
  cigarettesInPack: store.smokingData.cigarettesInPack,
  cigarettesInDay: store.smokingData.cigarettesInDay,
  price: store.smokingData.price,
  nicotine: store.smokingData.nicotine,
  tar: store.smokingData.tar,
});

ShowInfoStep.propTypes = {
  dateOfTerminated: PropTypes.string,
  cigarettesInPack: PropTypes.number,
  cigarettesInDay: PropTypes.number,
  price: PropTypes.number,
  nicotine: PropTypes.number,
  tar: PropTypes.number,
};

ShowInfoStep.defaultProps = {
  dateOfTerminated: '',
  cigarettesInPack: 20,
  cigarettesInDay: 0,
  price: 0,
  nicotine: 0,
  tar: 0,
};

export default connect(mapStateToProps)(ShowInfoStep);
