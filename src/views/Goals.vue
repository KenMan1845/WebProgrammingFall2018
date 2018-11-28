<template>
  <div>
  <div class="userDataSubmissions">
    {{loggedIn}}

    <h1>Please Sign in to Continue</h1>
    <h2>Signed in as: {{name}}</h2>

    <form id="signup-form" @click.prevent>
      <input type="text" placeholder="Enter your username" v-model="name"/>
      <button @click.prevent="processForm()">Submit</button>
    </form>
    <p>
      User is named: {{userList}}</p>
  </div>

  

  
  <div class="friendAdd">
      <h3>Adding friend of id: {{id}}</h3>
      <form id="signup-form" @click.prevent="">
        <input type="text" placeholder="Enter a user id" v-model="id"/>
        <button >Submit</button>
      </form>
      <p>
        <i v-if="id === userdata.id">Userdata of id {{id}} is: {{userdata}}</i>
        <i v-else>No user data could be found.</i>
      </p>
  </div>
  
<button @click.prevent="login()">Login</button>

</div>
</template>

<script>
  import * as fb from '@/services/facebook';
  import * as api from '@/services/api_access'
  export default{
    data(){
        return{
          name: '',
          id: '',
          loggedIn: '',
          userdata: '',
          userList: [],
        }
    },
    methods: {
      processForm() {
        if(this.name.length > 0){
          api.registerUser(this.name)
          .then((response) => {
            this.userList.push(response);
          });
          this.name = '';
        }
      },
      userSearch() {
        if(this.id.length > 0){
          api.findUserById(this.id)
          .then((response) => {
              //this.name = response.name;
              this.id = response.id;
              this.userdata = response;
          });
        }
      },
      login() {
            fb.FBLogin()
            api.getLastUser()
            .then((response) => {
              //console.log('TRREST');
              this.name = response.name;
              this.loggedIn = 'User logged in is: ' + response.name;
              this.userList.push(response);
            });
      }, 
    },
    beforeMount(){
      this.login();
    },
  }
</script>