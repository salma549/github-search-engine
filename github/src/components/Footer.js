import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="flex flex-col items-center justify-center space-y-2 md:flex-row md:space-y-0 md:space-x-4">
        <p className="text-center md:text-left text-sm sm:text-base">
          © Copyright 
          <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent font-bold">
            CodeForIndia.com
          </span> 
          All Rights Reserved <span className='text-pink-400'>2024</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;