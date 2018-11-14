<template>
  <div id="app" class="container">
    <div class="display-3">
      <img alt="Vue logo" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/facebook/65/flexed-biceps_1f4aa.png" id="logo">
      GetFit
    </div>
    <Nav />
    <router-view/>
  </div>
</template>

<style lang="scss">
@import "../node_modules/bootstrap/scss/bootstrap.scss";
#logo { height: 50px;}
</style>

<script>


// @ is an alias to /src

document.body.style.backgroundColor = 'red';
import Nav from '@/components/Nav.vue'

export default {
  name: 'home',
  components: {
    Nav
  }
}
</script>

