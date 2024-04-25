
// setTimeout(()=>{
//     console.log('timeout1.....');
// },0);

// console.log('strt');

// setTimeout(()=>{
//     console.log('timeout2.....');
// },0);

// console.log('intermediate');

// console.log('end');



// function createOrder(x,fn){
//     console.log(x);

//       setTimeout(()=>fn('lik5656'),1000);
//       setTimeout(()=>fn('lik5656'),1000);
// }

// function makePayment(orderId){
//     console.log(orderId);
// }

// createOrder('tool',makePayment);



// Promises

// const pr =new Promise((res,err)=>{

//    if(true){
     
//     setTimeout(()=>{
//       res();
//     },5000)
       
//    }
//    else{
//     err();
//    }

// });

// console.log(pr);

// setTimeout(()=>{
//    console.log(pr);
// },6000)


// setTimeout(()=>{
//     console.log('first timeout...');
// },0);

// const pr = new Promise((res,err) => {
//     // setTimeout(()=>{
//     //     res("done-9090");
//     // },10000)

//     setTimeout(()=>{
//         err("some error occured")
//     },0)
// })

// pr.then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })


// setTimeout(function abc() {
//     console.log('Im one');
// },0)

// const pr = new Promise((res,rej)=>{
//     setTimeout(()=>{
//         res('done')
//     },0);
// })

// pr.then( function b(res){
//     console.log("promise completed: ",res);
// });

// setTimeout(function xyz(){
//     console.log('Im two');
// },0)



//map 



const vrr = [10,22,33];

//const as = vrr.map((x)=>parseInt(x));

//console.log(as);

// const newVrr = vrr.filter((x,i,grr)=>{
//     if(x>20)
//     return true;
//     // else
//     // return false;
// })

const brr = [
    'delhi,India',
    'mumbai-india',
    'Shanghai,China',
    'Bejing, China',
    'Washington,USA',
    'Texas, USA'

]

//const jrr = brr.filter((x)=>x.toLowerCase().includes('india'))



//console.log(jrr);


//study reduce

// const krr = [14,16,78,99];

// const ans = krr.reduce((tot,currEle,trr,indx)=>{
  
    

// });


//console.log(ans);


const str = ['da', 'rr' ,'en'];

const ans = str.reduce((tot,curr) => {
    console.log(tot,curr);
    return tot + curr
});


console.log(ans);




