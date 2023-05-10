console.log("დავალება 1");
// 1
let array = [5, 25, 89, 120, 36];
array.push("javascript", "python");
array.unshift("CSS", "HTML");
console.log(array.length);
array.shift();
array.pop();
array.forEach((el) => console.log(el));

console.log("დავალება 2");
// 2
let array1 = ["orange", "banana", "pearl"];
console.log(array1.length);
array1.push("apple", "ananas");
array1.unshift("watermelon");
console.log(array1.length);
array1.splice(2, 0, "mango");
array1.pop();
array1.shift();
console.log(array1.length);

console.log("დავალება 3");
// 3
let array2 =[1, 2, 3, 4, 5];
array2.splice(3, 0, "a", "b", "c");
console.log(array2);

console.log("დავალება 4");
// 4
let languages = ['html', 'css', 'javascript', 'python', 'php'];
languages.filter((word) => word.length > 3).forEach(word => console.log(word));

console.log("დავალება 5");
// 5
let words = ['Madrid', 'Rome', 'Milan', 'Berlin'];
console.log(words.filter(word => word.includes("M") || word.includes("m")));

console.log("დავალება 6");
// 6
let array3=[2, 15, 10, 24];
let i = array3.indexOf(10);
array3.splice(i, 1);
console.log(array3);