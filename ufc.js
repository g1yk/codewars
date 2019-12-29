/*
If the winner is George Saint Pierre he will obviously say:

"I am not impressed by your performance."
If the winner is Conor McGregor he will most undoubtedly say:

"I'd like to take this chance to apologize.. To absolutely NOBODY!"
Good Luck!

*/


var quote = function(fighter) {
    switch(fighter.toLowerCase()) {
      case 'conor mcgregor': return "I'd like to take this chance to apologize.. To absolutely NOBODY!";
      case 'george saint pierre': return "I am not impressed by your performance.";
      default : 'Who are you?' 
    }
  };