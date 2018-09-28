<template>
  <div id="app">
    <web-head></web-head>
    <div class="main">
    <router-view/>
    </div>
  </div>
</template>

<script>
import WebHead from "@/components/common/webHead";
export default {
  name: "App",
  components: {
    WebHead
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: url("./assets/images/bg.jpg") repeat-x;
}
</style>
