

let vrr = [2,10,30,45];


// function printPretty(elem,b,c){
//     console.log(': ',elem,b,c);

// }

// function printVrr(vrr,b,c){
//    vrr.forEach(printPretty(vrr,b,c));
// }

// printVrr(vrr);




//console.log('GEC Strt');

// function printPretty(){

//     console.log('prettyStart');
//     let ans = 2+3;

//     console.log(ans);
//     console.log('prettyEnd');
// }


// setTimeout(printPretty,1000);

// console.log('GEC End');


// const btn = document.getElementById('btn');

// btn.addEventListener("click",printPretty);


// console.log("Start");

// const req = fetch("https://api.github.com/users/deepak3440")

// console.log(req);

// req.then(()=> console.log("fetched..."))
// console.log("End");



// console.log('start');

// const req = fetch('https://dummyjson.com/products/1')
// const res = req.then(res => res.json())

// res.then((data)=>console.log(data));
            

// console.log('end');


//promise chaining ......

console.log('start');

fetch('https://dummyjson.com/products/1').then(res => res.json()).then((data)=>console.log(data)).catch((err)=>console.log(err));

console.log('end');
