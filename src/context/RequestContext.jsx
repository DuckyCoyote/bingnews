import { useState, useEffect, createContext } from "react";
import axios from "axios";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [notices, setNotices] = useState([]);
  const [category, setCategory] = useState("");
  const apiKey = import.meta.env.VITE_API_KEY;
  const api = `https://api.bing.microsoft.com/v7.0/news/?category=${category}`;

  const updateCategory = (newCategory) => {
    setCategory(newCategory);
  };

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(api, {
          headers: {
            "Ocp-Apim-Subscription-Key": apiKey,
          },
        });
        const data = response.data; // Convertir la respuesta a JSON
        setNotices(data.value);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };
    fetchNews();
  }, [category]);

  return (
    <DataContext.Provider value={{ notices, category, updateCategory }}>
      {children}
    </DataContext.Provider>
  );
};
