//Sort Word
// var arr1 = ["Sujeet", "Raj", "sujmeet"];
// let arr2 = arr1.sort((a, b) => {
//   return b.length - a.length;
// });
// console.log(arr2[0]);    //sujmeet

//longest word
// function longest(str) {
//   var strSplit = str.split(" ");
//   var longWord = 0;
//   for (var i = 0; i < strSplit.length; i++) {
//     if (strSplit.length > longWord) {
//       longWord = strSplit[i].length;
//     }
//   }
//   return longWord;
// }

// console.log(longest("My name is Sujeey "));     //6

//reverse string
//1st way
// function revString(str) {
//   return str.split("").reverse().join("");
// }
// console.log(revString("sujeet kumar")); //ramuk teejus

//2nd way
// function revString(str) {
//   var newString = "";
//   for (var i = str.length - 1; i >= 0; i--) {
//     newString += str[i];
//   }
//   return newString;
// }
// console.log(revString("sujeet kumar")); //teejus ramuk

//3rd way
// const reverse = (str) => {
//   return str.split("").reverse().join("");
// };
// console.log(reverse("sujeet")); //teejus

//4th way

// const str = "Sujeet";
// const reverse1 = [...str].reverse().join("");
// console.log(reverse1); //teejuS

//5th way

// function reverseWord(sentence) {
//   return sentence
//     .split(" ")
//     .map(function (word) {
//       return word.split("").reverse().join("");
//     })
//     .join(" ");
// }

// console.log(reverseWord("abd fhe kdj")); //dba ehf jdk

//6th way
// let word = "hello Sujeet";
// let reverseWord = "";
// console.log(word.split(" ").length); // count word
// for (let i = word.length - 1; i >= 0; i--) {
//   reverseWord += word[i];
// }

// console.log("Reversed str is:", reverseWord); //Reversed str is: teejuS olleh

// function countVowel(str) {
//   var vowelCount = 0;
//   for (var i = 0; i < s.length - 1; i++) {
//     if (
//       s.charAt(i) == "a" ||
//       s.charAt(i) == "e" ||
//       s.charAt(i) == "i" ||
//       s.charAt(i) == "o" ||
//       s.charAt(i) == "u"
//     )
//       vowelCount += 1;
//   }
//   return vowelCount;
// }

// console.log(countVowel("Sujeet Kumar"));

// vowel count
// solution 1
// const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

// function countVowels(sentence) {
//   let counts = 0;
//   for (let i = 0; i < vowels.length; i++) {
//     if (vowels.includes(sentence[i])) {
//       counts++;
//     }
//   }
//   return console.log(counts);
// }

// countVowels("Hello World");
// countVowels("AaEeIiOoUu");
// countVowels("aaaaa");

// solution 2
// const vowelCount = (str) => {
//   let vowels = /[aeiou]/gi;
//   let result = str.match(vowels);
//   let count = result.length;
//   console.log(count);
// };
// vowelCount("sujeet");

/*----------------------duplicate remove *****************/
// var arr = [8, 9, 5, 6, 3, 4, 2, 6, 4, 56, 56, 44, 434, 23, 11, 9];
// var duplicate = arr.filter((index, i) => {
//   console.log(i);

//   return arr.indexOf(index) === i;
// });

// console.log(duplicate);

/*----------------------compare two array*****************/

// // let arr1 = ["sujeet", "sachin", "Tanish"];

// // let arr2 = ["sujeet", "Tanish", "sachin"];
// let arr1 = [1, 2, 3, 4];

// let arr2 = [1, 2, 3, 4];
// let arr11 = arr1.sort().toString();
// let arr22 = arr2.sort().toString();

// console.log(arr11 === arr22 ? "equal" : "not");

// program to generate fibonacci series up to n terms

// take input from the user
// var arr = [1, 2, 4, 8];

// var arr2 = arr.sort((a, b) => {
//   return a - b;
// });
// console.log(arr2[arr2.length - 1], arr2[arr2.length - 2]);

var arr = [8, 9, 5, 6, 3, 4, 2, 6, 4, 56, 56, 44, 434, 23, 11, 9];
var duplicate = arr.filter((index, i) => {
  return arr.indexOf(index) === i;
});

console.log(duplicate);
