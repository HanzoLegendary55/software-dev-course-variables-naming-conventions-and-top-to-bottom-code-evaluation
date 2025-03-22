/*

Objective:
In this activity, you will reinforce the skill of creating and using variables
while practicing best practices in variable naming conventions through a hands-on,
interactive coding challenge.

The code snippet below may include:
  - Ambiguous or incorrect variable names.
  - Missing variables that need to be created.
  - Scenarios that require the use of clear and descriptive variable names.

You will:
  - Identify Issues: Review the provided code and identify any variable names that:
  - Are unclear or too vague (e.g., a, b, c).
  - Do not follow best practices (e.g., camelCase, descriptive naming).
  - Refactor the Code: Rename the variables and rewrite the program using descriptive names that clearly convey the variable's purpose.
  - Enhance the Program: Add at least two additional variables to improve the program’s functionality or clarity.

Things to reflect on:
  - Why is it important to use meaningful variable names?
  - What are the common pitfalls to avoid when naming variables?
  - How do clear variable names benefit team collaboration?
  
*/

let userName = "Alice";
let numberOfItems = 5;
let totalCost = 20;
let purchaseSummary = userName + " bought " + numberOfItems + " items for $" + totalCost + ".";

console.log(purchaseSummary);

Enhancements
let currencySymbol = "$";
let purchaseSummary = userName + " bought " + numberOfItems + " items for " + currencySymbol + totalCost + ".";

let storeName = "CostCo";
let purchaseSummary = userName + " bought " + numberOfItems + " items from " + storeName + " for " + currencySymbol + totalCost + ".";


Meaningful variable names make the code easier to understand, maintain, and debug. 
  For example, userName is much clearer than a, and numberOfItems is more descriptive than b. 
  This helps anyone reading the code (including your future self) quickly grasp what the code is doing.

Using vague or single-letter names like a, b, or x.
  Using names that don’t describe the purpose of the variable (e.g., data or value).
  Inconsistent naming conventions (e.g., mixing camelCase and snake_case).

Clear variable names make it easier for team members to understand and work with each other’s code. 
  Consistent naming conventions ensure everyone is on the same page, reducing confusion and making collaboration smoother.
