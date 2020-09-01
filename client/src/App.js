import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import store from './store/index';
import NavBar from './components/navbar/Navbar';
import Companies from './components/Companies/companies'

const App = () => (
  <Provider store={store}>
    <div className="App">
      <Fragment>
          <NavBar />
          <Companies />
      </Fragment>
    </div>
  </Provider>
);

export default App;
