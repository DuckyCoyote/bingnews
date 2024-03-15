import { useState, useEffect } from 'react';
import axios from 'axios';

import Card from "../components/card/Card.component.jsx";


import "./index.css";

const LandingPage = () => {

  const [notices, setNotices] = useState([]);
  const [category, setCategory] = useState('business');
  const api = `https://api.bing.microsoft.com/v7.0/news/?category=${category}&count=50&mkt=en-us`;
  const apiKey = '6b55db0244f24a4f8f0823139d95c95d';

  const fetchNews = async () => {
    const request = await axios.get(api, {
      headers: {
        "Ocp-Apim-Subscription-Key": apiKey,
      }
    });
    const data = request.data;
    setNotices(data.value);
  }

  useEffect(() => {
    fetchNews();
  }, [category]);

  const handleClick = () => {
    setCategory('sports');
  };

  return (
    <div>
      <button onClick={handleClick} children="Click" />
      <div className="notices-section">
        {notices.map((notice) => {
          return <Card key={notice.name} notice={notice} />;
        })}
      </div>
    </div>
  );
};

export default LandingPage;
