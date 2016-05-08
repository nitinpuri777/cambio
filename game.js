function createPack() {
	var suits = new Array("H", "C", "D", "S")
	var pack = new Array();
	var n = 52;
	var index = n/suits.length
	
	//for each suit, create (n/# of suits) cards
	var count = 0;
  	for(i = 0; i <= suits.length-1; i++)
      for(j = 1; j <= index; j++)
          pack[count++] = j + suits[i];

    //console.log(pack.toString())
  	return pack;
}

function shufflePack(pack) {
	var j;
	var tempi;
	var tempj;
	if (i === 0) return false;
	for (i=pack.length-1; i > 0; i--) {
		j = Math.floor(Math.random() * (i));
		tempi = pack[i];
		tempj = pack[j];
		//console.log("i:"+i+" j:"+j+" tempi" +tempi+" tempj"+tempj)
		pack[i] = tempj;
		pack[j] = tempi;
	}
	//console.log(pack);
	//console.log(pack.length);
	return pack;
}

function draw(pack, amount, hand) {  
  var cards = new Array();
  cards = pack.slice(0, amount);

  pack.splice(0, amount);

  if (hand.length != 0) {
    hand.push.apply(hand, cards);
    //hand.concat(cards);
  }
  return cards;
}

function playCard(amount, hand, index) {  
  hand.splice(index, amount)
  return hand;
}

exports.createPack = createPack;  
exports.shufflePack = shufflePack;  
exports.draw = draw;  
exports.playCard = playCard;  