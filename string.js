// Original string
let text = "   Hello World   ";

// 1. toUpperCase()
console.log("toUpperCase:", text.toUpperCase());

// 2. toLowerCase()
console.log("toLowerCase:", text.toLowerCase());

// 3. trim()
let trimmed = text.trim();
console.log("trim:", trimmed);

// 4. slice()
console.log("slice (0,5):", trimmed.slice(0, 5));

// 5. substring()
console.log("substring (6,11):", trimmed.substring(6, 11));

// 6. replace()
console.log("replace:", trimmed.replace("World", "Ali"));

// 7. includes()
console.log("includes 'World':", trimmed.includes("World"));

// 8. indexOf()
console.log("indexOf 'World':", trimmed.indexOf("World"));

// 9. split()
let fruits = "apple,banana,mango";
console.log("split:", fruits.split(","));

// 10. concat()
let text1 = "Hello";
let text2 = "World";
console.log("concat:", text1.concat(" ", text2));