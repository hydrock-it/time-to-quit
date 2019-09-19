/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Info } from '../../components';
import { logoutUserAC } from '../../redux/actions/authActions';
import { styleClasses } from '../../constants/index';
import { getNonSmokingInfo } from '../../utils/smokingInfo';

import './Dashboard.scss';

class Dashboard extends Component {
  onClick = () => this.props.logoutUser();

  renderInfo = () => {
    const { user } = this.props;
    if (!user.isNewUser) {
      return <Info data={getNonSmokingInfo(user.smokingData)} />;
    }
    return (
      <Link to="/fillinfo">
        <button
          type="button"
          className={styleClasses.BUTTON_TEXT}
        >
          Заполнить информацию
        </button>
      </Link>
    );
  }

  render() {
    return (
      <div className="uk-position-center uk-text-center">
        { this.renderInfo() }
        <br />
        <Link to="/">
          <button
            type="button"
            className={styleClasses.BUTTON_TEXT}
            onClick={this.onClick}
          >
            Выход
          </button>
        </Link>
      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  user: PropTypes.objectOf(Object),
};

Dashboard.defaultProps = {
  user: {},
};

const mapDispatchToProps = dispatch => ({
  logoutUser: data => dispatch(logoutUserAC(data)),
});

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
  user: state.user,
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
