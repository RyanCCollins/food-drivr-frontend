import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames/bind';

const Footer = () => {
  const footerClass = classNames({
    footer: true,
    'text-center': true,
    'text-yellow': window.location.pathname === '/donation' || window.location.pathname === '/profile',
    'text-white': window.location.pathname !== '/donation' && window.location.pathname !== '/profile'
  });
  return (
    <footer className={footerClass}>
      <p>Made with ♥ by
        <Link to="http://hacksmiths.io">
          {' Team Hacksmiths'}
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
