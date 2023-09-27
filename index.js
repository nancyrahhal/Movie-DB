let express = require('express');
let app = express();//creating an instance of Express
let port = 3000;//specifying the port

//step5
const movies = [
    { title: 'Jaws', year: 1975, rating: 8 },
    { title: 'Avatar', year: 2009, rating: 7.8 },
    { title: 'Brazil', year: 1985, rating: 8 },
    { title: 'الإرهاب والكباب‎', year: 1992, rating: 6.2 }
]

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

//step 5


app.get('/movies/add',(req,res)=>{
    res.status(200).json({status:200, message:'create'});
});
// app.get('/movies/get',(req,res)=>{
//     res.status(200).json({status:200, data:movies});
// });
app.get('/movies/edit',(req,res)=>{
    res.status(200).json({status:200, message:'update'});
});
app.get('/movies/delete',(req,res)=>{
    res.status(200).json({status:200, message:'delete'});
});

//step 6
app.get('/movies/get/:condition?',(req,res)=>{
    let getBy=req.params.condition;
    if(getBy=='by-date'){
        let sortedByDate=movies.sort((a,b)=>a.year-b.year);
        res.status(200).json({status:200, data:sortedByDate});
    }
    else if(getBy=='by-rating'){
        let sortedByRating=movies.sort((a,b)=>a.rating-b.rating);
        res.status(200).json({status:200, data:sortedByRating});
    }
    else if(getBy=='by-title'){
        let sortedByTitle=movies.sort((a,b)=>a.title.localeCompare(b.title));
        res.status(200).json({status:200, data:sortedByTitle});
    }
    res.status(200).json({status:200, data:movies});
});


app.listen(port,()=>console.log('Express app is running on port 3000'))

