import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { CacheContext } from "./contexts/CacheProvider";

const useAxios = ({ endpoint, method = "GET", payload = {}, dataname, maxCacheAge = 3600000 }) => {
  const { addToCache, getFromCache } = useContext(CacheContext);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const cachedData = getFromCache(dataname, maxCacheAge);
      if (cachedData) {
        setData(cachedData);
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        let response;
        if (method === "POST") {
          response = await axios.post(endpoint, payload);
        } else if (method === "GET") {
          response = await axios.get(endpoint);
        }
        setData(response.data);
        addToCache(dataname, response.data);
      } catch (err) {
        setError(err.message || "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint, method, payload, dataname, maxCacheAge, addToCache, getFromCache]);

  return { data, loading, error };
};

export default useAxios;
