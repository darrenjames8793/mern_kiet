const express = require('express');


const app = express()

app.get('/home',(req,res)=>{
    
    res.send('<h1>Welcome GET</h1>')

})

app.post('/home',(req,res)=>{
    
    res.send('<h1>Welcome POST</h1>')

})

app.put('/home',(req,res)=>{
    
    res.send('<h1>Welcome PUT</h1>')

})

app.delete('/home',(req,res)=>{
    
    res.send('<h1>Welcome DELETE</h1>')

})



app.listen(1400);
