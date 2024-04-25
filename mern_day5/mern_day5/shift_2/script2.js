//const obj = require('./script');




// obj.sum(2,4);
// obj.mul(2,4);

// const {sum,mul,name} = require('./script');

// sum(2,4);
// mul(9,8);

// console.log(name);

// var figlet = require("figlet");

// figlet("hello world", function (err, data) {
//   if (err) {
//     console.log("Something went wrong...");
//     console.dir(err);
//     return;
//   }
  
//   console.log(data);

// });



// fetch('https://api.github.com/users/deepak3440')
//   .then((res)=>{
//     return res.json();
//   })
//   .then((data)=>{
//       console.log(data);
//   })
//   .catch((err)=>{
//     console.log(err);
//   });


//async await

// const fetch = require('cross-fetch');

// console.log('start');

// async function getApi(){
//       console.log('api calling.....');
//     const pr = await fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/delhi?key=ZWMDKK78S7S4JVVJWN24XDWCH');
  
//     console.log('making json.....');
//   const data = await pr.json();

// //  console.log(data);
//   console.log(':: fetched-data ::');

// }


// getApi();

// console.log('end');




console.log('start');

async function callAPI(){

    const pr = await new Promise((res,rej)=>{

         console.log('promise 1...');

         setTimeout(()=>{
            console.log('timeout-1.....');
            res('done');
         },10000);

    })

    console.log('promise 1 completed..');

   
}

callAPI();