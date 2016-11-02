 getCardImageUrl = function(card){
   if (card.point > 1 && card.point <= 10) {
      return 'images/' + card.point + '_of_diamonds.png';
   }
   else if (card.point === 11) {
     return 'images/jack_of_' + card.suit + '.png';
   }
   else if (card.point === 12) {
     return 'images/queen_of_' + card.suit + '.png';
   }
   else if (card.point === 13) {
     return 'images/king_of_' + card.suit + '.png';
   }

    else {
      return 'images/ace_of_' + card.suit + '.png';
    }
};

calculatePoints = function(cards){
var sum = 0;
var have_ace = false;
for (i=0; i < cards.length; i++){
  if (cards[i].point === 1){
    console.log("Where card is determined to be an ace, sum is: " + sum);

      if (sum > 10){
        sum += 1;
        console.log("Where ace adds 1: " + sum);
        have_ace = true;
      }

    else{
    sum += 11;
    have_ace = true;
  }

}
  if (cards[i].point > 10) {
    sum += 10;
  }
  else if(cards[i].point > 1 && cards[i].point <= 10 ){
  sum += cards[i].point;
  }
}
if (have_ace){
  if (sum > 21){
    sum -= 10;
  }
}

return sum;
};

newDeck = function(){
  var deck = [];
  for (i=1; i<14; i++) {
    deck.push({point: i, suit: 'spades'});
    deck.push({point: i, suit: 'hearts'});
    deck.push({point: i, suit: 'clubs'});
    deck.push({point: i, suit: 'diamonds'});
  }

  return deck;
};
