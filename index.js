let express = require('express');
let app = express();//creating an instance of Express
let port = 3000;//specifying the port

//step 2
app.get('/',(req, res)=> res.send('ok'));//implementin the response behaviour

//step 3
app.get('/test',(req,res)=>{
    res.status(200).json({status:200, message:'ok'});
});
app.get('/time',(req,res)=>{
    let currentTime= new Date();
    let hour=currentTime.getHours();
    let minute=currentTime.getMinutes()
    res.status(200).json({status:200, message: `${hour}:${minute<10?'0':''}${minute}`});
});
//step 4
app.get('/hello/:id?',(req,res)=>{//with adding ?, it tells that id is optional
    let userID=req.params.id || 'empty id';//if id is defined, take it, if not set the default to 'empty id'
    res.status(200).json({status:200, message:`Hello, ${userID}`});
});

app.get('/search',(req,res)=>{
    let userSearch=req.query.s;//extract the s value from seach
    if(typeof userSearch!= 'undefined' && userSearch!=""){//if s value is defined and not empty
        res.status(200).json({status:200, message:`ok`, data: userSearch});
    }
    else{
        res.status(500).json({status:500, error: true ,message:`you have to provide a search`});
    }
   
});

app.listen(port,()=>console.log('Express app is running on port 3000'))

