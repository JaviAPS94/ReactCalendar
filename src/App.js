import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import Header from './components/layout/header';
import Footer from './components/layout/footer';
import { RemindersCalendar } from './pages';
import './App.css';
import 'react-datepicker/dist/react-datepicker.css';

const App = ({ store }) => (
  <Provider store={store}>
    <Router>
      <div className='App'>
        <Header />
        <div className='content'>
          <Route path='/calendar' component={RemindersCalendar} />
        </div>
        <Footer />
      </div>
    </Router>
  </Provider>
);

App.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  store: PropTypes.any.isRequired,
};

export default App;
