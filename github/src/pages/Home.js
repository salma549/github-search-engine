import React, { useState } from 'react';
import Header from '../components/Header';


const Home = () => {
  const [userData, setUserData] = useState(null);

  const fetchGitHubUser = async (username) => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.error('Error fetching GitHub user:', error);
    }
  };

  return (
    <div>
      <Header onSearch={fetchGitHubUser} />
      {userData && (
        <div className="mt-10 p-4 bg-gradient-to-r from-purple-400 to-pink-400 text-white rounded-md w-80 md:w-1/2 lg:w-1/3 mx-auto">
          <img src={userData.avatar_url} alt="Avatar" className="rounded-full w-32 h-32 mx-auto" />
          <h2 className="text-2xl text-center mt-4">{userData.name}</h2>
          <p className="text-center mt-2">@{userData.login}</p>
          <p className="text-center mt-2">{userData.bio}</p>
          <div className="text-center mt-4">
            <a href={userData.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-800">
              View Profile
            </a>
          </div>
        </div>
      )}
    
    </div>
  );
};

export default Home;