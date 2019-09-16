const express = require('express')
const app = express()

//set the view engine to ejs
app.set('view engine','ejs');
//set the directory of views
app.set('views','./views');

app.get('/', (req, res) => {    
    res.render('register');
    console.log("Registration page");
});

app.post('/',function(req,res){
    res.redirect('/login');
});

app.get('/login',function(req,res){
    res.render('login');
    console.log("Login page");
});

app.post('/login',function(req,res){
    res.render('locate');
});

app.listen(3000, () => { console.log('Server is up on 3000')})