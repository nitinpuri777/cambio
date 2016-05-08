var game = require("./game");

var pack = game.createPack();  
var myPack = game.shufflePack(pack);  
console.log("Size of pack before draw: " + myPack.length);  
console.log("Drawing 5 cards.");  
var hand = game.draw(myPack, 5, '');  
console.log("Size of pack after draw: " + myPack.length);  
console.log("Cards in hand:");  
console.log(hand);  
console.log();  
console.log("Now I'll draw a card");  
var draw = game.draw(myPack, 1, hand);  
console.log(draw);  
console.log("Size of pack after drawing one card: " + myPack.length);  
console.log("So all cards in my hand are: ");  
console.log(hand);  
//////
console.log();  
console.log("Now I'll draw 3 cards");  
var draw = game.draw(myPack, 3, hand);  
console.log(draw);  
console.log("Size of pack after drawing 3 cards: " + myPack.length);  
console.log("So all cards in my hand are: ");  
console.log(hand);  
console.log();  
console.log("I'll play one card now, dropping the last card.");  
console.log()  
var lastCard = hand.length-1;  
console.log("Last card's index: " + lastCard);  
var newHand = game.playCard(1, hand, lastCard);  
console.log("Cards in my new hand are:");  
console.log(newHand);  
console.log();  
console.log("I'll play the third card:");  
var thirdCard = 2; //index of 3rd card is 2  
console.log("Index of the third card: " + thirdCard);  
var evenNewerHand = game.playCard(1, newHand, thirdCard);  
console.log("Cards now in my hand hand are:");  
console.log(evenNewerHand);  
console.log();  
console.log("Size of pack should not change: " + myPack.length);  