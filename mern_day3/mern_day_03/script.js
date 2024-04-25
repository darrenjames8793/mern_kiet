// let a = new String("Hello");
// let b = "Hello";

// if(a==b)
// {
//     console.log("Yes");
// }
// else
// {
//     console.log("No");
// }

// const obj = {
//     "name" : "hello",
//     "lastName" : "world"
// };

// obj.age = 20;

// const str = JSON.stringify(obj);
// document.write(str);



// const arr = [1,2,3,4];
// arr[10] = 20; 
// console.log(arr);

// // console.log(typeof(arr))

// function checkIfArr(val)
// {
//     return Array.isArray(val);
// }

// function checkIfObj(val)
// {
//    if(Array.isArray(val) || val==null)
//    return false;
//    else if(typeof(val)=="object")
//    return true;
//    else
//    return false;
   
   
// }


//  console.log(checkIfArr([1,2,3]));

//  console.log(checkIfObj());

//  const arr = ['name',2];

//  const obj1 = {
//     'name' : "ajay",
//     age:20,
//     1:'else',
//  };

//  for(let i=0; i<2 ;i++)
//  {
//     console.log(obj[i]);
//  }



// for of loop

// for(let i of arr){
//     console.log(i);
// }


//for in loop 
//order doesnt matter in object iteration during looping 

// for(let i in obj1){
//     console.log(i);
// }


// console.log(innerHeight);
// console.log(innerWidth);


// console.log(window.document)
// console.log(window)


// console.dir(window.document)
// console.dir(window)

// const val = document.getElementById('firstPara');


// val.style.color = "green";


// const res = document.querySelectorAll('p');

// console.log(res);


//const res = document.getElementsByTagName("div");

//res[2].innerHTML = "<h1> hello world </h1>";

//res[2].setAttribute('tagName','h1');


const res = document.getElementsByTagName('div');



const ne = document.createElement("h3");

ne.innerText = "Dynamic test";

//to add the h3 in our html 
res[0].append(ne);

const tag = document.querySelectorAll('h3');



res[0].removeChild(tag[0]);

console.log(ne);