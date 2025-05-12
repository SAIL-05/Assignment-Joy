//Write a program that calculates the ticket price based on age with the following conditions: age below 12 pay a ticket price of 5, age below 18 pay a ticket price of 10, age below 60 pay a ticket price of 20, age over 60 play a ticket price of 15.

const Age = parseInt(prompt("Enter your Age pls"));
if (Age <= 12) {
  alert("your ticket cost 5$");
} else if (Age > 12 && Age <= 18) {
  alert("your ticket cost 10$");
} else if (Age > 18 && Age <= 60) {
  alert("your ticket Cost 20$");
} else if (Age > 60) {
  alert("your ticket cost 15$");
}else{
    ("Invalid Data")
}

// Write a program that determines if a year is a leap year.

const year = parseInt(prompt("Enter the year"));
if (year % 4 ==0 || year % 100 !==0 && year % 400 ==0){
    alert("It is a leap year")
}else if(year % 100 ==0 || year % 400 !==0  && year % 4 !==0){
  alert("It is not a leap year")
}else{
  alert("you were born in another multiverse")
}

// Write a program that calculates a discount based on the purchase amount.Prices equal or over 100 discount have a discount of 20. Prices equal or over 50 have a discount of 10. Otherwise discount is 0

const originalPrice = parseInt(prompt("Enter the price")); 
let discountPecentage = 0.2; //20%
const discount = originalPrice -(originalPrice*discountPecentage) ;
if(originalPrice >= 100){
    alert(`${discount} is the discount`);
}
 discountPecentage = 10; //10%
 if(originalPrice <=50 ){
    alert(`${discount} is the discount`);
}else{
    alert("discount is equal to zero")
}

// // Write a program that greets the user based on the time of day. Display good morning, good afternnon or good evening based on the time of day when you run the code.

const now = new Date()
const hour = now.getHours();
if(hour <=12 && hour >=0){
    alert("Good morning");
}
else if(hour >12 && hour <=16){
    alert("Good afternoon");
}
else if(hour >16 && hour <= 23){
    alert("Good evening");
}else{
    alert("You are from another multiverse");
}

// Write a simple number guessing game. Provide a secret number and a guess. Based on those numbers give players clues if their guess is higher, lower or correct.

const secretNumber = 10;
const guess = parseInt(prompt("guess the secret number"));
if(guess === secretNumber){
  alert(" correct! wow you are really good at guess game")
}else if(guess<secretNumber){
  alert("wrong! your guess is lower than the secret number, try again");
}else if(guess>secretNumber){
  alert("wrong! your guess is higher than the secret number");
}else{
  alert("Invalid")
}
