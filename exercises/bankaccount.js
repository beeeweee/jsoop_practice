

class Account{
	constructor(){
		//store the amount of money in the account
		this.balance = 0;
	}
	add( amount ){
		//add money to the amount stored in the account
		this.balance += amount;
		return this.balance;
		//takes in an amount
		//adds it to the existing amount
		//returns the new amount in the account
	}
	remove( amount ){
		//removes funds from an account	
		var currentBalance = this.balance;
		if(amount > this.balance){
			this.balance = 0;
			return currentBalance;
			} else if (amount < this.balance){
			this.balance = currentBalance - amount;
			return amount;
			}
			
		}
		
		//check if the amount to withdraw is more than the account
		//if more, only withdraw the amount in the account, not more
		//if less, withdraw the amount specified
		//return the amount actually withdrawn
	getAmount(){
		//returns the amount in the account
		return this.balance;
}
}