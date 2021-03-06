import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Normalize } from 'styled-normalize';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { configureStore, history } from './redux/store';
import rootSaga from './redux/rootSaga';

const { store, sagaMiddleware } = configureStore();
sagaMiddleware.run(rootSaga);

const Root = () => {
  return (
    <Fragment>
      <Normalize />
      <Provider store={store}>
        <App history={history} />
      </Provider>
    </Fragment>
  )
};

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
