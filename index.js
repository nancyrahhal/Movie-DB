let express = require('express');
let app = express();//creating an instance of Express
let port = 3000;//specifying the port

app.get('/',(req, res)=> res.send('ok'));//implementin the response behaviour
app.listen(port,()=>console.log('Express app is running on port 3000'))