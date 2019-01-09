
class Card{
	constructor(suit, faceValue){
		this.suit = suit;
		this.faceValue = faceValue;
	}
	getsuit(){
		return this.suit;
	}
	getFaceValue(){
		return this.faceValue;
	}
}

class Deck{
	constructor(){
		//takes in nothing
		//make storage for your card objects
		this.cards = [];
	}
	addCard( suit, faceValue ){
		//adds a card to the deck
		//takes in a string suit and faceValue
		//makes a new card Object from the Card template
		//adds the card object to the storage in the constructor
		//returns the amount of cards currently stored
		var oneCard = new Card(suit, faceValue);
		this.cards.push(oneCard);
		console.log(oneCard);
		return this.cards.length;
	}
	shuffle(){
		//reorders the cards in the storage array in a random order
		//takes in nothing
		//returns nothing

		console.log(this.cards);
		var indexValue = this.cards.length-1, tempValue, randomValue
		while (indexValue){
			

			randomValue = Math.floor(Math.random() * this.cards.length);

			tempValue = this.cards[indexValue];
			this.cards[indexValue] = this.cards[randomValue];
			this.cards[randomValue] = tempValue;
			indexValue--;
		}
		console.log(this.cards);
		return;
	}
	getCardCount(){
		//gets the current amount of cards stored
		//takes in nothing
		//returns the amount of cards stored in the array in the constructor
		return this.cards.length;

	}
	dealCards( dealAmount ){
		//deals out a number of cards
		//takes in the number of cards to deal
		//removes that many cards from the deck
		//returns an array with that many cards in it
		//cannot return more cards than the deck has
		console.log(this.cards);
		var dealtCards = [];
		for(var i = 0; i<dealAmount; i++){
			dealtCards.push(this.cards.pop())
		}
		console.log(dealtCards)
		return dealtCards;
	}
}