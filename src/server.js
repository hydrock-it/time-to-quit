import express from 'express';
import React from 'react';
import path from 'path';
import logger from 'morgan';
import { StaticRouter } from 'react-router';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { create } from './redux';
import getRoutes from './routes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(process.env.NODE_ENV === 'development' ? logger() : () => {});

app.use('/assets', express.static(path.join(__dirname, '/assets')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../dist'));


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
