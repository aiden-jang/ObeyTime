import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedinIn as fabLinkedinIn,
  faGithub as fabGithub
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return(
        <footer className="footer">
            <div className="footer-container">
                <a href=""><FontAwesomeIcon icon={fabLinkedinIn} /></a>
                <a href=""><FontAwesomeIcon icon={fabGithub} /></a>
            </div>
        </footer>
    )
};

export default Footer;