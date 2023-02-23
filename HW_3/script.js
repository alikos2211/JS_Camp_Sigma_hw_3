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
  wordsnumbers('Я очень сильно люблю JS', 5)

  // Задача 3
function ending (str1, str2){
  return console.log(str1.endsWith(str2));
}
ending('abc', 'bc');

// Задача 4
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

// Задача 6 РАЗОБРАТЬ И ДОДЕЛАТЬ ---------------------------------------------------------------------------
function differenceArr (arr1, arr2){
let arr = [];
for(let i = 0; i <= arr1.length; i++){
  arr.push(arr1[i]);
  for(let k = 0; k <= arr2.length; k++){
    if(!(arr.includes(arr2[i]))){
      arr.push(arr2[i]);
    }
  }
}
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
    let arr = path.split('/');
    return console.log(arr[arr.length - 1].split('.')[0]);
}
getFilename('c:/WebServers/home/testsite/www/myfile.txt');

// Задача 11 ДОДЕЛАТЬ ------------------------------------------------------------------------------
function twoString (str1, str2){
  if(str1.length == str2.length){
    for(let i = 0; i<= str2.length; i++){
      if (str1.includes(str2[i])){
        console.log("Yes");
      }
      else {
        console.log("No");
      }
    }
  }
  else {
    console.log("No");
  }
}
twoString ('kate', 'teka');

// Задача 12
function threeArrs (a){
  let b = [];
  let c = [];
  for(let i = 0; i < a.length; i++){
    for(let j = 0; j < ( a.length - i -1 ); j++){
      if(a[j] > a[j+1]){
        let temp = a[j];
        a[j] = a[j + 1];
        a[j+1] = temp;
      }
    }
  }
  console.log(a);
    for(let k = 0; k <= a.length; k++){
    b.push(a[k]);
    a = a.shift;
    c.push(a[k+1]);
    a = a.shift;
  }
  return console.log (b, c);
}
threeArrs ([3,2,1,4])