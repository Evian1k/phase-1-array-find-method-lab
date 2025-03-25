// code your solution here

// Define the superbowlWin function
function superbowlWin(record) {
    const win = record.find(game => game.result === "W"); // Find the first winning game
    return win ? win.year : undefined; // Return the year or undefined if not found
  }
  
  // Export the function for testing
  module.exports = superbowlWin;
  
