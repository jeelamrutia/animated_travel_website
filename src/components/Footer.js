import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
<div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Let's find your Home
        </p>
        
      </section>
    <div class='footer-links'>
        <div className='footer-link-wrapper'>
          
            <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>FAQ</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Questions</Link>
            </div>
            <div class='footer-link-items'>
                <h2>Offices</h2>
                <Link to='/'>United States</Link>
                <Link to='/'>Europe</Link>
                <Link to='/'>Califormia</Link>
            </div>
        
        </div>
    </div>
    <div>
    <Button primary="true" round="true" big="true" to="/contact">
                       Let's Chat...
                   </Button>
    </div>
</div>

    
  );
}

export default Footer; 