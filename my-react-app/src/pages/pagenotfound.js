// i filen NotFoundPage.js inom mappen pages
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

import '../css/notFound.css';

export const NotFoundPage = () => {
  const navigate = useNavigate();

  // Function to handle navigation to the home page
  const navigateHome = () => {
    navigate('/');
  };

  return (
	<div className="not-found-container">
	  <div className="not-found-content">
		<h1>404</h1>
		<h2>Page not found</h2>
		<button onClick={navigateHome}>
		  Go to home page
		</button>
	  </div>
	</div>
  );
}
