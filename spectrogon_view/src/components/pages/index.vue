<template>
  
  <div class="index">
    <div class="block">
    <el-carousel height="300px">
      <el-carousel-item v-for="banner in bannerAry" :key="banner.h3tit">
        <el-row class="banner-item">
          <el-col :offset="4" :span="10">
            <h3>{{ banner.h3tit }}</h3>
            <p>{{ banner.intro}}</p>
        </el-col>
        <el-col :span="4">
          <img :src="banner.imgSrc" alt="">
        </el-col>
        </el-row>
        
      </el-carousel-item>
    </el-carousel>
  </div>
  <div class="wrapper">
    <div class="width960">
<el-row :gutter="20">
    <el-col :span="16" class="pro-moudle">
      <el-row :gutter="10">
        <el-col :span=8><a href="#"><img src="../../assets/images/main_grating.jpg" alt=""></a></el-col>
        <el-col :span=16>
          <h4><a href="#">光学干涉滤光片</a></h4>
          <div class="intro">我们设计和制造采用最先进的沉积技术和最先进的设计标准的光学干涉滤光器。</div>
        </el-col>
      </el-row>
    </el-col>
    <el-col :span="8" class="news-moudle">
      <h3>新闻</h3>
      <ul>
        <li><h4><a href="#">Spectrogon Brexit声明 - 2018年9月</a></h4>
        <div class="intro"><p>在SPIE Optics＆Photonics 21-23与我们的销售团队会面</p><a href="#">阅读更多→</a></div></li>
      </ul>
    </el-col>
  </el-row>
    </div>
  
  </div>
  
  </div>
</template>
<script>
export default {
  data() {
    return {
      bannerAry: [
        {
          h3tit: "Spectrogon制造和开发光学滤波器，薄膜涂层和全息衍射光栅。",
          intro: "公司不断改进生产技术和工艺，为客户提供最先进的产品。",
          imgSrc: require("../../assets/images/main_trippel1.jpg")
        },
        {
          h3tit: "开发光学滤波器，薄膜涂层和全息衍射光栅。",
          intro: "公司不断改进生产技术和工艺，为客户提供最先进的产品fd。",
          imgSrc: require("../../assets/images/main_trippel1.jpg")
        },
        {
          h3tit: "Spectrogon制造和开发光学滤波器。",
          intro: "为客户提供最先进的产品。",
          imgSrc: require("../../assets/images/main_trippel1.jpg")
        }
      ]
    };
  }
};
</script>
<style scoped>
.banner-item .el-col {
  vertical-align: middle;
}
.el-carousel__item {
  vertical-align: middle;
}
.el-carousel__item h3 {
  padding-top: 50px;
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 50px;
  margin: 0;
  font-size: 28px;
  color: #000;
}

.el-carousel__item p {
  font-size: 16px;
  padding-top: 30px;
}
.wrapper {
  background: #eff2f6;
  width: 100%;
  padding-top: 40px;
  padding-bottom: 40px;
}
.pro-moudle h4,
.pro-moudle .intro,
.news-moudle h3 {
  text-align: left;
}
.pro-moudle h4,
.news-moudle h3 {
  font-size: 14px;
  line-height: 28px;
  color: #f51d30;
}
.pro-moudle h4 a,
.news-moudle .intro a {
  color: #f51d30;
}
.pro-moudle .intro,
.news-moudle p {
  font-size: 12px;
  line-height: 20px;
  color: #666;
  padding-top: 10px;
}
.news-moudle h4 {
  text-align: left;
  font-weight: bold;
}
.news-moudle .intro p {
  padding: 0;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.news-moudle .intro a {
  font-size: 12px;
  text-align: left;
  display: block;
}
</style>

