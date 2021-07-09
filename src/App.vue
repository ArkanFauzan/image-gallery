<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div id="navigation">
      <router-link :to="{ name: 'List', params: { search } }">All Images</router-link>&nbsp;&nbsp;&nbsp;
      <router-link :to="{ name: 'My Favourite', params: { search } }">My Favourite Image</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  mounted(){

  },
  data(){
    return{
      search : ""
    }
  },
  components: {
    // HelloWorld,
    // listImage
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#navigation{
  margin-right: 20px ;
  text-align: right;
}
#navigation a{
  text-decoration: none;
  color: black;
}
#navigation a:hover{
  font-weight: bold;
}
</style>
