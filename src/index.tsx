import React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

// App styles.
import 'font-awesome/css/font-awesome.css';
import './styles.scss';

// Routes.
// import Container from './Container/ContainerScene';
import Container from './Container/ContainerScene';

// Redux.
import { configureStore } from './Redux/setupStore';
const store = configureStore();

ReactDOM.render(
  <Provider store={store as any}>
    <Router>
      <Container />
    </Router>
  </Provider >, document.getElementById('root'),
);
