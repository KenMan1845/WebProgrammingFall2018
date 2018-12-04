<template>
  <div>
  <div class="userDataSubmissions">
    
  
    <h1>Please Login to Continue</h1>
    

      <div v-if="loggedIn === null">
    <button @click.prevent="login">Login</button>
    </div>
    <div id="submit" >
      <input type="text" placeholder="Enter your username" v-model="username"/>
      <button @click.prevent="Submit">Submit</button>
      
    </div>
    <p>
      User logged in: {{name.userList}}</p>

    <div id="friends">
      <p>
        Friends List: {{"[user: Dan, Goal Weight: 175, Exercises: Jogging,Swimming user: David, Goal Weight: 200, Exercises: Lifting Weights,Basketball user: Molly, Goal Weight: 150, Exercises: Dance, Gymnastics]"}}</p>


    </div>
    
    <button @click.prevent="login()">Login</button>

  </div>

  </div>

</template>

<script>
  import * as fb from '@/services/facebook';
  import * as api from '@/services/api_access'
  export default{
    data(){
        return{
         name: {
          username: '',
          id: '',
          loggedIn: '',
          userdata: '',
          userList: ["Kenny"],
         }
          }
        
    },
     methods: {
       Submit(){
          if(this.username.length > 0){
               api.registerUser(this.username)
          .then((response) => {
            this.userList.push(response);
          });
          this.username = '';
          this.id = ''
            }
        },
        login() {
            fb.FBLogin(() => {
              api.getCurrentUser()
              .then((response) => {
                this.loggedIn = response;
                this.id = response.id;
                this.userList.push(response);
              })
            })
        }, 
    
    beforeMount(){
      this.login();
    },
     }
  }
  
</script>
