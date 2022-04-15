//countOnly function - takes in a collection of items and returns counts for a specific subset of those items.
//will be given an array and an object. returns an object containing counts of everything that the input object listed.

const countOnly = function(allItems, itemsToCount) {
  const results = {};
  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};


module.exports = countOnly;