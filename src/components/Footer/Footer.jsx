import React from 'react';
import { useLocation } from 'react-router-dom';
import './Footer.scss';

const EXCEPTION_PATH = ['/', '/signup'];

const Footer = () => {
  const { pathname } = useLocation();
  const isExceptionPath = EXCEPTION_PATH.some(path => path === pathname);

  if (isExceptionPath) return null;

  return <div className="footerContainer" />;
};

export default Footer;
