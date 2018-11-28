const api_root = "http://localhost:80/users";
export let userId = null;

/*export function GetState(){
    return myFetch(api_root + "/");
}*/

export function registerUser(username, FBuserId){
    return myFetch(api_root + "/", {name: username, id: FBuserId});
}

export function findUserById(userId){
    //console.log("Fetching... : " + myFetch(api_root + "/" + userId));
    //return myFetch(api_root + "/getuser/", {id: userId});
    return myFetch(api_root + "/" + userId);
}

export function Login(name, fbid, access_token){
    return myFetch(api_root + `/players`, { name, fbid, access_token });
          //  .then(x=> playerId = x.id);
}

export function getLastUser(){
    return myFetch(api_root + "/lastuser/");
          //  .then(x=> playerId = x.id);
}

function myFetch(url = ``, data = null) {
    let options = {
          cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
          credentials: "same-origin", // include, same-origin, *omit
          headers: {
              userId: userId
          }
    };
    if(data){
        options = { 
          ...options,
          method:  "POST", // *GET, POST, PUT, DELETE, etc.
          headers: {
              ...options.headers,
              "Content-Type": "application/json; charset=utf-8",
              // "Content-Type": "application/x-www-form-urlencoded",
          },
          body: JSON.stringify(data), // body data type must match "Content-Type" header
        };
    }
    return fetch(url, options)
    .then(response =>{
      return response.json();
    }); // parses response to JSON
}