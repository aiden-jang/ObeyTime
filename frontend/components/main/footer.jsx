import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faLinkedinIn as fabLinkedinIn,
    faGithub as fabGithub
} from '@fortawesome/free-brands-svg-icons';
import {
    faWindowMaximize as farWindowMaximize
} from '@fortawesome/free-regular-svg-icons';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <a href="https://www.linkedin.com/in/aidenjang/" target="_blank"><FontAwesomeIcon icon={fabLinkedinIn} /></a>
                <a href="https://github.com/aiden-jang/ObeyTime" target="_blank"><FontAwesomeIcon icon={fabGithub} /></a>
                <a href="https://aiden-jang.github.io/" target="_blank"><FontAwesomeIcon icon={farWindowMaximize} /></a>
            </div>
        </footer>
    )
};

export default Footer;