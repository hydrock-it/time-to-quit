import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { formatDate } from '../../../utils/format';
import { styleClasses } from '../../../constants';
import { updateUserSmokingDataAC } from '../../../redux/actions/userActions';


import './TermDateStep.scss';


class TermDateStep extends Component {
  onClick = () => {
    const { updateUserSmokingData } = this.props;
    updateUserSmokingData({ dateOfTerminated: new Date().toJSON() });
  }

  render() {
    const { dateOfTerminated } = this.props;
    const date = formatDate(dateOfTerminated);
    return (
      <div className="uk-container">
        <h3>Когда вы бросили курить?</h3>
        <button type="button" onClick={this.onClick} className={styleClasses.BUTTON}>Сейчас!</button>
        <div className="uk-margin uk-heading-medium">{ date }</div>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  dateOfTerminated: store.user.smokingData.dateOfTerminated,
});

const mapDispatchToProps = dispatch => ({
  updateUserSmokingData: payload => dispatch(updateUserSmokingDataAC(payload)),
});

TermDateStep.propTypes = {
  dateOfTerminated: PropTypes.string,
  updateUserSmokingData: PropTypes.func.isRequired,
};

TermDateStep.defaultProps = {
  dateOfTerminated: '',
};

export default connect(mapStateToProps, mapDispatchToProps)(TermDateStep);
