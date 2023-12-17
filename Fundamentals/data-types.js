//  Number, String, Boolean(logical type), Undefined. - Primitive
// Object, Dates, Arrays, Errors.
// The symbol type is used to create unique identifiers for objects.

// Typeof function treats it like a function, however there is no separate function type.

// Null The special null value does not belong to any of the types described above. It forms a separate type of its own which contains only the null value. Log gives the typeof Null as an Object. Null means “nothing”, “empty” or “value unknown”

// Undefined - The meaning of undefined is “value is not assigned”. default initial value for unassigned things.

// Represents integers and floating numbers.
// Infinity, -Infinity, NaN belong to Number data type. "Special numeric values"
// Infinity is a specia value that is greater than any number. console.log(1 / 0);
// NaN - computational error.  It is a result of an incorrect or an undefined mathematical operation, for instance: console.log( "not a number" / 2); Any further mathematical operation on NaN returns NaN. So, if there’s a NaN somewhere in a mathematical expression, it propagates to the whole result (there’s only one exception to that: NaN ** 0 is 1).

// Bool
// Boolean values also come as a result of comparisons, let isGreater = 4 > 1; - True


// Important!!!  

// typeof Math // "object"  (1) Math is a built-in object that provides mathematical operations. 

// typeof null // "object"  (2)

// typeof alert // "function"  (3)