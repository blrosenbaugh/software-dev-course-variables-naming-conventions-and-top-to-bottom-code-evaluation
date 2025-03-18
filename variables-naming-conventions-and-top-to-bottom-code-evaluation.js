/*

Objective:
In this activity, you will reinforce the skill of creating and using variables
while practicing best practices in variable naming conventions through a hands-on,
interactive coding challenge.

  Response-

  This code has ambiguous variable names (e.g., a,b,c and d)
  These should be more descriptive.
  Instead of a, I'd use "personName"
  Instead of b, I'd use "numberOfItems"
  Instead of c, I'd use "priceOfItem"
  Instead of d, I'd use "endResult"

  I did not locate any missing variables, only variables that needed better naming.

  To enhance the program, I've added:
  let currencySymbol = "$"; // Added for flexibility (by geographical location)
  let totalCost = numberOfItems * priceOfItem; // New variable to calculate total cost

  Reflection-

  It's important to use meaningful variable names so that when collaborating, it improves readabiltiy and is easier to maintain.
  Common pitfalls to avoid are using inconsistent naming schemes (like not adhering to camelcase). It looks more professional,
  and again, maintains readability throughout a project. You'll also want to make sure you do not use any numbers leading a variable name.
  Clear variables benefit a collaboration because it looks nicer, is easier to read, and reduces the need for excessive comments in the code.
  This can also make it easier to trace errors in code.

  Below, I've added the revised and improved code-
  
*/

let personName = "Alice";
let numberOfItems = 5;
let priceOfItem = 20;
let currencySymbol = "$";
let totalCost = numberOfItems * priceOfItem;
let endResult = personName + " bought " + numberOfItems + " items for " + currencySymbol + priceOfItem + " each, totaling " + currencySymbol + totalCost + ".";

console.log(endResult);