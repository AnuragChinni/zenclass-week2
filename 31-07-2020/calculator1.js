class calculator{
	
constructor(num1,num2){
				
	this.num1=num1;
			
	this.num2= num2;
			
	
	}

add(){
console.log(this.num1+this.num2);
}
mul(){
console.log(this.num1*this.num2);
}
sub(){
console.log(this.num1-this.num2);
}
quot(){
console.log(this.num1/this.num2);
}
remainder(){
console.log(this.num1%this.num2);
}
}
let calc = new calculator(2,3);
calc.add();
calc.sub();
calc.mul();
calc.quot();
calc.remainder();

	
