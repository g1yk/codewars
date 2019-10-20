/*

You have to return the digits of this number within an array in reverse order.

Example:
348597 => [7,9,5,8,4,3]

*/


const reverseArray = (num) => {
    let finalResult = []
    let result = num.toString()
    for (let i = result.length - 1; i >= 0; i--) {
  
      console.log(result[i])
      finalResult.push(Number(result[i]))
    }
    return finalResult
  }