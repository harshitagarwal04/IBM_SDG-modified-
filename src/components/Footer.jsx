import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter,  faYoutube } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <div className="footer-heading">
            <h1 className='footer-heading-h1'>STAY UPDATED</h1>
            <p className='footer-heading-para'>Sign up to our newsletter and hear about the big ideas and new campaigns, taking place all around the world, that are helping to drive progress towards the Global Goals.</p>
            <h2>Created By Team Developers </h2>
            <div className="icons">
                <a href="https://www.youtube.com/channel/UCRfuAYy7MesZmgOi1Ezy0ng"><FontAwesomeIcon icon={faYoutube} className='fa-face' /></a>
                <a href="https://www.instagram.com/TheGlobalGoals/"><FontAwesomeIcon icon={faInstagram} className='fa-insta' /></a>
                <a href="https://x.com/TheGlobalGoals"><FontAwesomeIcon icon={faTwitter} className='fa-whatapp' /></a>
                <a href="https://www.facebook.com/theglobalgoals"><FontAwesomeIcon icon={faFacebook} className='fa-face' /></a>
            </div>
        </div>
    );
}

export default Footer;