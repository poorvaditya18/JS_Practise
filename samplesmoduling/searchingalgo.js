export function linearSearch(arr, x) {
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

  // in common js moduling -> you need to export
  // module.exports = {
  //   linear:linearSearch,
  //   binary:binarySearch
  // }

//default export -> default value module is going to return 
//  export default function fun()
//   {

//   }

  //ERROR -> SyntaxError: Duplicate export of 'default'
  // export default function gun()
  // {

  // }
  
// IN ES exports- > named and default exports
// this is named export == similar to module.export
// we have done the default export of the whole object
  export default {
    binarySearch,
    fun : function(){console.log("fun");},
  }
