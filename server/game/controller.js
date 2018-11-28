const express = require('express');
const {User, /*Friend,*/ UserList } = require('./model');

const app = express.Router();

//Global variables
var userList = new UserList();
var lastUser;


app.get('/', (req, res) => {
    res.send(userList);
});


app.post('/', (req, res) => {
        const user = new User(req.body.id, req.body.name, false);
        userList.game.push(user);
        res.send(user);
        lastUser = user;
    
    console.log('Registering ' + lastUser.name);
    console.log('user submitted is named ' + req.body.name + '; Their id is ' + req.body.id);
});

app.get('/lastuser/', (req, res) => {
    console.log(lastUser.name + ' is the last user');
    res.send(lastUser);
});


app.get('/:id', (req, res) => {
    
    console.log(req.params.id);
    const user = userList.game.find(c => c.id == req.params.id );
    if(user){
        console.log('displaying user:' + user.name);
        res.send(user);
    }
    else{ 
        res.status(404).send('User with given id not found');
    }
});

   

app.post('/getuser/', (req, res) => {
    const user = userList.game.find(c => c.id === parseInt(req.body.id));
    if(!user){
        res.status(404).send('User with given id not found');
    }
    else{
        res.send(user);
    }
});

module.exports = app;