import React from 'react';
import { Route } from 'react-router-dom';
import LogInFormContainer from '../containers/LogInFormContainer';
import { Banner } from '../elements';
import './styles/WelcomePage.css';

const WelcomePage = (props) => {
  return (
    <section className="welcome-container">
      <nav className="welcome-nav">
        About
      </nav>
      <main className="welcome-main">
        <Banner />
        <section className="welcome-login-wrapper">
          <Route path="/login" component={LogInFormContainer} />
          <Route path="/signup" component={LogInFormContainer} />
        </section>
      </main>
    </section>
  )
}

export default WelcomePage;
