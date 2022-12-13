import React from 'react';
import './Footer.scss';

function Footer() {
  return (
    <div className='app-footer'>
      <div className='footer-links'>
        <span className='link-text'> Why LIGHT STUDIO?</span>
        <span className='footer-link-separator'>|</span>
        <span className='link-text'> Help Center</span>
        <span className='footer-link-separator'>|</span>
        <span className='link-text'>Contact us</span>
        <span className='footer-link-separator'>|</span>
        <span className='link-text'> Company</span>
        <span className='footer-link-separator'>|</span>
        <span className='link-text'> Terms {'&'} Conditions</span>
        <span className='footer-link-separator'>|</span>
        <span className='link-text'> Privacy Policy</span>
      </div>
      <div className='footer-copyright-text'>
        Copyright © {new Date().getFullYear()} Light Studio. All rights
        reserved.
      </div>
      <div className='footer-social-links'>
        <div className='social-media-links'>
          {/* <Facebook fontSize='large' />
          <Instagram fontSize='large' />
          <Twitter fontSize='large' />
          <YouTube fontSize='large' /> */}
        </div>
        <div className='social-app-links'>
          <img
            src='https://starzplay-img-prod-ssl.akamaized.net/prd-peg-data/default/images/store-apple.svg'
            alt='app-stor-link'
          />
          <img
            src='https://starzplay-img-prod-ssl.akamaized.net/prd-peg-data/default/images/store-googleplay.svg'
            alt='playstore-link'
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
