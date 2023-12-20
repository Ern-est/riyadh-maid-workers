// BreakingNewsBanner.js

import React, { useState, useEffect } from 'react';
import newsData from './newsData';
import './Break.css';

const BreakingNewsBanner = () => {
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentNewsIndex((prevIndex) => (prevIndex + 1) % newsData.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="breaking-news-card">
      <div className="breaking-news-container">
        {newsData.map((item, index) => (
          <div key={index} className={`news-item ${index === currentNewsIndex ? 'visible' : 'hidden'}`}>
            {item}
          </div>
          
        ))}
      </div>
      <h2 className='break'>BREAKING NEWS</h2>
      
    </div>
  );
};

export default BreakingNewsBanner;
