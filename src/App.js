import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import styles from './pages/HomePage/HomePage.module.scss';
import HomePage from './pages/HomePage';
import ComponentsPage from './pages/ComponentsPage';
import NotFound from './components/NotFound';

function App() {
  return (
    <>
      <Router>
        <div className={styles.headerContainer}>
          <div className={styles.pagesContainer}>
            <ul>
              <li>
                <Link to={'/'}>Home</Link>
              </li>
              <li>
                <Link to={'/components'}>Components</Link>
              </li>
            </ul>
          </div>
          <div className={styles.headerTextContainer}>
            <h1 className={styles.headerText}>My Components</h1>
          </div>
        </div>
        <Switch>
          <Route exact path={'/'}>
            <HomePage />
          </Route>
          <Route path={'/components'}>
            <ComponentsPage />
          </Route>
          <Route path={'*'} component={NotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
