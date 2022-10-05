class die {
    constructor(startValue, endValue) {
        this.startValue = startValue;
        this.endValue = endValue;
    }
    throw() {
		let result = ~~(Math.random() * (this.endValue - this.startValue + 1)) + this.startValue;
		return result;
    }
}

function play(numOfDice) {
	let results = [];
	for(let i = 0; i < numOfDice; i++) {
		let currentDie = new die(1, 6);
		let result = currentDie.throw();
		results = [...results, result];
	}
	return results;
}

/******************************************************************************

YAM GAME:

How To Play Yam :

Play Yam by writting yam();
If you need to keep dice for the next throw, write yam(values to keep in here);

You can only throw the dice 3 times in a row. After the third time, the next player can play.

******************************************************************************/ 

let keptValues = [];
let remainingTosses = 3;

function next() {
	remainingTosses = 3;
}

function yam(...diceToKeep) {
	if(remainingTosses <= 0) next();
	remainingTosses--;
	keptValues = [...diceToKeep];
	let remainingDice = 5 - keptValues.length;
	
	console.log(`%cresults: ${play(remainingDice).join(" - ")}`, `font-size:17px;font-weight:bold;color:#dd4a4a`);
	
	if(keptValues.length > 0) console.log(`%cKept dice: ${keptValues.join(" - ")}`, `font-size:13px;font-weight:bold;color:#00b0b0`);
	
	console.log(`Remaining Tosses: ${remainingTosses}`);
	
	if(remainingTosses === 0) console.log(`%c\nNEXT PLAYER\n`, `font-size:20px;font-weight:bold;color:#fff`);
	
	return "------------------------------------";
}

