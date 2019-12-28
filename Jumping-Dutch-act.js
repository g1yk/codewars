/*
Example:
sc(2) should return "Aa~ Pa! Aa!"

It means:

Mr. despair jumped from the 2 floor, the voice is "Aa~"
He fell on the ground, the voice is "Pa!"
He did not die immediately, and the final voice was "Aa!"
sc(6) should return "Aa~ Aa~ Aa~ Aa~ Aa~ Pa! Aa!"

sc(7) should return "Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Pa!"

sc(10) should return "Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Pa!"

if floor<=1, Mr. despair is safe, return ""

*/

// Solution

const sc = floor => {
    if (floor <= 1) return ''
    if (floor > 6) return `${'Aa~ '.repeat(floor - 1)}Pa!`
    if (floor <= 6) return `${'Aa~ '.repeat(floor - 1)}Pa! Aa!`
  }