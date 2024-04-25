const fsPromises = require('fs/promises');


const getAllProducts = async (req,res) => {
    const data = await fsPromises.readFile('./data.json');
    const arr = JSON.parse(data);
    res.status(200);
    res.json({
        status:"success",
        results: arr.length,
        data: {
            products:arr,
        },
    })
}

const addProduct = async (req,res) =>{
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
    status: "success",
    results: 1,
    data: {
      newProduct: newProduct,
    },
  });
}

const replaceProduct = async (req, res) => {
    res.send("work in progress...");
  
    const arr = JSON.parse(await fsPromises.readFile("./data.json", "utf-8"));
  
    //  console.log(req.params);
    //  const data = req.body
    //  console.log(data);
  
    const reqId = req.params.id;
    const data = req.body;
  
    const newArr = arr.map((elem) => {
      if (elem.id == reqId) return data;
      else return elem;
    });
  
    fsPromises.writeFile("./data.json", JSON.stringify(newArr));

}


const deleteProduct = async (req, res) => {
    const reqId = parseInt(req.params.id);
    const arr = JSON.parse(await fsPromises.readFile("./data.json", "utf-8"));
    const newArr = arr.filter((elem) => {
      if (elem.id === reqId) return false;
      else return true;
    });
  
    fsPromises.writeFile("./data.json", JSON.stringify(newArr));
  
    res.status(204);
    res.json({
      status: "success",
      data: {
        newProduct: null,
      },
    });
  }

  const getUser = (req, res) => {
    // fsPromises.appendFile('./log.txt',req.url+"\t"+"---> "+Date()+'\n');
    //next();
    res.status(504);
    res.json(
      {
        status: "failed",
        error_msg: "error occured"
      }
    )
    res.send("error occured.....")
}

module.exports = {
    addProduct,
    getAllProducts,
    replaceProduct,
    deleteProduct,
    getUser

}