const express = require('express') ; 
const app = express() ; 
const bodyParser = require('body-parser') ; 
const events = require('events') ; 
const controller = require('./controller') ; 
const PORT = 80 ; 
var user = [{
    name : 'Quốc Hùng',
    classs : '11 Tin' , 
    mathScore : '2' ,
    litScore : '3',
    engScore : '3',
    pos : 1,
    ave : controller.ave([2,3,3]), 
    nhanPham : controller.nhanPham(controller.ave([2,3,3])) 
}]  ; 

app.set('views' , './views') ;
app.set('view engine','pug') ; 
app.use(express.static('public')) ; 
app.use(bodyParser.json()) ; 
app.use(bodyParser.urlencoded({ extended: true })) ;


app.get('/',function(req,res){
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
    let engScore = req.body.engScore ; 
    let ave = controller.ave([parseInt(mathScore),parseInt(litScore),parseInt(engScore)]) ; 
    let pos = user.length + 1 ;
    let temp = {
        name ,
        classs , 
        mathScore ,
        litScore ,
        engScore ,
        pos ,
        ave , 
        nhanPham : controller.nhanPham(ave) 
    }
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
    let engScore = req.body.engScore ; 
    let ave = controller.ave([parseInt(mathScore),parseInt(litScore),parseInt(engScore)]) ;
    let pos = user[id].pos ;
    let temp = {
        name ,
        classs , 
        mathScore ,
        litScore ,
        engScore ,
        pos ,
        ave , 
        nhanPham : controller.nhanPham(ave)  
    }
    user[id] = temp ; 
    res.redirect('/edit') ; 
});
app.listen(PORT,function(){
    console.log(`App listen on port ${PORT}`) ; 
})