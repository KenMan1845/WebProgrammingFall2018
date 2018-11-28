//list to hold all of our users
class UserList {
    constructor(){
        this.users = [];
    }
}

//user data
class User {
    constructor(id, name, isLoggedIn){
        this.id = id;
        //this.password = password;
        this.name = name;
        this.isLoggedIn = isLoggedIn;
        this.currWeight = 0;
        this.goalWeight = 0;
        this.completedExercises = [];
        this.friends = [];
        this.calories = 0;
    }
}

//data on user profile which friends can see, set on a per-friend basis. Last four variables are booleans (representing visibility)
class Friend {
    constructor(id, name, currWeight, goalWeight, completedExercises, friends, calories){
        this.id = id;
        this.name = name;
        this.currWeight = currWeight;
        this.goalWeight = goalWeight;
        this.completedExercises = completedExercises;
        this.friends = friends;
        this.calories = calories;
    }
}

module.exports = { User, UserList, Friend }