const express = require("express");
const app = express()

app.use(express.static(__dirname + '/public/'));
app.set('view engine', 'ejs');

//routes 
app.use((req,res)=>{
    res.render('home.ejs');
    res.json({msg:"hosting successfull"})
})

let port = 3000 || process.env.PORT;
app.listen(port, (req, res) => {
    console.log(`The server is running on the port ${port}`);
})
