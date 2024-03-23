import React from 'react';
import logo from '../assets/logo.svg';


const Header = () => {
  return (
    <header className="py-8">
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          {/* logo */}
          <a href="#">
            <span className='text-gradient btn-link text-xl font-bold'>Masraful Zishan</span>
            {/* <img src={logo} alt="logo" /> */}
          </a>
          <button className='btn btn-sm'><a href="www.linkedin.com/in/masraful-zishan"> Work with me</a></button>
        </div>
      </div>
    </header>
  );
};

export default Header;
