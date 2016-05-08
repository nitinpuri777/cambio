createPack();

function createPack() {
	var suits = new Array("H", "C", "D", "S")
	var pack = new Array();
	var n = 52;
	var index = n/suits.length
	
	var count = 0;
  	for(i = 0; i <= 3; i++)
      for(j = 1; j <= index; j++)
          pack[count++] = j + suits[i];

    console.log(pack.toString())
  	return pack;
}