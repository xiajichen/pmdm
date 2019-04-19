<template>
  <div class="container" style="margin-bottom: 30px;">
    <div class="crumbs" style="margin-left:25.5%;margin-top: -20px;">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item><i class="el-icon-star-off"></i> 中心机构</el-breadcrumb-item>
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
              <el-menu-item-group v-for="(item1,index1) in item.thirdcategories" :key="item1.thirdcategoryId" >
                <el-menu-item :index="item1.thirdcategoryId" @click="changeArticles(categosy+','+item.secondarycategoryId+','+item1.thirdcategoryId)"><span :id="item1.thirdcategoryId">{{item1.thirdcategoryName}}</span></el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-menu-item :index="item.secondarycategoryId" v-else @click="changeArticles(categosy+','+item.secondarycategoryId)">
              <span slot="title" :id="item.secondarycategoryId">{{item.secondarycategoryName}}</span>
            </el-menu-item>
          </template>
        </el-menu>
      </div>
      <div class="col-md-9" v-loading="loading">
        <div class="row">
          <p v-if="members.length==0" style="text-align: center">暂无信息</p>
          <div class="col-md-3"  v-for="(item,index) in members" style="margin-bottom: 30px">
            <el-card shadow="hover">
              <div class="single-member effect-3">
                <div class="member-image">
                  <img src="../../assets/images/teacher.jpg" v-if="item.memberPhoto===''" alt="Member">
                  <img :src="imgUrl+item.memberPhoto" v-else alt="Member">
                </div>
                <div class="member-info">
                  <h5>{{item.memberName}}</h5>
                  <h6>{{item.memberPosition}}</h6>
                  <h6>{{item.memberIntroduction}}</h6>
                </div>
              </div>
            </el-card>
          </div>
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
    name: "Institition",
    data(){
      return{
        //当前一级分类Id
        categosy:'',
        //成员列表
        members:[],
        //总条目
        allRows:0,
        //当前页
        cur_page: 1,
        //当前分类的子分类
        categoryTree:[],
        //图片查看地址
        imgUrl: 'http://111.230.19.105:8088/personnel/checkHeadPic/',
        //加载
        loading:true,
        //二级面包屑
        secondBread:'',
        //三级面包屑
        thirdBread:''
      }
    },
    created(){
      this.getCategory();
      this.getMembers();
    },
    methods:{
      getCategory(){
        this.$axios.post('/category/getChilds/'+this.$route.query.categoryId).then((responce) => {
          if(responce.data){
            this.categoryTree = responce.data.secondarycategories;
          }
        })
      },
      //获取本分类成员
      getMembers(){
        this.$axios.post('/personnel/memberList/'+1).then((responce) => {
          if(responce.data){
            this.members = responce.data.list;
            this.allRows = responce.data.allRow;
            this.loading = false;
          }
        })
      },
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
        this.$axios.post('/personnel/filterByCateGory/'+categorys+'/'+1).then((res) => {
          const result = res.data;
          this.members = result.list;
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
    }
  }
</script>

<style scoped>
  @import "../../assets/css/style.css";

  aa{
    margin-top: 30px
  }
</style>
