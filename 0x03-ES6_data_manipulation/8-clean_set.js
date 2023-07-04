export default function cleanSet(set, startString) {
    const matchingValues = Array.from(set)
      .filter((value) => value.startsWith(startString))
      .map((value) => value.slice(startString.length));
  
    return matchingValues.join("-");
  }
  