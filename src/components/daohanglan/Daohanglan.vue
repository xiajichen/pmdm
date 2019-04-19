<template>
  <div>
    <nav class="main-navigation">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
           <!-- <a href="index.html"  class="logo" title="" style="margin-left: -20px;margin-top: 10px">
              <img :src="logo" width="177" height="35" alt="" />
            </a>-->
            <div class="navbar-header"><span class="nav-toggle-button collapsed" data-toggle="collapse"
                                             data-target="#main-menu"><span class="sr-only">Toggle navigation</span> <i
              class="fa fa-bars"></i></span></div>
            <div class="collapse navbar-collapse" id="main-menu">
              <ul class="menu">
                <router-link :to="{path:'/IndexPage'}"><li role="presentation" @click="getTime"><a id="shouye" class="checked" @click="checkedMenu('shouye')" style="text-decoration:none;font-size: 16px;font-family: 微软雅黑;">首页</a></li></router-link>
                <router-link :to="{path:'/Introduction',query:{categoryId:'44b4e30a-c3fe-43a0-b124-7550e14ab003'}}"><li role="presentation" @click="getTime"><a id="jianjie" @click="checkedMenu('jianjie')" style="text-decoration:none;font-size: 16px;font-family: 微软雅黑;">中心简介</a></li></router-link>
                <router-link :to="{path:'/Institution',query:{categoryId:'2f93cfc7-9afc-4305-b37e-ea9a0a119bd2'}}"><li role="presentation" @click="getTime"><a id="jigou" @click="checkedMenu('jigou')" style="text-decoration:none;font-size: 16px;font-family: 微软雅黑">中心机构</a></li></router-link>
                <router-link :to="{path:'/Categorys',query:{categoryId:'ea8fa395-9670-4895-8167-391a0cbdd09e',name:'学术动态'}}"><li role="presentation" @click="getTime"><a id="dongtai" @click="checkedMenu('dongtai')" style="text-decoration:none;font-size: 16px;font-family: 微软雅黑">学术动态</a></li></router-link>
                <router-link :to="{path:'/Categorys',query:{categoryId:'f12325d6-d4d5-41bb-b989-be27c558918e',name:'研究方向'}}"><li role="presentation" @click="getTime"><a id="yanjiu" @click="checkedMenu('yanjiu')" style="text-decoration:none;font-size: 16px;font-family: 微软雅黑">研究方向</a></li></router-link>
                <router-link :to="{path:'/Categorys',query:{categoryId:'6d242320-11c3-4bc8-8061-815caade7a9c',name:'校企合作'}}"><li role="presentation" @click="getTime"><a id="hezuo" @click="checkedMenu('hezuo')" style="text-decoration:none;font-size: 16px;font-family: 微软雅黑">校企合作</a></li></router-link>
                <router-link :to="{path:'/Categorys',query:{categoryId:'8170a057-3da6-4040-aa65-a4a529f93a99',name:'学术成果'}}"><li role="presentation" @click="getTime"><a id="chenguo" @click="checkedMenu('chenguo')" style="text-decoration:none;font-size: 16px;font-family: 微软雅黑">学术成果</a></li></router-link>
                <router-link to="/Contact"><li role="presentation"><a id="fankui" @click="checkedMenu('fankui')" style="text-decoration:none;font-size: 16px;font-family: 微软雅黑">联系我们</a></li></router-link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <transition name="fade-transform" mode="out-in">
          <router-view :key="activeDate"></router-view>
    </transition>
  </div>
</template>

<script>
    export default {
        name: "Daohanglan",
        data(){
          return{
            logo:'',
            activeDate:''
          }
        },
      created(){
          let urlTemp = "assets/images/logo.png";
          this.logo = require("@/"+urlTemp);
      },
      methods:{
        getTime(){
          this.activeDate = new Date().toString();
        },
        checkedMenu(id){
          //console.log(event)
          const menus = ['shouye','jianjie','jigou','dongtai','yanjiu','hezuo','chenguo','fankui']
          document.getElementById(id).className='checked';
          for(let i=0;i<menus.length;i++){
            if(id!=menus[i]){
              document.getElementById(menus[i]).className=''
            }
          }
        }
      }
    }
</script>

<style scoped>
  @import "../../styles/transition.scss";
  /****logo样式****/
  .logo{
   float: left;
  }
  .router-link-active{
    color: #9f2124!important;
  }
  .checked{
    color: #9f2124!important;
  }
</style>
