<template>
  <div class="webHead">
    <div class="logo-bar">
      <div class="logo width960">
        <a href="#"><img src="@/assets/images/logo.png" alt=""></a>
      </div>
    </div>
    
    <nav class="width960">
      <router-link to="/" tag="li" active-class="active">首页</router-link>
      <router-link to="/product" tag="li" active-class="active">产品</router-link>
      <router-link to="/news" tag="li" active-class="active">新闻</router-link>
      <router-link to="/about" tag="li" active-class="active">关于我们</router-link>
      <router-link to="/concat" tag="li" active-class="active">联系我们</router-link>
    </nav>
  </div>
</template>
<script>
export default {
  name: "webHead",
  data() {
    return {
      active: false
    };
  }
};
</script>
<style  scoped>
.logo-bar {
  background: url("../../assets/images/bg_stroke.png") repeat-x top center;
  margin-top: 30px;
  margin-bottom: 20px;
}
.logo {
  text-align: left;
}
nav {
  text-align: left;
  overflow: hidden;
}
nav li {
  float: left;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: 15px;
  border-bottom: 2px solid transparent;
  line-height: 28px;
}
nav li:hover,
nav li.active {
  border: 0;
  border-bottom: 2px solid #aaa;
  color: #ed3f41;
}
</style>
