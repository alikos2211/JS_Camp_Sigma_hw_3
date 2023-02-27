let _ = require('lodash');

// Задача 1
function difference (arr){
    if(arr.length == 0 || arr.length == 1){
        return console.log(0);
    }
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    let res = max - min;
    return console.log(res);
}
difference([2,1,3,-4]);

// Задача 1 lodash
function difference_lodash (arr){
    if(arr.length == 0 || arr.length == 1){
        return console.log(0);
    }
    let min = _.min(arr);
    let max = _.max(arr);
    let res = max - min;
    return console.log(res);
}
difference_lodash([2,1,3,-4]);

// Задача 2
function wordsnumbers(str, num) {
    let words = str.split(' ');
    let i = 0;
    while (i < words.length) {
      if (words[i].length <= num) {
        words.splice(i, 1);
      } else {
        i++;
      }
    }
    console.log(words);
  }
  wordsnumbers('Я очень сильно люблю JS', 5);


// Задача 2 Lodash

function wordsnumbers(str, num) {
  let words = _.split(str, " ");
  let i = 0; 
  while (i < words.length) {
    if (words[i].length <= num) {
      words.splice(i, 1);
    } else {
      i++;
    }
  }
  console.log(words);
}
wordsnumbers('Я очень сильно люблю JS', 5);
  // Задача 3
function ending (str1, str2){
  return console.log(str1.endsWith(str2));
}
ending('abc', 'bc');

  // Задача 3 lodash
  function ending (str1, str2){
  let str3 = _.endsWith(str1, str2)
    return console.log(str3);
  }
  ending('abc', 'bcd');

// Задача 4
function avges (arr){
  let res = [];
  for(let i = 0; i < arr.length - 1; i++){
    res.push((arr[i] + arr[i+1]) / 2);
  } 
  return console.log(res);
}
avges([2, -2, 2, -2, 2]);

// Задача 4 Lodash
function avges (arr){
  let res = [];
  for(let i = 0; i < arr.length - 1; i++){
    res.push((arr[i] + arr[i+1]) / 2);
  } 
  return console.log(res);
}
avges([2, -2, 2, -2, 2]);

// Задача 5 (1)
function countVowels (str){
  let res = 0;
 for(let i = 0; i <= str.length; i++){
  if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u' || str[i] == 'y'){
    res++;
  }
 }
 return console.log(res);
}
countVowels ('Palmo');

// Задача 5 (2)
function removeABC (str){
  let counter = 0;
  for(let i = 0; i <= str.length; i++){
    if(str[i] == 'a' || str[i] == 'b' || str[i] == 'c' ){
      str = str.split(str[i]).join('');
    }  
    else{
      counter++;
    }
    if(counter == str.length){
      console.log(null);
    }
  }
  return console.log(str);
}
removeABC ('This might be a bit hard');

// Задача 6 
function differenceArr (arr1, arr2){
  for(let i = 0; i <= arr1.length; i++){
    for(let x = 0;x<arr2.length;x++){
      if(arr1[i] == arr2[x]){
          arr2.splice(x , 1);
      }
    }
  }
  let arr = arr1.concat(arr2);
  console.log(arr);
  }
  differenceArr ([1, 2, 3], [100, 2, 1, 10]);

  // Задача 6 
function differenceArr (arr1, arr2){
  let arr = _.union(arr1, arr2);
  console.log(arr);
  }
  differenceArr ([1, 2, 3], [100, 2, 1, 10]);

// Задача 7
function swap(obj) {
  const res = {};

  Object.keys(obj).forEach(function(value) {
    var key = obj[value];
    res[key] = value;
  });
  return console.log(res);
};
swap ({red: "#FF0000", green: "#00FF00", white: "#FFFFFF"});

// Задача 8
function calculateDifference (obj, num){
  let values = Object.values(obj);
  let sum =  values.map(i=>x+=i, x=0).reverse()[0];
  let res = sum - num;
  if(obj.length == 0 || sum <= num){
    console.log("Error with values or with number")
  }
  else{
    return console.log(res);
  }
}
calculateDifference ( { skate: 200, painting: 200, shoes: 1 }, 400);

// Задача 10

function getFilename(path) {
    let arr = path.split('\\');
    return console.log(arr[arr.length - 1].split('.')[0]);
}
getFilename('c:\\WebServers\\home\\testsite\\www\\myfile.txt');

// Задача 11 
function shifting (s1, s2){
  let pos = -1;
  while (true) {
  pos = s1.indexOf(s2[0], pos + 1);
  if (pos === -1) {
  console.log("No");
  break;
  }
  else if (s2 === s1.slice(pos) + s1.slice(0, pos)) {
  console.log("Yes");
  break;
  }
  }
}
shifting ("Kate", "teKa");

// Задача 11 lodash

function shiftingL (s1, s2){
  let pos = -1;
  while (true) {
  pos = _.indexOf(s1, s2[0], pos + 1);
  if (pos === -1) {
  console.log("No");
  break;
  }
  else if (s2 === s1.slice(pos) + s1.slice(0, pos)) {
  console.log("Yes");
  break;
  }
  }
}
shiftingL ("Kate", "teKa");

// Задача 12
function threeArrs (a){
  let b = [];
  let c = [];
  let l = a.length;
  for(let i = 0; i < l; i++){
      let minEl = Math.min(...a);
      if(a.length %2 == 0){
          b.push(minEl);
         a = a.filter(function(f) { return f !== minEl });
      }
      else{
           c.push(minEl);
       a = a.filter(function(f) { return f !== minEl });
      }
  }
  return(console.log(b,c))
}
threeArrs ([3,2,1,100])

// Задача 12 lodash
function middleArr (arr){
  let arr1 = [];
  let arr2 = [];
 
  for(let i = 0; i < 2; i++){
    let minEl = _.min(arr);
    arr1.push(minEl);
    arr = _.pull(arr, minEl);
  }
  for(let i = 0; 2<i<=arr.length ; i++ ){
    let minElement = _.min(arr);
    arr2.push(minElement);
    arr2 = _.reverse(arr2);
    arr = _.pull(arr, minElement);
  }
  arr1 = [arr1[0], ...arr2, arr1[1]];
  console.log(arr1);
  
}
middleArr([3,5,2,4,6,7]) 

//Задача 17
function middleArr (arr){
  let arr1 = [];
  let arr2 = [];
 
  for(let i = 0; i < 2; i++){
    let minEl = Math.min(...arr);
    arr1.push(minEl);
    arr = arr.filter(function(f) { return f !== minEl });
  }
  for(let i = 0; 2<i<=arr.length ; i++ ){
    let minElement = Math.min(...arr);
    arr2.unshift(minElement);
    arr = arr.filter(function(f) { return f !== minElement });
  }
  arr1 = [arr1[0], ...arr2, arr1[1]];
  console.log(arr1);
  
}
middleArr([3,5,2,4,6,7]) // 276543

//Задача 17 lodash
// function middleArr (arr){
//   let arr1 = [];
//   let arr2 = [];
 
//   for(let i = 0; i < 2; i++){
//     let minEl = _.min(arr);
//     arr1.push(minEl);
//     arr = arr.filter(function(f) { return f !== minEl });
//   }
//   for(let i = 0; 2<i<=arr.length ; i++ ){
//     let minElement = _.min(arr);
//     arr2.unshift(minElement);
//     arr = arr.filter(function(f) { return f !== minElement });
//   }
//   arr1 =  _.concat[arr1[0], arr2, arr1[1]];
//   console.log(arr1);
  
// }
// middleArr([3,5,2,4,6,7])

//Задача 16
function generatePassword() {
  const minLength = 6;
  const maxLength = 20;
  const underscoreRegex = /_/;
  const uppercaseRegex = /[A-Z]/g;
  const digitRegex = /\d/g;
  let password = '';
  let numDigits = 0;
  let prevDigit = '';

  while (password.length < minLength || password.length > maxLength ||
         !underscoreRegex.test(password) || (password.match(uppercaseRegex) || []).length < 2 ||
         numDigits > 5 || /(\d)\1/.test(password) || /\d{2}/.test(password)) {
    password = '';
    numDigits = 0;
    prevDigit = '';
    for (let i = 0; i < maxLength; i++) {
      const rand = Math.floor(Math.random() * 94) + 33; 
      const char = String.fromCharCode(rand);
      if (char === '_') {
        password += char;
      } else if (char.match(uppercaseRegex)) {
        password += char;
      } else if (char.match(digitRegex) && numDigits < 5 && char !== prevDigit) {
        password += char;
        numDigits++;
        prevDigit = char;
      } else if (password.length < maxLength) {
        password += char;
      }
    }
  }
  return password;
}
console.log(generatePassword()); 


