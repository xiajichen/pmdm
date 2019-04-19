<template>
    <div class="container">
      <div class="crumbs" style="margin-top: -20px;">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item><i class="el-icon-tickets"></i> 文章详情</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="leftContent" style="margin-bottom: 30px;margin-top: 10px">
        <h1 style="text-align: center;">{{title}}</h1>
        <p style="text-align: center;margin-top: 10px">作者：{{author}}  所属分类：{{category}}   发布时间：{{publishTime}}</p><br>
        <p class="ql-editor" v-loading="loading" v-html="content" style="width: 80%;margin: auto"></p>
      </div>
    </div>
</template>

<script>
  import "../../assets/css/quill.bubble.css";
  import "../../assets/css/quill.core.css";
  import "../../assets/css/quill.snow.css";
    export default {
        name: "ArticleDetails",
        data(){
          return{
            title:'无',
            category:'无',
            author:'无',
            publishTime:'无',
            content:'',
            loading:true
          }
        },
        created(){
          this.getData();
        },
      mounted(){

      },
        methods:{
          getData(){
            let article = this.$route.query.article;
            if(article.articleTitle){
              this.title = article.articleTitle;
            }
            if(article.articleBelong){
              this.category = article.articleBelong;
            }
            if(article.articleAuthor){
              this.author = article.articleAuthor;
            }
            if(article.articlePublishtime){
              this.publishTime = article.articlePublishtime;
            }
            if(article.articleContent){
              this.content = article.articleContent;
            }
            this.$axios.post('/article/selectByArticleId/'+article.articleId).then((responce) => {
              if(responce.data!==''){
                this.loading=false;
                this.title = responce.data.articleTitle;
                this.content = responce.data.articleContent;
              }
            })
          },
        }
    }
</script>

<style>
  .leftContent {
    padding: 30px;
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
  .ql-video{
    width: 800px;
    height: 450px;
  }
  p>img{
    width: 80%;
    margin-left: 10%;
  }
</style>
