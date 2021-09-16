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
                <a href="https://www.linkedin.com/in/aiden-jang-50bb9914b/"><FontAwesomeIcon icon={fabLinkedinIn} /></a>
                <a href="https://github.com/skylineciel"><FontAwesomeIcon icon={fabGithub} /></a>
            </div>
        </footer>
    )
};

export default Footer;