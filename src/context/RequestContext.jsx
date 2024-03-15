import { useState, useEffect, createContext } from "react";
import axios from "axios";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [notices, setNotices] = useState([]);
  const [category, setCategory] = useState("");
  const apiKey = import.meta.env.VITE_API_KEY;
  const api = `https://api.bing.microsoft.com/v7.0/news/?category=${category}&count=50&mkt=en-us`;

  const updateCategory = (newCategory) => {
    setCategory(newCategory);
  };

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(api, {
          method: "get",
          headers: {
            "Ocp-Apim-Subscription-Key": apiKey,
          },
        });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json(); // Convertir la respuesta a JSON
        setNotices(data.value);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, [category]);

  console.log(notices);
  return (
    <DataContext.Provider value={{ notices, category, updateCategory }}>
      {children}
    </DataContext.Provider>
  );
};
