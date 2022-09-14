import express, {Application} from 'express';
import bodyParse from 'body-parser';
import {readFile} from './utils'
const app:Application = express();


app.use(bodyParse.urlencoded({extended:true}))
app.use(bodyParse.json())

// 设置跨域
app.all('*',(req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*') // 所有请求源都可以跨域
    res.header('Access-Control-Allow-methods', 'POST,GET,PUT,DELETE,OPTIONS');
    next();
})
app.get('/todolist',function(req,res){
    const todolist:string = readFile('todo.json')
    console.log(todolist)
    res.send(todolist)

})
app.post('/toggle',function(req,res){

})

app.post('/remove',function(req,res){

})
app.post('/add',function(req,res){

})

app.listen(8080,function(){
    console.log('listen  8080,')

})
