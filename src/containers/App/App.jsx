import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.scss';

class App extends Component {
  handler = () => {};

  render() {
    return (
      <div className="app">
        <div className="greeting center">
          <h1 className="greeting-title">
            Time to Quit!
          </h1>
          <h2 className="greeting-subtitle">
            Вы хотите бросить курить?
          </h2>
          <div className="greeting-auth">
            <div className="greeting-signup">
              <p>Вы впервые в нашем приложении?</p>
              <Link to="/signup"><button type="button">Регистрация</button></Link>
            </div>
            <div className="greeting-signup">
              <p>Или у вас уже есть аккаунт</p>
              <Link to="/signup"><button type="button">Войти</button></Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
