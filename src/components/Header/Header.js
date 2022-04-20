import React from 'react';
import classes from './Header.module.css'
import clsx from "clsx"

import logo from '../../assets/images/Bella Olonje logo 111 1.png'
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <header className={clsx(classes.header, 'container mx-auto grid grid-cols-12')}>
      <div className={clsx('col-span-3')}>
        <Link to={'/'}><img src={logo} alt=""/></Link>
      </div>
      <div className={clsx('col-span-6 ')}>
        <nav className={clsx('flex justify-around', classes.navbar)}>
          <Link to={'/'}>Home</Link>
          <Link to={'/'}>Menu</Link>
          <Link to={'/'}>Faq</Link>
          <Link to={'/'}>ContactUs</Link>
        </nav>
      </div>
      <div className={clsx('col-span-3 flex justify-around', classes.navbar)}>
        <Link to={'/signIn'}><span className={clsx(classes.authButton)}>Sign In</span></Link>
        <Link to={'/signUp'}><span className={clsx(classes.regButton)}>Sign Up</span></Link>
      </div>
    </header>
  );
};

export default Header;
