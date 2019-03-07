const express = require('express') ; 
const app = express() ; 
const bodyParser = require('body-parser') ; 
const events = require('events') ; 
const PORT = 80 ; 
var user = [{
    name : 'Quốc Hùng' ,
    classs : '11 Tin' ,
    mathScore : 0 ,
    litScore : 10,
    pos : 1
}]  ; 

app.set('views' , './views') ;
app.set('view engine','pug') ; 
app.use(express.static('public')) ; 
app.use(bodyParser.json()) ; 
app.use(bodyParser.urlencoded({ extended: true })) ;
app.get('/',function(req,res){
    //if (err) throw err ; 
    res.render('index.pug') ; 
});
app.get('/reg',function(req,res){
    res.render('reg.pug') ; 
});
app.get('/regSuccess',function(req,res){
    res.render('regSuccess')
});
app.post('/postReg',function(req,res){
    let name = req.body.name ; 
    let classs = req.body.classs ; 
    let mathScore = req.body.mathScore ; 
    let litScore = req.body.litScore ; 
    let pos = user.length + 1 ;
    //console.log(name) ; 
    let temp = {
        name : name,
        classs : classs, 
        mathScore : mathScore,
        litScore : litScore ,
        pos : pos
    }
    //console.log(temp) ; 
    user.push(temp) ; 
    res.redirect('/regSuccess') ; 
    
});
app.get('/edit',function(req,res){
    res.render('edit',{
        user
    }) ; 
});
app.get('/editt',function(req,res){
    res.render('editt',{
        user
    }) ; 
})
app.get('/edit/:id',function(req,res){
    const lol  = user[req.params.id] ;
    console.log(lol) ; 
    res.render('postEdit',{
        id : req.params.id ,
        temp : lol
    });
});
app.post('/postEdit/:id',function(req,res){
    let id = req.params.id ; 
    let name = req.body.name ; 
    let classs = req.body.classs ; 
    let mathScore = req.body.mathScore ; 
    let litScore = req.body.litScore ; 
    let pos = user.length + 1 ;
    //console.log(name) ; 
    let temp = {
        name : name,
        classs : classs, 
        mathScore : mathScore,
        litScore : litScore ,
        pos : pos
    }
    //console.log(temp) ; 
    user[id] = temp ; 
    
    res.redirect('/edit') ; 
    
});
app.listen(PORT,function(){
    console.log(`App listen on ${PORT}`) ; 
})