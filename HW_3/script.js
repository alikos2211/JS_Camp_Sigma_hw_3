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
//difference([2,1,3,-4]);

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
//difference_lodash([2,1,3,-4]);

// Задача 2
function words_length (string, number){
    var words_arr = string.split(' ');
    console.log(words_arr);
    let res_arr = [];
    for(let i = 0; i <= words_arr.length; i++){
        let arr = words_arr[i].split('');
        console.log(arr);
        for(let a = 0; a <= arr.length; a++){
            if(arr.length <= number){
                res_arr.push(words_arr[i]);
            }
        }
        
        // if(words_arr[i].length <= number){
        //     res_arr.push(words_arr[i]);
        // }
    }
    
    console.log(res_arr);
}
words_length('Я очень сильно люблю JS', 5);