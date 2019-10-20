/*
Simple, remove the spaces from the string, then return the resultant string.
*/

const noSpace = (str) => {
    result = '';
    for (let i = 0; i < str.length; i++ ) {
      if (str[i] != ' ') {
        result += str[i]
      }
      
    }
    return result
  }