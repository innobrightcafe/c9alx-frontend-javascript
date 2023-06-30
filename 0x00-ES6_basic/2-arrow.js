const getNeighborhoodsList = () => {
  const sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

  return {
    addNeighborhood: (newNeighborhood) => {
      sanFranciscoNeighborhoods.push(newNeighborhood);
      return sanFranciscoNeighborhoods;
    }
  };
};

export default getNeighborhoodsList;
