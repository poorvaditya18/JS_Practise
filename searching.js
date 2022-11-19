//linear search ->
function linearSearch(arr, x) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === x) {
      return i;
    }
  }
  return NaN;
}

function binarySearch(arr,x)
{
  //some code
}

console.log("Ending");
console.log("Import executes the file")
// module.exports --> so here we are exposing linearSearch and BinarySearch functions 

// exporting as a Object
module.exports = {
    linear:linearSearch,
    binary:binarySearch
  }
  
// you can also direclty pass the function 
// module.exports = linearSearch