<template>
  <div class="container">
    <div class="crumbs" style="margin-top: -20px;">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item><i class="el-icon-download"></i> 资料下载</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="row leftContent" v-loading="loading" style="margin-top: 10px">
      <div v-for="(item,index) in documents" :key="item.articleId" class="text item" style="margin-top: 20px;width: 80%;margin: auto">
        <div style="margin-top: 20px">
          <a @click="jumpToDetail(item)" style="font-size: 16px;">{{item.documentsName}}</a>
          <!--<el-button type="primary" icon="el-icon-download" style="float: right;" circle @click="handleDownload(item.documentsName)"></el-button>-->
          <a style="float: right; font-size: 16px;" @click="handleDownload(item.documentsName)">下载</a>
          <hr>
        </div>
      </div>
    </div>
    <div class="row">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="allRow" style="text-align:right;padding: 20px">
      </el-pagination>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Download",
        data(){
            return{
              documents:[],
              allRow:0,
              cur_page: 1,
              loading:true
            }
        },
      created(){
        this.getData();
      },
      methods:{
        // 分页导航
        handleCurrentChange(val) {
          this.cur_page = val;
          this.getData();
        },
        getData() {
          this.$axios.post('/documents/docList/'+this.cur_page).then((res) => {
            const result = res.data;
            this.documents = result.list;
            this.allRow = result.allRow;
            this.loading=false
          })
        },
        //下载
        handleDownload(documentsName){
          window.location.href='http://111.230.19.105:8088/documents/downloadDoc/'+documentsName
        },
        //搜索
        search() {
          // this.is_search = true;
          if(this.select_word!==''){
            this.$axios.post('/documents/getDocsByName/'+this.select_word+'/'+this.cur_page).then((res) => {
              const result = res.data;
              this.documents = result.list;
              this.allRow = result.allRow;
            })
          }else{
            this.$axios.post('/documents/docList/'+this.cur_page).then((res) => {
              const result = res.data;
              this.documents = result.list;
              this.allRow = result.allRow;
            })
          }
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
</style>
