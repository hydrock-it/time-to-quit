/* eslint-disable react/forbid-prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { registerUserAC } from '../../redux/actions/authActions';
import { styleClasses } from '../../constants/index';


class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      password2: '',
      errors: {},
    };
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/login');
    }
  }

  componentWillReceiveProps(nextProps) {
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
    const {
      name,
      email,
      password,
      password2,
    } = this.state;

    const newUser = {
      name,
      email,
      password,
      password2,
    };
    this.props.registerUser(newUser, this.props.history);
  };

  render() {
    const { errors } = this.state;

    return (
      <div className="container" autoCapitalize="off" noValidate onSubmit={this.onSubmit}>
        <form className="uk-form-stacked uk-position-center">
          <fieldset className="uk-fieldset">
            <legend className="uk-legend uk-text-center">Регистрация</legend>
            <div className="uk-margin">
              <label className="uk-form-label" htmlFor="name">Имя:</label>
              <div className="uk-form-controls">
                <div className="uk-inline">
                  <span className="uk-form-icon" uk-icon="icon: user" />
                  <input
                    className={classnames(styleClasses.INPUT, { 'uk-form-danger': errors.name })}
                    id="name"
                    name="name"
                    type="text"
                    placeholder="имя"
                    onChange={this.onChange}
                    value={this.state.name}
                    error={errors.name}
                  />
                </div>
              </div>
            </div>
            <div className="uk-margin">
              <label className="uk-form-label" htmlFor="email">E-mail:</label>
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
                <span className="uk-text-warning uk-text-small">{errors.password}</span>
              </div>
            </div>
            <div className="uk-margin">
              <label className="uk-form-label" htmlFor="password2">Подтверждение пароля:</label>
              <div className="uk-form-controls">
                <div className="uk-inline">
                  <span className="uk-form-icon" uk-icon="icon: lock" />
                  <input
                    className={classnames(styleClasses.INPUT, { 'uk-form-danger': errors.password2 })}
                    id="password2"
                    namw="password2"
                    type="password"
                    placeholder=""
                    onChange={this.onChange}
                    value={this.state.password2}
                    error={errors.password2}
                  />
                </div>
                <br />
                <span className="uk-text-warning uk-text-small">{errors.password2}</span>
              </div>
            </div>
            <div className="uk-margin-medium-top uk-text-center">
              <div className="uk-form-controls uk-width-medium uk-width-auto@s">
                <button type="submit" className={styleClasses.BUTTON}>Регистрация</button>
                <p>
                  Если у вас уже есть аккаунт, вы можете
                  <br />
                  <Link to="/login"><button type="button" className={styleClasses.BUTTON_TEXT}>Войти</button></Link>
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
  registerUser: (data, history) => dispatch(registerUserAC(data, history)),
});

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
});

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object,
  history: PropTypes.object.isRequired,
};

Register.defaultProps = {
  errors: {},
};


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(Register));
