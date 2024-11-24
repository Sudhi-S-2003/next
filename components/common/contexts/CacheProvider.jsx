import { createContext, useState, useEffect } from "react";

export const CacheContext = createContext();

export const CacheProvider = ({ children }) => {
  const [cache, setCache] = useState(new Map()); // Initialize empty Map

  useEffect(() => {
    // Load cache from localStorage after component mounts
    const storedCache = localStorage.getItem("appCache");
    if (storedCache) {
      setCache(new Map(JSON.parse(storedCache)));
    }
  }, []);

  const saveToLocalStorage = (newCache) => {
    localStorage.setItem("appCache", JSON.stringify([...newCache.entries()]));
  };

  const addToCache = (key, value) => {
    setCache((prevCache) => {
      const newCache = new Map(prevCache);
      newCache.set(key, { value, timestamp: Date.now() }); // Store with timestamp
      saveToLocalStorage(newCache);
      return newCache;
    });
  };

  const getFromCache = (key, maxAge = 3600000) => {
    const cachedItem = cache.get(key);
    if (cachedItem) {
      const { value, timestamp } = cachedItem;
      if (Date.now() - timestamp < maxAge) {
        return value; // Return valid cached data
      }
      setCache((prevCache) => {
        const newCache = new Map(prevCache);
        newCache.delete(key);
        saveToLocalStorage(newCache);
        return newCache;
      });
    }
    return null; // Return null if not cached or expired
  };

  useEffect(() => {
    saveToLocalStorage(cache);
  }, [cache]);

  return (
    <CacheContext.Provider value={{ addToCache, getFromCache }}>
      {children}
    </CacheContext.Provider>
  );
};
