import React, { useState, useEffect } from 'react';
import requestAPIs from '../api/reqAPIs';

import '../css/Home.css';

const Home = function (props) {
  const [homeDetails, setHomeDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    requestAPIs.home().then((details) => {
      setHomeDetails(details);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  
  return (
    <div className="home">
      <h1>{homeDetails.title}</h1>
      <p>{homeDetails.content}</p>
    </div>
  );
};

export default Home;
