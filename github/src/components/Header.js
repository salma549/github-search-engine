// import React from 'react';

// import github from "../images/github.jpg";
// import logo from "../images/logo.jpg"
// const Header = () => {
//   return (
//     <>
//       <header className="bg-black p-4">
//               <nav className="flex items-center justify-between">
//               <div className="flex items-center space-x-4">
//             <img src={logo} alt="Logo" className="w-10 sm:w-12 md:w-14 lg:w-16 rounded-full" />
     
//           </div>
//           <ul className="flex space-x-7 text-white text-medium sm:text-xl md:text-2xl font-medium font-serif hover:cursor-pointer">
//           <li className=' text-white'>Home</li>
                    
//                     <li className='text-white'>
//                         <a href="https://github.com/salma549" target="_blank" rel="noopener noreferrer">
//                             Github
//                         </a>
//                     </li>
//                     <li className=' text-white'> 
//                         <a href="https://www.linkedin.com/in/salma-sanubar-8a7776251" target="_blank" rel="noopener noreferrer">
//                             Linkedin
//                         </a></li>
//                     <li className=" text-white">
//                     <a href="mailto:salmasanubar786@gmail.com" className="text-white">Mail</a>
//                     </li>
                    
//                     <li className=" text-white">Contact</li>
//           </ul>
//         </nav>

//         <div className="text-center mt-10 sm:mt-20 flex flex-col items-center justify-center w-full">
//           <img src={github} alt="githubLogo" className="h-16 sm:h-20 md:h-24 rounded-full mb-4 sm:mb-6 md:mb-8" />
//           <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-serif text-green-300">Salma Sanubar</h1>
//           <h2 className="text-2xl sm:text-3xl md:text-4xl text-green-300 mt-2 font-bold font-mono">
//             GitHub <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-300 mt-2 space-x-4">Search Engine</span>
//           </h2>
//         </div>

//         <div className="flex flex-col p-4 md:flex-row md:space-x-5 mt-4 w-80 md:w-1/2 lg:w-1/3 mx-auto">
//           <input type="text" placeholder="Search Your Github User here ..." className="p-3 h-10 rounded-md w-full md:w-3/4 bg-gradient-to-r from-purple-300 to-pink-300 placeholder-gray-500 mb-2 md:mb-0" />
//           <input type="text" placeholder="Search user..." className="text-white p-3 h-10 rounded-full w-full md:w-1/4 bg-gradient-to-r from-purple-200 to-pink-200 placeholder-gray-500" />
//         </div>
//       </header>
//     </>
//   );
// }

// export default Header;


import React, { useState } from 'react';

import logo from '../images/logo.jpg';
import github from '../images/github.jpg';


const Header = ({ onSearch }) => {
  const [username, setUsername] = useState('');

  const handleSearch = () => {
    if (username.trim() !== '') {
      onSearch(username);
    }
  };

  return (
    <header className="bg-black p-4">
      <nav className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img src={logo} alt="Logo" className="w-10 sm:w-12 md:w-14 lg:w-16 rounded-full" />
        </div>
        <ul className="flex space-x-7 text-white text-medium sm:text-xl md:text-2xl font-medium font-serif hover:cursor-pointer">
          <li className="text-white">Home</li>
          <li className="text-white">
            <a href="https://github.com/salma549" target="_blank" rel="noopener noreferrer">Github</a>
          </li>
        
          <li className="text-white">
            <a href="https://www.linkedin.com/in/salma-sanubar-8a7776251" target="_blank" rel="noopener noreferrer">Linkedin</a>
          </li>
          <li className="text-white">
            <a href="mailto:salmasanubar786@gmail.com" target="_blank" rel="noopener noreferrer">Mail</a>
          </li>
          <li className="text-white">Contact</li>
        </ul>
      </nav>
      <div className="text-center mt-10 sm:mt-20 flex flex-col items-center justify-center w-full">
        <img src={github} alt="githubLogo" className="h-16 sm:h-20 md:h-24 rounded-full mb-4 sm:mb-6 md:mb-8" />
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-serif text-green-300">Salma Sanubar</h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-green-300 mt-2 font-bold font-mono">
          GitHub <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-300 mt-2 space-x-4">Search Engine</span>
        </h2>
      </div>
      <div className="flex flex-col p-4 md:flex-row md:space-x-5 mt-4 w-80 md:w-1/2 lg:w-1/3 mx-auto">
        <input
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          placeholder="Search Your Github User here ..."
          className="p-3 h-10 rounded-md w-full md:w-3/4 bg-gradient-to-r from-purple-300 to-pink-300 placeholder-gray-500 mb-2 md:mb-0"
        />
        <button
          onClick={handleSearch}
          className="text-white p-3 h-10 rounded-full w-full md:w-1/4 bg-gradient-to-r from-purple-200 to-pink-200"
        >
          Search
        </button>
      </div>
    </header>
  );
};

export default Header;