# JavaScript Prework Problem Set 0-0

### Directions 
You will be applying what you've learned about JavaScript by implementing various functions. This assignment will demonstrate your code fluency and problem-solving abilities.

0. You will be writing code using [this Repl.it](https://replit.com/@AnnDuong1/MarcyLabPreWork0). Once you open this Repl.it in a new tab, you can make a personal copy by forking. Click on the button in the top right corner that says **Fork**.
1. Once the Repl.it has been forked, you will write all your code in the `index.js` file.
2. The function signatures have already been created for you. You only need to write the body of each function.
3. Do not change the names of the functions. However, you can change the name of the function _parameters_ if you'd like. 
4. Each function needs to **return** a specific value. Make sure none of your functions return `undefined`.
5. **Test your functions by invoking them.** You can `console.log` the invocation of a function to print out its return value. There is a section of code after all functions have been declared where you can test your code.
6. When you are finished, submit the URL of your Repl.it to Canvas. 

### Coding Problems 

1. Write a function that takes in two numbers and returns the sum of the numbers.

Examples:
```
add(1, 2);          // returns 3
add(8, 2);          // returns 10
add(-1, 5);         // returns 4
add(2.5, 3.25);     // returns 5.75
```

2. Write a function that takes in an integer and returns the square value of that integer.

Examples:
```
square(5);        // returns 25
square(1);        // returns 1
square(10);       // returns 100
square(7);        // returns 49
```

3. Write a function that takes in a name and returns a new string that starts with `Hello,` followed by the name and ends with an exclamation point `!`.

Examples:
```
greet("Ann");       // returns "Hello, Ann!"
greet("Reuben");    // returns "Hello, Reuben!"
greet("fellows");   // returns "Hello, fellows!"
greet("Maya");      // returns "Hello, Maya!"
```

4. Write a function that takes a numeric temperature in Fahrenheit and converts it to Celsius. 

Examples: 
```
fahrenheitToCelsius(212);   // returns 100
fahrenheitToCelsius(32);    // returns 0
fahrenheitToCelsius(50);    // returns 10
fahrenheitToCelsius(140);   // returns 60
```

5. Write a function that takes a number and returns a boolean value that represents whether or not the number is a positive value. However, the number `0` is neither positive nor negative, so instead of returning a boolean, return value `null`.

Examples:
```
isPositive(1);         // returns true
isPositive(99);        // returns true
isPositive(-5);        // returns false
isPositive(0);         // returns null
```

6. Write a function that takes in four sides of a quadrilateral shape and returns true if it represents a square such that all fours sides are the same length (are equal in value). Otherwise, it should return false. 

Examples:
```
isSquare(6, 6, 6, 6);     // returns true
isSquare(1, 2, 1, 2);     // returns false
isSquare(7, 8, 8, 8);     // returns false
isSquare(3, 3, 4, 3);     // returns false
```

7. Write a function that takes in the age of a person and returns a different message depending on the age of the person. If the person is 12 years old or less, return "You're still a child". If the person is between 13 years old and 18 years old, return "Now you're a teenager". If the person is older than 18 but younger than 65, return "Welcome to adulthood". Finally, if the person is 65 years or older, return "You are a senior citizen". 

Examples:
```
ageGroup(4);      // returns "You're still a child"
ageGroup(13);     // returns "Now you're a teenager"
ageGroup(18);     // returns "Now you're a teenager"
ageGroup(33);     // returns "Welcome to adulthood"
ageGroup(65);     // returns "You are a senior citizen"
ageGroup(80);     // returns "You are a senior citizen"
```

8. Write a function that takes the three angles of a triangle as arguments, and returns one of the following four strings representing the triangle's classification: 'right', 'acute', 'obtuse', or 'invalid'. (Note: Valid triangles have three angles that sum to 180 degrees.) You may assume that all angles have integer values, so you do not have to worry about floating-point errors. You may also assume that the arguments are in degrees.

Examples:
```
triangle(60, 70, 50);       // returns "acute"
triangle(30, 90, 60);       // returns "right"
triangle(120, 50, 10);      // returns "obtuse"
triangle(0, 90, 90);        // returns "invalid"
triangle(50, 50, 50);       // returns "invalid"
```
