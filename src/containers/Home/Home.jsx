import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Info } from '../../components';
import './Home.scss';

class Home extends Component {
  getNonSmokingInfo = () => {
    const { smokingData } = this.props;
    const date1 = new Date(smokingData.dateOfTerminated);
    const date2 = new Date();
    const dayWithoutCigarettes = Math.ceil(
      Math.abs(date2.getTime() - date1.getTime()) / (1000 * 3600 * 24),
    );
    const cigarettesInPack = Number(smokingData.cigarettesInPack);
    const cigarettesInDay = Number(smokingData.cigarettesInDay);
    const price = Number(smokingData.price);

    return {
      savedMoney: Math.trunc((cigarettesInDay / cigarettesInPack) + 1)
      * price * dayWithoutCigarettes,
      culcNotSmoked: cigarettesInDay * dayWithoutCigarettes,
      culcDaysWithoutCigarettes: dayWithoutCigarettes,
    };
  }

  render() {
    return (
      <div className="home center">
        <Info data={this.getNonSmokingInfo()} />
      </div>
    );
  }
}

const mapStateToProps = store => ({
  smokingData: store.smokingData,
  auth: store.auth,
});

Home.propTypes = {
  smokingData: PropTypes.objectOf(Object),
};

Home.defaultProps = {
  smokingData: {},
};

export default connect(mapStateToProps)(Home);
