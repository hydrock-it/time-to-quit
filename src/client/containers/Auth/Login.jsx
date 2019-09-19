/* eslint-disable react/forbid-prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { loginUserAC } from '../../redux/actions/authActions';
import { styleClasses } from '../../constants/index';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      errors: {},
    };
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }
  }

  onChange = (e) => {
    const { id, value } = e.target;
    this.setState(prevState => ({
      [id]: value,
      errors: {
        ...prevState.errors,
        [id]: '',
      },
    }));
  };

  onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password,
    };
    this.props.loginUser(userData);
  };

  render() {
    const { errors } = this.state;

    return (
      <div className="container" autoCapitalize="off" onSubmit={this.onSubmit}>
        <form className="uk-form-stacked uk-position-center">
          <fieldset className="uk-fieldset">
            <legend className="uk-legend uk-text-center">Вход</legend>
            <div className="uk-margin">
              <label className="uk-form-label" htmlFor="form-stacked-text">E-mail:</label>
              <div className="uk-form-controls">
                <div className="uk-inline">
                  <span className="uk-form-icon" uk-icon="icon: mail" />
                  <input
                    className={classnames(styleClasses.INPUT, { 'uk-form-danger': errors.email })}
                    id="email"
                    name="email"
                    type="email"
                    placeholder="e-mail"
                    onChange={this.onChange}
                    value={this.state.email}
                    error={errors.email}
                  />
                </div>
                <br />
                <span className="uk-text-warning uk-text-small">{errors.email}</span>
              </div>
            </div>
            <div className="uk-margin">
              <label className="uk-form-label" htmlFor="password">Пароль:</label>
              <div className="uk-form-controls">
                <div className="uk-inline">
                  <span className="uk-form-icon" uk-icon="icon: lock" />
                  <input
                    className={classnames(styleClasses.INPUT, { 'uk-form-danger': errors.password })}
                    id="password"
                    name="password"
                    type="password"
                    placeholder=""
                    onChange={this.onChange}
                    value={this.state.password}
                    error={errors.password}
                  />
                </div>
                <br />
                <span className="uk-alert-danger">{errors.password}</span>
              </div>
            </div>
            <div className="uk-margin-medium-top uk-text-center">
              <div className="uk-form-controls uk-width-medium uk-width-auto@s">
                <button type="submit" className={styleClasses.BUTTON}>ВХОД</button>
                <p>
                  Если у вас нет учетной записи
                  <br />
                  <Link to="/signup"><button type="button" className={styleClasses.BUTTON_TEXT}>Регистрация</button></Link>
                </p>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  loginUser: data => dispatch(loginUserAC(data)),
});

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object,
  history: PropTypes.object.isRequired,
};

Login.defaultProps = {
  errors: {},
};


const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(Login));
