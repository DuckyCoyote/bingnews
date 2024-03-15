import { useState, useEffect } from "react";
import axios from "axios";

function useNewsRequest(newCategory) {
  const [notices, setNotices] = useState([]);
  const [category, setCategory] = useState("business");
  const apiKey = import.meta.env.VITE_API_KEY;

  const api = `https://api.bing.microsoft.com/v7.0/news/?category=${category}&count=50&mkt=en-us`;

  const fetchNews = async () => {
    const response = await axios.get(api, {
      headers: {
        "Ocp-Apim-Subscription-Key": apiKey,
      },
    });
    const data = response.data;
    setNotices(data.value);
  };

  useEffect(() => {
    fetchNews();
  }, [category]);

  return notices;
}

export default useNewsRequest;
