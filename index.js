// Code your solutions in this file
function writeCards( namesArray, event ) {
    let thankYouCards = []
    for ( let x = 0; x < namesArray.length; x++ ) {
      thankYouCards.push( `Thank you, ${namesArray[x]}, for the wonderful ${event} gift!` )
    }
    return thankYouCards
  }
  

  //countdown to apocalypse j/k >:P
function countDown( startingNumber ) {
    while ( startingNumber > 0 ) {
      console.log( startingNumber );
      startingNumber -= 1;
    }
    console.log( startingNumber );
  }
