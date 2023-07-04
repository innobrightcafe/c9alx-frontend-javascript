export default function updateUniqueItems(map) {
    if (!(map instanceof Map)) {
      throw new Error("Cannot process");
    }
  
    const updatedMap = new Map();
  
    for (const [key, value] of map) {
      if (value === 1) {
        updatedMap.set(key, 100);
      } else {
        updatedMap.set(key, value);
      }
    }
  
    // Update items with initial quantity 1 to 100 in the original map
    for (const [key, value] of updatedMap) {
      if (value === 1) {
        map.set(key, 100);
      }
    }
  
    return updatedMap;
  }
  