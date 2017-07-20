import React from 'react';
import { Route } from 'react-router-dom';
import LoginForm from './LoginForm';
import { Banner } from '../elements';
import './styles/WelcomePage.css';

const WelcomePage = () => {
  return (
    <section className="welcome-container">
      <nav className="welcome-nav">
        About
      </nav>
      <main className="welcome-main">
        <Banner />
        <section className="welcome-login-wrapper">
          <Route path="/login" component={LoginForm} />
          <Route path="/signup" component={LoginForm} />
        </section>
      </main>
    </section>
  )
}

export default WelcomePage;
