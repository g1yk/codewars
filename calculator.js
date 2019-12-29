/*
Example:
calculator(1,2,"+"); //=> result will be 3
if the variables are not numbers or the sign does not belong to the list above a message "unknown value" must be returned.

Example:
calculator(1,2,"&"); //=> result will be "unknown value"
calculator(1,"k","*"); //=> result will be "unknown value"

*/


let calculator = (firstNum, secondNum, add) => {
    if ((typeof firstNum == "number") && (typeof secondNum !== "number")) {
        return 'unknown value'
    } else if (add === '*') {
        return firstNum * secondNum
    } else if (add === '/') {
        return firstNum / secondNum
    } else if (add === '+') {
        return firstNum + secondNum
    } else if (add === '-') {
        return firstNum - secondNum
    } else {
        return 'unknown value'
    }
}