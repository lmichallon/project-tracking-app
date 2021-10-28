import { useEffect, useState } from "react";

const baseURL = "https://project-expo-back.herokuapp.com";

const useFetch = (path, options) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const res = await fetch(`${baseURL}${path}`, options);
        const json = await res.json();

        setData(json);
        setIsLoading(false);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, [path, options]);

  return { data, error, isLoading };
};

export default useFetch;
