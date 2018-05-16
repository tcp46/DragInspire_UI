<template>
  <div id="app">
  <!-- Navigation Bar -->
  <nav class="navbar navbar-inverse">
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#MyNavbar">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#"><img src="/static/img/logo.png" width="190" height="55"></a>
      </div>
      <div class="collapse navbar-collapse" id="myNavbar">
        <ul class="nav navbar-nav navbar-right">
          <li class=""><router-link to="home">Home</router-link></li>
          <li class=""><router-link to="Profile">Profile</router-link></li>
          <li class=""><router-link to="Project">Project</router-link></li>
          <li class=""><a href="#">Login/Register</a></li>
        </ul>
      </div>
    </div>
  </nav>
  <router-view></router-view>
  </div>
</template>

<script>
export default {
    name: 'app'
}
</script>

<style scoped>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /*text-align: center;*/
    color: #2c3e50;
    margin-top: 10px;
    font-size: 20px;
}

* {
    box-sizing: border-box;
}
.container {
    max-width: 600px;
    margin: 0 auto;
}

</style>
