import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { styleClasses } from '../../constants/index';
import './App.scss';

class App extends Component {
  handler = () => {};

  render() {
    return (
      <div className="uk-container">
        <div className="uk-position-center uk-column-1-2@m">
          <div className="uk-padding">
            <h1 className="uk-text-bold uk-text-uppercase uk-text-center uk-heading-medium">
              Time to Quit!
            </h1>
            <h2 className="uk-text-center">
              Вы хотите бросить курить?
            </h2>
          </div>
          <div className="uk-padding">
            <div className="uk-text-lead  uk-text-center uk-text-left@m">
              Вы впервые в нашем приложении?
              <br />
              <div className="uk-margin-small uk-text-center uk-text-left@m">
                <Link to="/signup"><button type="button" className={styleClasses.BUTTON_DANGER}>Регистрация</button></Link>
              </div>
            </div>
            <div className="uk-text-lead uk-text-center uk-text-left@m">
              Или если у вас уже есть аккаунт
              <br />
              <div className="uk-margin-small uk-text-center uk-text-left@m">
                <Link to="/login"><button type="button" className={styleClasses.BUTTON}>Войти</button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
