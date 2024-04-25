//use these functions

//1) flatmap
//2) map
//3) flat

// const fs = require('fs');

// const data =  fs.readFileSync('./myReadMe.txt',{encoding: 'utf-8'});

// console.log(data);

// console.log(data.toString());

// const fs = require('fs');

// fs.writeFileSync('./logs.txt',"hello world");

// const fs = require('fs');
// console.log("start");
// const data =  fs.readFileSync('./myReadMe.txt',{encoding: 'utf-8'});
// console.log(data);
// console.log("end");

// const fsPromises = require('fs/promises');

// console.log("start");

// const pr = fsPromises.readFile('./myReadMe.txt', {encoding: 'utf-8'});

// console.log(pr);

// pr.then((res)=> {
//     console.log(res);

// })
// .catch((err)=>{
//     console.log(err);
// })

// console.log("end");

//callback in file system

// const fs = require('fs');

// fs.readFile('./myReadMe.txt', {encoding: 'utf-8'}, (err,data)=>{

//     console.log(data);
// });

// const http = require('http');

// const app = http.createServer((req,res) => {
//     console.log('Request recieved');
//     console.log(req.url);
//     res.end("hello");
// });

// app.listen(1400);

const fetch = require('cross-fetch');

const http = require("http");

let page;


const fs = require('fs');

// fetch('https://dummyjson.com/products')
// .then(res => res.json())
// .then(json => console.log(json));

const data = fs.readFileSync('./data.json','utf-8');

const dataObj = JSON.parse(data);

//console.log(dataObj);

const htmlTemplate = fs.readFileSync('./page.html','utf-8');

const cardTemplate = fs.readFileSync('./card.html','utf-8');

// const card1 = cardTemplate
//   .replace("__TITLE__", "Xiaomi Note 11 pro")
//   .replace("__INFO__", "CHINESE Manufacturer");

// const card2 = cardTemplate
//   .replace("__TITLE__", "Apple iphone 11")
//   .replace("__INFO__", "CHINESE Manufacturer....");

//   let allCards = card1 + card2;

function render(dtd)
{
  var url = new URL("localhost:1400/?id=1");

// If your expected result is "http://foo.bar/?x=1&y=2&x=42"
url.searchParams.append('id', dtd);

// If your expected result is "http://foo.bar/?x=42&y=2"
url.searchParams.set('id', dtd);
}




const server = http.createServer((req, res) => {
    console.log("request recieved");
    console.log(req.url);
    
    res.writeHead(200, {
        "content-type": "text/html",
    });
    
    let products = dataObj.products;

    for(let i=0; i<dataObj.products.length;i++)
    { 
      // let img = document.createElement('img');
      // img.src = products[i].images;
      // document.getElementsByClassName('product-card').appendChild(img);

        const card1 = cardTemplate
        .replace("__BRAND__",products[i].brand)
        .replace("__TITLE__", products[i].title)
        .replace("__PRICE__","Price: $ " + products[i].price)
        .replace("__RATING__","Rating: " + products[i].rating)
        .replace("__INFO__", products[i].description)
        .replace("IMGE",products[i].images[0])
        .replace("dtd",products[i].id);
         
        
        
        page = htmlTemplate.replace("__PRODUCTS_CARDS__", card1);
      res.write(page);
  } 
  res.end();
});

server.listen(1400, () => {
  console.log(".....server..started.......");
});
