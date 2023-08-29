import React from 'react';
import { useLocation } from 'react-router-dom';
import './Footer.scss';

const Footer = () => {
  const { pathname } = useLocation();
  const EXCEPTION_PATH = ['/', '/signup'];
  const isExceptionPath = EXCEPTION_PATH.some(path => path === pathname);

  if (isExceptionPath) return null;

  return <>나는 footer</>;
};

export default Footer;
