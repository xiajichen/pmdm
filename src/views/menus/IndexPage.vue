<template>
  <div class="container">
    <div class="row">
      <!-- 轮播图-->
      <div class="block">
        <el-carousel id="carousel" class="ss" trigger="click" :interval="5000" height="350px">
          <el-carousel-item v-for="item in carosels" :key="item.carouselId">
            <img :src="imgUrl+item.carouselPictrue" ref="imgHeight">
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <div class="row" style="margin-bottom: 15px">
      <div class="col-md-3" style="margin-top: 30px;padding-left: 0">
          <el-card shadow="hover">
            <div class="col-md-6 col-xs-2 move" style="margin-bottom: 25px;text-align: center;cursor: pointer;margin-left: -5px" @click="fastIn('/Introduction','44b4e30a-c3fe-43a0-b124-7550e14ab003','')">
                <img :src="jianjie" alt="中心简介" />
                <p class="fastcardName">中心简介</p>
            </div>
            <div class="col-md-6 col-xs-2 move" style="margin-bottom: 25px;text-align: center;cursor: pointer" @click="fastIn('/Institution','2f93cfc7-9afc-4305-b37e-ea9a0a119bd2','')">
              <img :src="weiyuanhui" alt="学术委员会"/>
              <p class="fastcardName">学术委员会</p>
            </div>
            <div class="col-md-6 col-xs-2 move" style="margin-bottom: 25px;text-align: center;cursor: pointer;margin-left: -5px" @click="fastIn('/Categorys','f12325d6-d4d5-41bb-b989-be27c558918e','研究方向')">
                <img :src="dongman" alt="研究方向"/>
                <p class="fastcardName">研究方向</p>
            </div>
            <div class="col-md-6 col-xs-2 move" style="margin-bottom: 25px;text-align: center;cursor: pointer" @click="fastIn('/Shijian','','')">
              <img :src="sheji" alt="项目实践"/>
              <p class="fastcardName">项目实践</p>
            </div>
            <div class="col-md-6 col-xs-2 move" style="margin-bottom: 25px;text-align: center;cursor: pointer;margin-left: -5px" @click="fastIn('/Contact','','')">
              <img :src="fankui" alt="意见反馈"/>
              <p class="fastcardName">意见反馈</p></div>
            <div class="col-md-6 col-xs-2 move" style="margin-bottom: 25px;text-align: center;cursor: pointer" @click="fastIn('/Download','','')">
              <img :src="download" alt="资料下载"/>
                <p class="fastcardName">资料下载</p>
            </div>
          </el-card>
      </div>
      <div class="col-md-9" style="margin-top: 30px;padding-right:0 ">
        <el-card shadow="hover" v-loading="loadingActive" style="height:313px">
          <el-tabs v-model="activeName" @tab-click="handleClick" class="tabsColor">
            <el-tab-pane v-for="(item,index) in tabsList" :label="item.secondarycategoryName"
                         :key="item.secondarycategoryId" :name="item.secondarycategoryId">
              <div v-for="(item,index) in tabsInfo" :key="item.articleId" class="text item">
                <i class="el-icon-caret-right" style="color: #9f2124"></i>
                <a class="articletitle" @click="jumpToDetail(item)">{{item.articleTitle}}
                  <span style="float: right;">{{item.articlePublishtime}}</span>
                </a>
              </div>
            </el-tab-pane>
          </el-tabs>
        </el-card>
      </div>
    </div>
    <a style="float: right;font-size: 20px;color: #9f2124" @click="goMore()">更多</a>
    <div class="row">
      <!--<span class="areaTitle">最新作品</span>-->
      <!--<img :src="more" @click="goMore()" style="float: right;cursor: pointer;margin-top: -20px;margin-left: -10px" alt="更多"/>-->
      <div style="margin-bottom: 15px"><img :src="latestWorks" alt="最新作品"/></div>
      <div class="row" v-loading="loadingZuopin">
        <div class="col-md-3" v-for="(item,index) in Latest1" style="margin-bottom: 15px">
          <Card>
            <div style="text-align:center;">
              <img :src="nopic" v-if="item.articleModifytime.length==0" style="cursor: pointer;height:150px;border: 1px solid #EEE" @click="jumpToDetail(item)" alt="无图片哦~"/>
              <img :src="imgUrl2+item.articleModifytime" v-else style="width: 100%;height: 150px;cursor: pointer;border: 1px solid #EEE" @click="jumpToDetail(item)">
              <h4 style="margin-top: 5px">{{item.articleTitle}}</h4>
            </div>
          </Card>
        </div>
      </div>
    </div>
    <a style="float: right;font-size: 20px;color: #9f2124" @click="goMore()">更多</a>
    <div class="row" style="margin-bottom: 30px" v-loading="loadingHonor">
      <div style="margin-bottom: 15px"><img :src="latestHonor" alt="荣誉墙"/></div>
      <el-card shadow="hover">
        <div class="col-md-6" style="margin-bottom: 20px;margin-left: -10px">
          <el-carousel height="400px" :interval="5000">
            <el-carousel-item v-for="(item,key) in picObj" :key="key" style="text-align: center;border: 1px solid #EEE">
              <img :src="imgUrl2+item.pic" ref="imgHeight" @click="jumpToDetail(item.article)" style="cursor: pointer;width: 100%;">
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="col-md-6">
          <div v-for="(item,key) in picObj" :key="key" class="text1 item1">
            <i class="el-icon-caret-right" style="color: #9f2124"></i>
            <a class="articletitle" @click="jumpToDetail(item.article)">{{item.article.articleTitle}}</a><span style="float: right;">{{item.article.articlePublishtime}}</span>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
  export default {
    name: "IndexPage1",
    data() {
      return {
        //标签页集合
        tabsList: [],
        //标签页内容
        tabsInfo: [],
        //最新作品
        Latest1: [],
        //图片查看地址
        imgUrl: 'http://111.230.19.105:8088/carsousel/checkPic/',
        //预览图查看地址
        imgUrl2: 'http://111.230.19.105:8088/article/checkPreviewPic/',
        //最新荣誉图片加文章信息
        picObj:[],
        //平面设计logo
        sheji: '',
        //委员会logo
        weiyuanhui: '',
        //简介logo
        jianjie: '',
        //反馈logo
        fankui: '',
        //下载logo
        download: '',
        //动漫logo
        dongman: '',
        currentDate: new Date(),
        carosels: [],
        activeName: '',
        imgHeight: '',
        //最新活动区域加载
        loadingActive:true,
        //最新作品区域加载
        loadingZuopin:true,
        //最新荣誉区域加载
        loadingHonor:true,
        //最新作品标题
        latestWorks:'',
        //最新荣誉标题
        latestHonor:'',
        //更多图标
        more:'',
        //无图片
        nopic:''
      }
    },
    created() {
      this.getPictrue();
      this.getCarousels();
      this.getTabsHead();
      this.getzuoping();
      this.getLatestHonor();
    },
    mounted() {

    },
    methods: {
      fastIn(path,categoryId,name) {
        this.$router.push({path: path,query:{categoryId:categoryId,name:name}})
      },
      //获取图片
      getPictrue() {
        let urlTemp2 = "assets/images/logos/sheji.png";
        this.sheji = require("@/" + urlTemp2);
        let urlTemp3 = "assets/images/logos/weiyuanhui.png";
        this.weiyuanhui = require("@/" + urlTemp3);
        let urlTemp4 = "assets/images/logos/jianjie.png";
        this.jianjie = require("@/" + urlTemp4);
        let urlTemp5 = "assets/images/logos/fankui.png";
        this.fankui = require("@/" + urlTemp5);
        let urlTemp6 = "assets/images/logos/download.png";
        this.download = require("@/" + urlTemp6);
        let urlTemp7 = "assets/images/logos/dongman.png";
        this.dongman = require("@/" + urlTemp7);
        let urlTemp8 = "assets/images/latestWorks.png";
        this.latestWorks = require("@/" + urlTemp8);
        let urlTemp9 = "assets/images/latestHonor.png";
        this.latestHonor = require("@/" + urlTemp9);
        let urlTemp10 = "assets/images/more.png";
        this.more = require("@/" + urlTemp10);
        let urlTemp11 = "assets/images/noPic.png";
        this.nopic = require("@/" + urlTemp11);
      },
      handleClick(tab, event) {
        if (this.activeName) {
          this.$axios.post('/article/getByCateId/' + this.activeName).then((res) => {
            if (res.data) {
              this.tabsInfo = res.data;
            }
          })
        }
      },
      //获取轮播图
      getCarousels() {
        this.$axios.post('/carsousel/getAllCarousels').then((res) => {
          if (res.data) {
            this.carosels = res.data;
          }
        })
      },
      //获取最新作品
      getzuoping() {
        this.$axios.post('/article/getLatestZuoping').then((res) => {
          if (res.data) {
            for (var i = 0; i < res.data.length; i++) {
              //res.data[i].pic = this.imgUrlFun(res.data[i].articleContent);
              res.data[i].pic = '';
              if (res.data[i].articleTitle.length > 10) {
                res.data[i].articleTitle = res.data[i].articleTitle.slice(0, 10) + "..."
              }
            }
            this.Latest1 = res.data;
            this.loadingZuopin=false;
          }
        })
      },
      //获取最新荣誉
      getLatestHonor() {
        this.$axios.post('/article/getLestHonor').then((res) => {
          if (res.data) {
            for (var i = 0; i < res.data.length; i++) {
              let obj = {pic:'',article:''};
              if (res.data[i].articleTitle.length > 30) {
                res.data[i].articleTitle = res.data[i].articleTitle.slice(0, 30) + "..."
              }
              obj.pic = res.data[i].articleModifytime;
              obj.article = res.data[i];
              this.picObj.push(obj);
            }
            this.loadingHonor=false
          }
        })
      },
      //获取标签页的头
      getTabsHead() {
        this.$axios.post('/category/getActivityChild').then((res) => {
          //console.log(res.data)
          if (res.data !== "") {
            this.tabsList = res.data;
            this.activeName = res.data[0].secondarycategoryId;
            this.getArticles(this.activeName);
          }
        })
      },
      //获取标签页的文章
      getArticles(id) {
        if (id) {
          this.$axios.post('/article/getByCateId/' + id).then((res) => {
            if (res.data) {
              for (var i = 0; i < res.data.length; i++) {
                if (res.data[i].articleTitle.length > 30) {
                  res.data[i].articleTitle = res.data[i].articleTitle.slice(0, 30) + "..."
                }
              }
              this.tabsInfo = res.data;
            }
          })
          this.loadingActive=false
        }
      },
      //点击文章跳转
      jumpToDetail(item) {
        this.$router.push({
          path: '/ArticleDetails',
          query: {
            article: item
          }
        })
      },
      //点击更多
      goMore(){
        const menus = ['shouye','jianjie','jigou','dongtai','yanjiu','hezuo','chenguo','fankui'];
        const id='chenguo';
        document.getElementById(id).className='checked';
        for(let i=0;i<menus.length;i++){
          if(id!=menus[i]){
            document.getElementById(menus[i]).className=''
          }
        }
        this.$router.push({path:'/Categorys',query:{categoryId:'8170a057-3da6-4040-aa65-a4a529f93a99',name:'学术成果'}})
      },
      imgUrlFun(str) {
        var data = '';
        str.replace(/<img [^>]*src=['"]([^'"]+)[^>]*>/, function (match, capture) {
          data = capture;
        });
        return data
      },
    }
  }
</script>

<style>
  /*******轮播图样式*******/
  .block {
    width: 100%;
    margin: auto;
  }

  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  .ss {
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 0, 0, .12);
  }

  /***小标题***/
  .areaTitle {
    width: 80%;
    /*text-align: center;*/
    font-family: "微软雅黑";
    font-size: 20px;
  }

  .fastcardName {
    text-align: center;
    color: black;
  }

  /***图片动画***/
  .move:hover img {
    -webkit-transform: translateY(-10px);
    -moz-transform: translateY(-10px);
    -ms-transform: translateY(-10px);
    transform: translateY(-10px);
  }

  img {
    -webkit-transition: -webkit-transform .3s;
    transition: -webkit-transform .3s;
    -moz-transition: transform .3s, -moz-transform .3s;
    transition: transform .3s;
    transition: transform .3s, -webkit-transform .3s, -moz-transform .3s;
  }

  /***********右侧最新活动*********/
  .image {
    height: 130px;
    display: block;
  }

  .articletitle {
    color: #000;
    text-decoration: none;
  }
  .articletitle:hover{
    color: #9f2124;
  }
  .areacontent {
    font-size: 14px;
    /*text-indent:2em;*/
    text-decoration: none;
    line-height: 20px;
  }

  .bottom {
    line-height: 7px;
  }

  /*******荣誉墙*****/
  .text {
    font-size: 14px;
  }

  .item {
    padding: 4px 0;
  }

  .text1 {
    font-size: 14px;
  }

  .item1 {
    padding: 10px 0;
  }
  .checked{
    color: #9f2124!important;
  }
  .el-tabs__active-bar{
    background-color: #9f2124!important;
  }
  .el-tabs__item.is-active{
    color: #9f2124!important;
  }
  .el-tabs__item:hover{
    color: #9f2124!important;;
  }
</style>
