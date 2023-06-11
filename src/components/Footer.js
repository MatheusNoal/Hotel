import React from 'react';
import LogoWhite from '../assets/logo-white.svg';

export default function Footer() {
  return (
    <footer className="bg-primary py-10">
      <div className="container mx-auto text-white flex justify-between">
        <a href="/">
          <img src={LogoWhite} alt="" />
        </a>
        Copyright &copy; 2023. All rights reserved.
      </div>
    </footer>
  );
}