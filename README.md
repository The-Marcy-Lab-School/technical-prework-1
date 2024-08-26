# The Marcy Lab School Technical Pre-work Problem set 1

## Directions

You will apply what you've learned about JavaScript by implementing various functions. This assignment will demonstrate your code fluency and problem-solving abilities.

0. Open up [this Repl.it](https://replit.com/@Gonzalomarcylab/MarcyLabPreWork1?v=1) in a new tab. Once you open this Repl.it in a new tab, make a personal copy by forking. You should see a button in the top right corner that says **Fork & Run**. Click on it!
1. Once the Repl.it has been forked, you will write all your code in the `index.js` file.
2. The function "signatures" (the function name and parameter names) have already been created for you. You only need to write the "body" of each function.
3. Do not change the names of the functions. However, you can change the name of the function _parameters_ if you'd like.
4. Each function needs to `return` a specific value. Make sure none of your functions return `undefined`.

> **Note:** Using `console.log()` is not the same as using `return`. `console.log()` only logs a value to the console, which you can use for testing, more on that in a bit. Unless the directions ask you to use `console.log()`, your functions should end with a `return` statement.

5. **Test your functions by invoking them.** You can `console.log()` the invocation of a function to print out its return value. There is a section of code after all functions have been declared where you can test your code.
6. When you are finished, submit the URL of your Repl.it to Canvas.

Happy coding! - MLS Instructors

## Coding Problems

1. Write a function that takes in two numbers and returns the sum of the numbers.

Examples:

```js
add(1, 2);          // returns 3
add(8, 2);          // returns 10
add(-1, 5);         // returns 4
add(2.5, 3.25);     // returns 5.75
```

2. Write a function that takes in two numbers and returns the difference of the numbers.

Examples:

```js
subtract(1, 2);          // returns -1
subtract(8, 2);          // returns 6
subtract(-1, 5);         // returns -6
subtract(2.5, 3.25);     // returns -0.75
```

3. Write a function that takes in two numbers and multiples them together and returns the product.

Examples:

```js
multiply(1, 2);          // returns 2
multiply(8, 2);          // returns 16
multiply(-1, 5);         // returns -5
multiply(2.5, 3.25);     // returns 8.125
```

4. Write a function that takes in an integer and returns the square value of that integer.

Examples:

```js
square(5);        // returns 25
square(1);        // returns 1
square(10);       // returns 100
square(2.5);      // returns 6.25
```

5. Write a function that takes in an integer and returns the square root of that integer.

Examples:

```js
squareRoot(25);        // returns 5
squareRoot(1);         // returns 1
squareRoot(100);       // returns 10
squareRoot(6.25);      // returns 2.5
```

6. Write a function that takes in a name and returns a new string that starts with `Hello,` followed by the name and ends with an exclamation point `!`.

Examples:

```js
greet("Ann");       // returns "Hello, Ann!"
greet("Reuben");    // returns "Hello, Reuben!"
greet("fellows");   // returns "Hello, fellows!"
greet("Maya");      // returns "Hello, Maya!"
```

7. Write a function that takes in a name and returns a new string that starts with `Goodbye,` followed by the name and then a period.

Examples:

```js
goodbye("Ann");       // returns "Goodbye, Ann."
goodbye("Reuben");    // returns "Goodbye, Reuben."
goodbye("fellows");   // returns "Goodbye, fellows."
goodbye("Maya");      // returns "Goodbye, Maya."
```

8. Write a function that takes in a name and returns a new string that asks them what the time is.

Examples:

```js
askTime("Ann");       // returns "Ann, do you know what time it is?"
askTime("Reuben");    // returns "Reuben, do you know what time it is?"
askTime("fellows");   // returns "fellows, do you know what time it is?"
askTime("Maya");      // returns "Maya, do you know what time it is?"
```

9. Write a function that takes in a number of hours and returns how many minutes that equates to.

Examples:

```js
convertToMinutes(5);       // returns 300
convertToMinutes(2.25);    // returns 135
convertToMinutes(1);       // returns 60
convertToMinutes(100);     // returns 6000
```

10. Write a function that takes a numeric temperature in Fahrenheit and converts it to Celsius.

Examples:

```js
fahrenheitToCelsius(212);   // returns 100
fahrenheitToCelsius(32);    // returns 0
fahrenheitToCelsius(50);    // returns 10
fahrenheitToCelsius(140);   // returns 60
```

11. Write a function that takes a number and returns the absolute value of that number.

Examples:

```js
absoluteValue(-99);       // returns 99
absoluteValue(1);         // returns 1
absoluteValue(99);        // returns 99
absoluteValue(-5);        // returns 5
absoluteValue(0);         // returns 0
```

12. Write a function that takes a number and returns a boolean value that represents whether or not the number is a positive value. However, the number `0` is neither positive nor negative, so instead of returning a boolean, return value `null`.

Examples:

```js
isPositive(1);         // returns true
isPositive(99);        // returns true
isPositive(-5);        // returns false
isPositive(0);         // returns null
```

13. Write a function that takes in four sides of a quadrilateral shape and returns true if it represents a square such that all fours sides are the same length (are equal in value). Otherwise, it should return false.

Examples:

```js
isSquare(6, 6, 6, 6);     // returns true
isSquare(1, 2, 1, 2);     // returns false
isSquare(7, 8, 8, 8);     // returns false
isSquare(3, 3, 4, 3);     // returns false
```

14. Write a function that determines whether or not someone can vote. The first argument represents the person's age in years and the second argument represents whether or not they are a citizen, `true` if they are a citizen and `false` if they are not. The function should return `true` only if the person is a citizen and is 18 years or older. Otherwise, it should return `false`.

Examples:

```js
canVote(21, true);     // returns true
canVote(18, true);     // returns true
canVote(16, true);     // returns false
canVote(30, false);    // returns false
```

15. Write a function that takes in the age of a person and returns a different message depending on the age of the person. If the person is 12 years old or less, return "You're still a child". If the person is between 13 years old and 18 years old, return "Now you're a teenager". If the person is older than 18 but younger than 65, return "Welcome to adulthood". Finally, if the person is 65 years or older, return "You are a senior citizen".

Examples:

```js
ageGroup(4);      // returns "You're still a child"
ageGroup(12);     // returns "You're still a child"
ageGroup(13);     // returns "Now you're a teenager"
ageGroup(18);     // returns "Now you're a teenager"
ageGroup(33);     // returns "Welcome to adulthood"
ageGroup(65);     // returns "You are a senior citizen"
ageGroup(80);     // returns "You are a senior citizen"
```

16. Write a function that takes the three angles of a triangle as arguments, and returns one of the following four strings representing the triangle's classification: 'right', 'acute', 'obtuse', or 'invalid'. (Note: Valid triangles have three angles that sum to 180 degrees.) You may assume that all angles have integer values, so you do not have to worry about floating-point errors. You may also assume that the arguments are in degrees.

Examples:

```js
triangle(60, 70, 50);       // returns "acute"
triangle(45, 45, 90);       // returns "right"
triangle(30, 90, 60);       // returns "right"
triangle(120, 50, 10);      // returns "obtuse"
triangle(50, 50, 50);       // returns "invalid"
triangle(0, 90, 90);        // returns "invalid"
triangle(180, 0, 0);        // returns "invalid"
```
