import React from 'react'
import { NavLink } from 'react-router-dom'
import '../css/footer.css'
import instagram from '../images/instagram.svg'
import linkedin from '../images/linkedin-in.svg'

export const Footer = () => {
  return (
    <footer className="footerGrid">
      <div className="contact">
        <div className="mail">
          <p>Contact Us</p>
          <p>info@mytelescope.io</p>
          <p className="copyRight">© EllaTech 2023</p>
        </div>
        <div className="social">
          <a href="https://www.linkedin.com/in/irupepozograviz/" target="_blank" rel="noopener noreferrer" aria-label="Follow us on LinkedIn">
            <img src={linkedin} alt="Follow us on LinkedIn" className="social-icon" />
          </a>
          <a href="https://www.instagram.com/ellatech.se" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Instagram">
            <img src={instagram} alt="Follow us on Instagram" className="social-icon" />
          </a>
        </div>
      </div>
      <div className="menuFooter">
        <nav aria-label="Footer navigation">
          <ul>
            <li><NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Hem</NavLink></li>
            <li><NavLink to="/webbdesign" className={({ isActive }) => (isActive ? 'active' : '')}>Webbdesign</NavLink></li>
            <li><NavLink to="/projektledning" className={({ isActive }) => (isActive ? 'active' : '')}>Projektledning</NavLink></li>
            <li><NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>Om EllaTech</NavLink></li>
            <li><NavLink to="/integritetspolicy" className={({ isActive }) => (isActive ? 'active' : '')}>Integritetspolicy</NavLink></li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}