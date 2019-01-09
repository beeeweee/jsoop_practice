
class Calculator{
	constructor(){
		//takes in nothing
		//make storage for the operator and the numbers
		this.operator = [];
		this.numbers = [];
	}
	loadOperator( operator ){
		//adds the operator to the next calculation
		//takes in the operator
		if(operator === '+' || operator === '-' || operator === '*' || operator === '/'){
			this.operator.push(operator);
			return true;
		} else
		return false;
		//checks if it is a valid operation (+-*/)
			//save the op to the constructor storage
			//return true
		//or return false if not the right operator
	}
	loadNumber( num1 ){
		var numbersStored = this.numbers.length;
		//takes in a number and stores it as one of the numbers to perform math on
		//takes in 1 number
		//checks if it is actually a number and if we have fewer than 2 numbers
		if(typeof num1 === 'number' && numbersStored<2){
			this.numbers.push(num1);
			return this.numbers.length;
		} else
			return false;
	
		//if it is a number, and we have 2 or fewer numbers, store it
			//return the number of numbers stored
		//otherwise return false (too many numbers stored)
	}
	calculate(){
		var number1 = parseInt(this.numbers[0]);
		var number2 = parseInt(this.numbers[1]);
		var operator = this.operator[0];
		var result;
		switch (operator){
			case "+":
				result = number1+number2;
				break;
			case "*":
				result = number1*number2;
				break;
			case "/":
				result = number1/number2;
				break;
			case "-":
				result = number1-number2;
				break;	
		}
		this.numbers = [];
		this.operator = [];
		return result;
		//calculate the result of the stored numbers and operator
		//takes in nothing
		//calculates with the operator and 2 numbers
		//clears out the stored numbers
		//returns the calculated result
	}
}