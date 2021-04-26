<template>
  <div id="app">
    <Head></Head>
    <AboutMe></AboutMe>
    <Experience></Experience>
    <Skills></Skills>
    <Project></Project>
    <Footer></Footer>
    
  </div>
</template>


<script>

import Head from "./components/Head";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Footer from "./components/Footer";
export default {
  name: "App",
  components:{
    Head,
    AboutMe,
    Experience,
    Skills,
    Project,
    Footer,
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
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

</style>
