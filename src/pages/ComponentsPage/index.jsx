import React from 'react'
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom'
import styles from './../../pages/HomePage/HomePage.module.scss'
import Calendar from '../../components/Calendar'
import LoginForm from '../../components/LoginForm'
import NotFound from '../../components/NotFound'
import UsersListHW from '../../components/UsersListHW'

function ComponentsPage () {
  const { path, url } = useRouteMatch()

  return (
    <div className={styles.componentsPage}>
      <div className={styles.componentsContainer}>
        <nav className={styles.componentsPageContainer}>
          <div className={styles.textContainer}>
            <div>
              <Link to={`${url}/usersList`} className={styles.text}>
                Users List
              </Link>
            </div>
            <div>
              <Link to={`${url}/loginForm`} className={styles.text}>
                Login Form
              </Link>
            </div>
            <div>
              <Link to={`${url}/calendar`} className={styles.text}>
                Calendar
              </Link>
            </div>
          </div>
          <div className={styles.componentsContainerText}>
            <h1 className={styles.componentsText}>Click on any project</h1>
          </div>
        </nav>
      </div>
      <Switch>
        <Route path={`${path}/usersList`}>
          <UsersListHW />
        </Route>
        <Route path={`${path}/loginForm`}>
          <LoginForm />
        </Route>
        <Route path={`${path}/calendar`}>
          <Calendar />
        </Route>
        <Route path={`${path}/*`} component={NotFound} />
      </Switch>
    </div>
  )
}

export default ComponentsPage
