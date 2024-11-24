function recreateJSON(flattenedData) {
  const json = {};

  Object.entries(flattenedData).forEach(([key, value]) => {
    const keys = key.split(/\.|\[(\d+)\]/).filter(Boolean); // Split by dots or array brackets
    keys.reduce((acc, cur, idx) => {
      const isArrayIndex = /^\d+$/.test(cur); // Check if key is an array index
      const last = idx === keys.length - 1;

      if (isArrayIndex) cur = parseInt(cur, 10); // Convert array index to number

      if (last) {
        acc[cur] = value; // Assign the value
      } else if (acc[cur] === undefined) {
        acc[cur] = isArrayIndex ? [] : {}; // Initialize as array or object
      }

      return acc[cur]; // Move deeper
    }, json);
  });

  return json;
}
export default recreateJSON;