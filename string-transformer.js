/*

"Example Input" ==> "iNPUT eXAMPLE"

*/

const stringTransformer = (space) => {
    let result = ''
    for (let i = 0; i < space.length; i++) {
      if (space[i] == space[i].toUpperCase() && space[i] !== '') {
        result += space[i].toLowerCase()
      } else if (space[i] == space[i].toLowerCase()) {
        result += space[i].toUpperCase()
      }
    }
      return result.split(' ').reverse().join(' ')
  }
  
  
  