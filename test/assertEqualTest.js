const assertEqual = require('../assertEqual');

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(332, 123);
assertEqual("Liam", "Liam");
assertEqual("Hello, my name is Abby.", "Hello, my name is Abby.");
assertEqual("Yoohoo", "this is FUN");
assertEqual(123, "Hello");
assertEqual(undefined, false);
assertEqual(123, "123");
assertEqual([1,2,3], [1,2,3]); // Array: Assertion Failed
assertEqual({a:1, b:2, c:3}, {a:1, b:2, c:3}); // Object: Assertion Failed
