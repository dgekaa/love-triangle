/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
		var counter = 0;

   for (var i = 0; i < preferences.length; i++)  {
      for (var j = i + 1; j < preferences.length; j++) {

         for (var k = j + 1; k < preferences.length; k++) {

            if ((preferences[i] != i + 1 && (preferences[i] == j + 1 || preferences[i] == k + 1)) 
            && (preferences[j] != j + 1 && (preferences[j] == i + 1 || preferences[j] == k + 1)) 
            && (preferences[k] != k + 1 && (preferences[k] == i + 1 || preferences[k] == j + 1)) 
            && (preferences[i] != preferences[j] && preferences[i] != preferences[k] && preferences[j] != preferences[k])) {
               counter++;
            }
         }
      }
  }

   return counter;
};
