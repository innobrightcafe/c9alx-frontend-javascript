export default const weakMap = new WeakMap();

function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }

  const count = weakMap.get(endpoint);
  const updatedCount = count + 1;
  weakMap.set(endpoint, updatedCount);

  console.log(updatedCount);

  if (updatedCount >= 5) {
    throw new Error('Endpoint load is high');
  }
}

export { weakMap, queryAPI };
