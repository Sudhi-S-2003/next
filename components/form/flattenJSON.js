function flattenJSON(obj, parentKey = '', result = {}, seen = new Set()) {
  if (obj === null || typeof obj !== 'object') {
    result[parentKey] = obj;
  } else if (Array.isArray(obj)) {
    obj.forEach((item, index) => {
      flattenJSON(item, `${parentKey}[${index}]`, result, seen);
    });
  } else {
    if (seen.has(obj)) {
      throw new Error('Circular reference detected');
    }
    seen.add(obj);
    Object.entries(obj).forEach(([key, value]) => {
      const newKey = parentKey ? `${parentKey}.${key}` : key;
      flattenJSON(value, newKey, result, seen);
    });
    seen.delete(obj);
  }
  return result;
}
export default flattenJSON