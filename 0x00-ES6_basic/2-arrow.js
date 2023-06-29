const getNeighborhoodsList = () => {
  const sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

  const addNeighborhood = (newNeighborhood) => {
    sanFranciscoNeighborhoods.push(newNeighborhood);
    return sanFranciscoNeighborhoods;
  };

  return { addNeighborhood };
};

export default getNeighborhoodsList;
