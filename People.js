const express = require('express');
const {User, Exercise, Goal, People} = require('./User');
const Joi = require('joi');
const app = express.Router();
app.use(express.json());

var people = new People();
var mainuser = new User();
let userlistx = [];


app.get('/', (req, res) => {
    res.send(people.userlist);
});

app.post('/', (req, res) => {
    const { error } = validateUser(req.body);
    if (error){
      res.status(400).send(error.details[0].message);
      return;
  }
    const user = new User(req.body.username, req.body.password);
    users.userlist.push(user);
    userlistx.push(user.username);
    res.send(user);
});


app.get('/:username/goals', (req, res) => {
    mainuser = users.userlist.find(c => c.username === req.params.username);
    res.send(mainuser.goals);
});
app.post('/:username/goals', (req, res) => {
    const goal = new Goal(req.body.type, req.body.value);
    mainuser = People.userlist.find(c => c.username === req.params.username);
    goal.id = mainuser.goals.length + 1;
    mainuser.goals.push(goal);
    res.send(mainuser.goals);
});
app.get('/:username/goals/:id',(req, res) =>{
    mainuser = People.userlist.find(c => c.username === req.params.username);
    res.send(mainuser.goals[parseInt(req.params.id)-1]);
});

app.get('/:username/exercises', (req, res) => {
    mainuser = People.userlist.find(c => c.username === req.params.username);
    res.send(mainuser.exercises);
});

app.post('/:username/exercises', (req, res) => {
    const exercise = new Exercise(req.body.type, req.body.time, req.body.duration);
    mainuser = People.userlist.find(c => c.username === req.params.username);
    exercise.id = mainuser.exercises.length + 1;
    mainuser.exercises.push(exercise);
    res.send(mainuser.exercises);
});
app.get('/:username/exercises/:id',(req, res) =>{
    mainuser = People.userlist.find(c => c.username === req.params.username);
    res.send(mainuser.exercises[parseInt(req.params.id)-1]);
});
app.get('/:username/friends', (req, res) => {
    mainuser = userlistx.find(c => c.username === req.params.username);
    if (!mainuser) res.status(404).send('The username does not exist.');
    res.send(mainuser.friends);
});
app.post('/:username/friends', (req, res) => {
    const friend = userlistx.find(c => c.username === req.body.username);
    if (!friend) res.status(404).send('The username does not exist.');
    mainuser = userlistx.find(c => c.username === req.params.username);
    mainuser.friends.push(friend);
    res.send(mainuser.friends);

    
});

app.get('/:username', (req, res) => {
    mainuser = People.userlist.find(c => c.username === req.params.username);
    if (!mainuser) res.status(404).send('The username does not exist.');
    res.send(mainuser);
});

app.put('/:username', (req, res) => {
    mainuser = People.userlist.find(c => c.username === req.params.username);
    if (!mainuser) res.status(404).send('The username does not exist.');

      const { error } = validateUser(req.body);
      if (error){
        res.status(400).send(error.details[0].message);
        return;
    }
    mainuser.username = req.body.username;
    res.send(mainuser);
});

app.put('/:password', (req, res) => {
    mainuser = People.userlist.find(c => c.password === req.params.password);
})
module.exports = app;