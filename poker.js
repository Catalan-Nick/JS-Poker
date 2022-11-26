"use strict";
/* 
      Project to deal cards from a shuffled poker deck
      Author: Nicholas Catalan
      Date:   11/20/2022 
*/

let deckStr = `Ace of Hearts, King of Hearts, Queen of Hearts, Jack of Hearts,10 of Hearts, 9 of Hearts, 8 of Hearts, 7 of Hearts, 6 of Hearts, 5 of Hearts, 4 of Hearts, 3 of Hearts, 2 of Hearts,Ace of Spades, King of Spades, Queen of Spades, Jack of Spades, 10 of Spades, 9 of Spades, 8 of Spades, 7 of Spades, 6 of Spades, 5 of Spades, 4 of Spades, 3 of Spades, 2 of Spades, Ace of Diamonds, King of Diamonds, Queen of Diamonds, Jack of Diamonds, 10 of Diamonds, 9 of Diamonds, 8 of Diamonds, 7 of Diamonds, 6 of Diamonds, 5 of Diamonds, 4 of Diamonds, 3 of Diamonds, 2 of Diamonds, Ace of Clubs, King of Clubs, Queen of Clubs, Jack of Clubs, 10 of Clubs, 9 of Clubs, 8 of Clubs, 7 of Clubs, 6 of Clubs, 5 of Clubs, 4 of Clubs, 3 of Clubs, 2 of Clubs`;

let cards = document.querySelectorAll("div#hand span"); 
let cardsLeft = document.getElementById("cardsLeft");
let deck = [];

document.getElementById("deal").onclick = function() {   
   function newDeck(){
      deck = deckStr.split(",")
      deck = deck.sort(shuffle);
      function shuffle(a, b){
            return 0.5 - Math.random();
      }
}
   for(let i = 0; i < cards.length; i++){
      if (deck.length == 0){
            newDeck();
      }
      cards[i].textContent = deck.pop();
      cardsLeft.innerText = deck.length;
   }
   
}

            
