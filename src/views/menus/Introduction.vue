<template>
  <div class="container">
    <div class="crumbs" style="margin-left:25%;margin-top: -20px;">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item><i class="el-icon-tickets"></i> 中心简介</el-breadcrumb-item>
        <el-breadcrumb-item>{{secondBread}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="row" style="margin-top: 10px">
      <div class="col-md-3">
        <el-menu
          default-active="2"
          active-text-color="#9f2124"
          class="el-menu-vertical-demo">
          <template v-for="(item,index) in categoryTree">
            <el-submenu :index="item.secondarycategoryId" v-if="item.thirdcategories.length>0" @click="changeArticles(item.secondarycategoryId)">
              <template slot="title">
                <span :id="item.secondarycategoryId">{{item.secondarycategoryName}}</span>
              </template>
              <el-menu-item-group v-for="(item1,index1) in item.thirdcategories" :key="item1.thirdcategoryId">
                <el-menu-item :index="item1.thirdcategoryId" @click="changeArticles(item1.thirdcategoryId)"><span :id="item1.thirdcategoryId">{{item1.thirdcategoryName}}</span></el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-menu-item :index="item.secondarycategoryId" v-else @click="changeArticles(item.secondarycategoryId)">
              <span :id="item.secondarycategoryId" slot="title">{{item.secondarycategoryName}}</span>
            </el-menu-item>
          </template>
        </el-menu>
      </div>
      <div class="col-md-9 leftContent">
          <h1 style="text-align: center;">{{article.articleTitle}}</h1>
          <p style="text-align: center;">作者：{{article.articleAuthor}}  所属分类：{{article.articleBelong}}   发布时间：{{article.articlePublishtime}}</p><br>
          <p class="ql-editor" v-html="article.articleContent" style="width: 80%;margin: auto"></p>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Introduction",
        data(){
            return{
              //当前一级分类Id
              categosy:'',
              //总条目
              allRows:0,
              //当前页
              cur_page: 1,
              //当前分类的子分类
              categoryTree:[],
              //显示的文章
              article:'',
              secondBread:'中心简介'
            }
        },
      created(){
        this.getCategory();
        this.getIntroduction();
      },
      methods:{
        getCategory(){
          this.$axios.post('/category/getChilds/'+this.$route.query.categoryId).then((responce) => {
            if(responce.data){
              this.categoryTree = responce.data.secondarycategories;
            }
          })
        },
        //获取简介
        getIntroduction(){
          this.$axios.post('/article/getIntroduction').then((responce) => {
            if(responce.data){
              this.article = responce.data;
            }
          })
        },
       //文章切换
        changeArticles(categoryId){
          this.secondBread = document.getElementById(categoryId).innerText;
          this.$axios.post('/article/getByCateId1/'+categoryId).then((responce) => {
            if(responce.data){
              this.article = responce.data[0];
            }
          })
        },
        //分页导航
        handleCurrentChange(val) {
          this.cur_page = val;
          this.getData();
        },
      }
    }
</script>

<style scoped>
  .leftContent {
    padding: 30px;
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 5px;
    margin-bottom: 30px;
  }
</style>
