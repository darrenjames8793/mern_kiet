const express = require("express");
const fs = require("fs");
const fsPromises = require("fs/promises");
//const fsPromises = require("fs/promises");

const app = express();

app.use(express.json());
app.get("/api/products", async (req, res) => {
  const data = await fs.readFileSync("./data.json", "utf-8");
  const arr = JSON.parse(data);

  res.json({
    status: "success",
    results: arr.length,
    data: {
      products: arr,
    },
  });
});

let arrN = [];

app.post("/api/products", async (req, res) => {
  // console.log(Object.keys(req));
  //console.log(req.body);
  const data = req.body;

  //console.log(data);

  const db = await fsPromises.readFile("./data.json", "utf-8");

  const arr = JSON.parse(db);

  const len = arr.length;
  console.log(len);
  const newProduct = data;

  if (len == 0) {
    newProduct.id = 1;
  } else {
    newProduct.id = arr[len - 1].id + 1;
  }
  arr.push(newProduct);
  fsPromises.writeFile("./data.json", JSON.stringify(arr));

  res.json({
    status: 'success',
    results: 1,
    data: {
        newProduct: newProduct,
    }
  })
  
});

app.put('/api/products/:id',async(req,res) => {
    res.send("work in progress...");

    const arr = JSON.parse(await fsPromises.readFile("./data.json","utf-8"));

    
    
    
    //  console.log(req.params);
    //  const data = req.body
    //  console.log(data);
    
    const reqId = req.params.id;
    const data = req.body;
    
    const newArr = arr.map((elem)=>{
        if(elem.id == reqId)
        return data;
    else
    return elem;
}) 

fsPromises.writeFile("./data.json",JSON.stringify(newArr));
});

app.delete('/api/products/:id', async (req,res) => {
    const reqId = parseInt(req.params.id);
    const arr = JSON.parse(await fsPromises.readFile("./data.json","utf-8"));
    const newArr = arr.filter((elem)=>{
        if(elem.id === reqId)
        return false;
        else
        return true;
    })

    fsPromises.writeFile("./data.json",JSON.stringify(newArr));
    
    res.status(204);
    res.json({
        status: 'success',
        data: {
            newProduct: null,
        }
    })
})

app.listen(1400, console.log("server started....."));
