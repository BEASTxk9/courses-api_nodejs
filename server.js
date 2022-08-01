// import express
const express = require('express');
// const path = require('path');

// call express to variable
const server = express();

// listen for requests
server.listen(3000);


// router
// 1. first argument is the path
// 2. seconnd argument is a function

// index router
server.get('/', (req, res) => {
res.sendFile('./views/index.html', {root:__dirname}, );
});

// api
server.get('/courses', (req, res) => {
    res.sendFile('./views/index.html', {root:__dirname}, );
    res.send(JSON.stringify(courses));
    });

server.get('/courses/1', (req, res) => {
    res.sendFile('./views/index.html', {root:__dirname}, );
    res.send(JSON.stringify(courses[0]));
    });

    server.get('/courses/2', (req, res) => {
        res.sendFile('./views/index.html', {root:__dirname}, );
        res.send(JSON.stringify(courses[1]));
        });
        
        server.get('/courses/3', (req, res) => {
            res.sendFile('./views/index.html', {root:__dirname}, );
            res.send(JSON.stringify(courses[2]));
            });        

// about router
server.get('/about', (req, res) => {
res.sendFile('./views/about.html', {root:__dirname});
});

// 404 page router
server.use((req, res) => {
    res.status(404).sendFile('./views/404.html', {root:__dirname});
});

// redirect
server.get('/about-us', (req, res) => {
    res.redirect('./about');
});


// __________________________

let courses = [
    {
    id: 1,
     name: 'Software Engineering'
    },
    {
    id: 2,
     name: 'Web Development'
    },
    {
    id: 3,
     name: "Database Management"
    }
    ];

let i = -1;

setTimeout(() => {
        
        console.log("___END___");
        clearInterval(interval);
        }, 4000);
              
let interval = setInterval(() => {
            i += 1
           console.log(courses[i])
        if(i>=4){
            clearInterval(interval)
        }
        }, 1000);
       

// const port = parseInt(process.env.port) || 4000;
// let courses = [
//     {
//         id: 1, name: 'Software Engineering'
//     },
//     {
//         id: 2, name: 'Web Development'
//     },
//     {
//         id: 3, name: "Database Management"
//     }
// ];
// server.listen(port, ()=> {
//     console.log(`Server is running at port ${port}`);
// })
// server.get('/', (req, res)=> {
//     res.send(courses);
// });
// server.get('/courses/:id', (req, res)=> {
//     const index = parseInt(req.params.id) - 1;
//     if(index < courses.length) {
//         res.send(courses[index]);
//     }else {
//         res.send('Course was not found');
//     }
// });