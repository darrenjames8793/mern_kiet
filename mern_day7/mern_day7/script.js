const { log } = require('console');
const fs = require('fs');


const data = fs.readFileSync('./data.json','utf-8');

const http = require('http');
const url = require('url')

const dataObj = JSON.parse(data);      

let inputElement = `
<form action='/product'>
<input type="text" name="productName">
<button type="submit">search</button>
</form>
`


//console.log(dataObj);


const cardTemplate = fs.readFileSync('./home.html','utf-8')
const productTemplate = fs.readFileSync('./productTmp.html','utf-8');

let result = [];

for(let i=0; i<dataObj.length; i++)
{
    let tmp = cardTemplate;
   tmp = tmp.replace('$TITLE$',dataObj[i].title)
            .replace('$img_src$',dataObj[i].images[0])
            .replace('$product_link$',`/product?id=${i}`);
   result.push(tmp)
}

result = result.join(' ');




const server = http.createServer((req,res) => {

res.writeHead(200, {
    'content-type': 'text/html',
});
         
const route = req.url;  
console.log(route);  

const path = url.parse(route,true);
console.log(path);

const pathName = path.pathname;
const query = path.query;

 if(pathName==='/home')
{
   
    res.end(inputElement + result)
}
else if(pathName==='/product')
{
    const id = query.id;
    const productData = dataObj[id];
    let pName = query.productName;

    

     if(pName){
        const result = dataObj.filter((elem)=>{
        
            if(elem.title.includes(pName)){
                return true;
            }
            else{
                return false;
            }

        })
        
        res.end(JSON.stringify(result));
    }
    else{
        res.end('<h3>Error...</h3>')
    }
   
    let tmp = productTemplate;
   tmp = tmp.replace('$TITLE$',productData.title)
            .replace('$img1$',productData.images[0])
            .replace('$img2$',productData.images[1])
            .replace('$img3$',productData.images[2])
            .replace('$price$','Price: $ '+productData.price)
            .replace('$des$',productData.description);
    
            
    res.write(tmp);
    
}
else{
    res.write('error 404.....')
}


res.end();

})




server.listen(1400, console.log("server started...."))
