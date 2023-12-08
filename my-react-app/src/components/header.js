import React from 'react';
import logo from '../images/logo.webp';
import { Navigate } from './nav';
import '../css/header.css';

export const Header = () => (
  <div className="mainHeader">
    <header className="header">
      <section className="logo">
      <img src={logo} className="App-logo" alt="logo" />
      </section>
      <nav className="Navigate" aria-label="Main navigation">
          <Navigate />
        </nav>
    </header>
  </div>
);