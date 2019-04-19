<template>
  <div class="container" style="margin-bottom: 30px;">
    <div class="crumbs" style="margin-left:25.5%;margin-top: -20px;">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item><i class="el-icon-tickets"></i> {{firstBread}}</el-breadcrumb-item>
        <el-breadcrumb-item v-if="secondBread">{{secondBread}}</el-breadcrumb-item>
        <el-breadcrumb-item v-if="thirdBread">{{thirdBread}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="row" style="margin-top: 10px">
      <div class="col-md-3">
        <el-menu
          default-active="2"
          active-text-color="#9f2124"
          class="el-menu-vertical-demo">
          <template v-for="(item,index) in categoryTree">
            <el-submenu :index="item.secondarycategoryId" v-if="item.thirdcategories.length>0" @click="changeArticles(categosy+','+item.secondarycategoryId)">
              <template slot="title">
                <span :id="item.secondarycategoryId">{{item.secondarycategoryName}}</span>
              </template>
              <el-menu-item-group v-for="(item1,index1) in item.thirdcategories" :key="item1.thirdcategoryId">
                <el-menu-item :index="item1.thirdcategoryId" @click="changeArticles(categosy+','+item.secondarycategoryId+','+item1.thirdcategoryId)"><span :id="item1.thirdcategoryId">{{item1.thirdcategoryName}}</span></el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-menu-item :index="item.secondarycategoryId" v-else @click="changeArticles(categosy+','+item.secondarycategoryId)">
              <span slot="title" :id="item.secondarycategoryId">{{item.secondarycategoryName}}</span>
            </el-menu-item>
          </template>
        </el-menu>
      </div>
      <div class="col-md-9 leftContent" v-loading="loading">
        <p v-if="articles.length==0" style="text-align: center">暂无信息</p>
        <div v-for="(item,index) in articles" :key="item.articleId" class="text item" style="margin-bottom: 20px">
          <i class="el-icon-caret-right" style="color: #9f2124"></i>
          <a class="articletitle"  @click="jumpToDetail(item)">{{item.articleTitle}}
            <span style="float: right;">{{item.articlePublishtime}}</span>
          </a>
        </div>
      </div>
    </div>
    <div class="row">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="allRows" style="float:right;margin-top: 20px">
      </el-pagination>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Categorys",
        data(){
            return{
              //当前一级分类Id
              categosy:'',
              //文章列表
              articles:[],
              //总条目
              allRows:0,
              //当前页
              cur_page: 1,
              //搜索内容
              select_word: '',
              //当前分类的子分类
              categoryTree:[],
              //加载
              loading:true,
              //以及面包屑
              firstBread:'',
              //二级面包屑
              secondBread:'',
              //三级面包屑
              thirdBread:''
            }
        },
      created(){
        this.getArticle();
        this.getCategory();
      },
      methods:{
          getCategory(){
            this.$axios.post('/category/getChilds/'+this.$route.query.categoryId).then((responce) => {
              if(responce.data){
                this.categoryTree = responce.data.secondarycategories;
              }
            })
            this.firstBread = this.$route.query.name;
          },
          getArticle(){
            let categorys = [];
            categorys.push(this.$route.query.categoryId);
            this.categosy = this.$route.query.categoryId;
            this.$axios.post('/article/filterByCateGory/'+categorys+'/'+1).then((responce) => {
              if(responce.data){
                this.articles = responce.data.list;
                this.allRows = responce.data.allRow;
                this.loading = false;
              }
            })
          },
        // search() {
        //   // this.is_search = true;
        //   if(this.select_word!==''){
        //     this.$axios.post('/article/searchInCate/'+this.select_word+'/'+1+'/'+this.$route.query.categoryId).then((res) => {
        //       const result = res.data;
        //       this.articles = result.list;
        //       this.allRows = result.totalPage;
        //     })
        //   }else{
        //     let categorys = [];
        //     categorys.push(this.$route.query.categoryId);
        //     this.$axios.post('/article/filterByCateGory/'+categorys+'/'+1).then((res) => {
        //       const result = res.data;
        //       this.articles = result.list;
        //       this.allRows = result.totalPage;
        //     })
        //   }
        // },
        //点击分类切换右侧文章
        changeArticles(categoryId){
          this.loading = true;
          this.secondBread = '';
          this.thirdBread = '';
          let categorys = categoryId.split(',');
          if(categorys.length===2){
            this.secondBread = document.getElementById(categorys[1]).innerText;
          }
          if(categorys.length===3){
            this.secondBread = document.getElementById(categorys[1]).innerText;
            this.thirdBread = document.getElementById(categorys[2]).innerText;
          }
          this.$axios.post('/article/filterByCateGory/'+categorys+'/'+1).then((res) => {
            const result = res.data;
            this.articles = result.list;
            this.allRows = result.totalPage;
            this.loading = false;
          })
        },
        //分页导航
        handleCurrentChange(val) {
          this.cur_page = val;
          this.loading = true;
          this.getData();
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
      }
    }
</script>

<style scoped>
  .leftContent {
    padding: 30px;
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
  .articletitle {
    color: #000;
    text-decoration: none;
  }
  .articletitle:hover{
    color: #9f2124;
  }
</style>
