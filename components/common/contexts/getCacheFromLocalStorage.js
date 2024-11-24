// Get the appCache from localStorage and parse it
const cachedData = JSON.parse(localStorage.getItem('appCache'));

// Check if the data exists
if (cachedData) {
  // Find the entry with the key "search-F&B"
  const searchData = cachedData.find(([key]) => key === "search-F&B");

  // If the entry exists, retrieve its value
  if (searchData) {
    const value = searchData[1]; // This is the value associated with the key
    console.log(value); // This will log the value for "search-F&B"
  } else {
    console.log('Key "search-F&B" not found in cache.');
  }
} else {
  console.log('No cache data found in localStorage.');
}
