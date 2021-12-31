const http = require('http');

const hostname = 'localhost';
const document = 'document';

const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const port = 80;



// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded())

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory
 
// ENDPOINTS
app.get('/contact', (req, res)=>{

    res.status(200).render('contact44.pug');
})
app.get('/index', (req, res)=>{
   
    res.status(200).render('about.pug');
})
app.get('/login', (req, res)=>{

    res.status(200).render('login.pug');
})
app.get('/getattendance', (req, res)=>{

    res.status(200).render('attendance.pug');
})
app.get('/attendance2', (req, res)=>{
   
    res.status(200).render('attendance2.pug');
})
app.get('/attendance3', (req, res)=>{
 
    res.status(200).render('attendance3.pug');
})
app.get('/attendance4', (req, res)=>{
    // const con = "This is the best content on the internet so far so use it wisely"
    // const params = {'title': 'PubG is the best game', "content": con}
    res.status(200).render('attendance4.pug');
})
app.get('/stuinfo', (req, res)=>{
    // const con = "This is the best content on the internet so far so use it wisely"
    // const params = {'title': 'PubG is the best game', "content": con}
    res.status(200).render('stuinfo.pug');
})
// app.get('/about', (req,res) => {
//     res.setHeader('Content-Type', 'text/html');
//     res.end(about);
// })

app.post('/', (req, res)=>{
    name = req.body.name
    email = req.body.email
    phone = req.body.phone
    problem = req.body.problem


    
   
   

    let outputToWrite = `the name of the student is ${name},
     and the email is${email} , 
     and phone number is ${phone}, 
     with th query as ${problem}`
    fs.writeFileSync('output.txt', outputToWrite)
    const params = {'message': 'Your form has been submitted successfully'}
    // res.status(200).render('contact44.pug', params);
    res.end('<h1>Form has been saved successfully</h1>')

})

app.post('/getattendance', (req, res)=>{
    email = req.body.email
    password = req.body.password

    // res.setHeader('Content-Type', 'text/html');

    
   if(email == "pruthviraj.p@somaiya.edu")
   {
       if(password == "pruthviraj.p@somaiya.edu")
       {
        res.status(200).render('attendance.pug');
       }
       else{
        res.end("<h1>Wrong password</h1>");

       }
   }
   else if(email === "satyam.msp@somaiya.edu")
   {
    if(password == "satyam.msp@somaiya.edu")
    {
     res.status(200).render('attendance.pug');
    }
    else{
        res.end("<h1>Wrong password</h1>");
    }
   }
   else{
    res.end("<h1>Please enter valid somaiya email</h1>");
    
   }

    
    // res.status(200).render('index.pug', params);

})

// START THE SERVER
app.listen(port, () => console.log(`This app is listening on port http://${hostname}:${port}/index`));   