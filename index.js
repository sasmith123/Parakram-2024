const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(__dirname + '/public/'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//routes 
app.use((req,res)=>{
    return res.render('home.ejs');
})

let port = 3000 || process.env.PORT;
app.listen(port, (req, res) => {
    console.log(`The server is running on the port ${port}`);
})
