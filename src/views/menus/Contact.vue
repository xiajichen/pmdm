<template>
  <div class="container">
    <div class="crumbs" style="margin-left:25%;margin-top: -20px;">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item><i class="el-icon-service"></i> 联系我们</el-breadcrumb-item>
        <el-breadcrumb-item>{{secondBread}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="row" style="margin-top: 10px">
      <div class="col-md-3">
        <el-menu
          default-active="2"
          active-text-color="#9f2124"
          class="el-menu-vertical-demo"
          router>
          <el-menu-item index="/Contact/FeedBack" @click="change('yijian')">
            <span slot="title" id="yijian">意见反馈</span>
          </el-menu-item>
          <el-menu-item index="/Contact/Map" @click="change('weizhi')">
            <span slot="title" id="weizhi" >位置信息</span>
          </el-menu-item>
        </el-menu>
      </div>
      <div class="col-md-9">
        <keep-alive><router-view></router-view></keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      secondBread:'意见反馈'
    }
  },
  methods:{
    change(id){
      this.secondBread = document.getElementById(id).innerText;
    }
  }
}
</script>

<style scoped>
  .test2{
    margin-top: -1.4%;
  }
  .ss {
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 0, 0, .12);
  }
</style>
