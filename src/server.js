import express from 'express';
import React from 'react';
import path from 'path';
import logger from 'morgan';
import mongoose from 'mongoose';
import { StaticRouter } from 'react-router';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import bodyParser from 'body-parser';
import passport from 'passport';
import users from './routes/api/users';
import { create } from './client/redux';
import getRoutes from './client/routes';

const app = express();
const db = require('../config/db').mongoURI;

const PORT = process.env.PORT || 3000;

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log('MongoDB successfully connected'))
  .catch(err => console.log(err));

app.use(process.env.NODE_ENV === 'development' ? logger() : () => {});

app.use(
  bodyParser.urlencoded({
    extended: false,
  }),
);

app.use('/assets', express.static(path.join(__dirname, '/assets')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../dist'));

app.use(bodyParser.json());
app.use(passport.initialize());

require('../config/passport')(passport);

app.use('/api/users', users(express.Router()));

app.get('*', (req, res) => {
  const context = {};
  const store = create();

  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        { getRoutes(store) }
      </StaticRouter>
    </Provider>,
  );

  res.render('index', { content });
});

app.listen(PORT, () => {
  console.log(`Server started on: ${PORT}`);
});
