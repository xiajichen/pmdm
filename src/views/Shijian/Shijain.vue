<template>
  <div class="container">
    <div class="crumbs" style="margin-top: -20px;">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item><i class="el-icon-location-outline"></i> 项目实践</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="leftContent" style="margin-bottom: 30px;margin-top: 10px">
      <h1 style="text-align: center;">学生动漫工作室作品展示</h1>
      <p style="text-align: center;margin-top: 10px">作者：丽晶动漫   所属分类：项目实践   发布时间：2017-03-15</p><br>
      <div style="width: 80%;margin: auto;"><p style="text-indent: 2em">2016年4月28日，百度百科发布了产品“秒懂百科”。秒懂百科以一分钟解读百科知识为切入点，用
        视频的方式秒懂百科打破了原有百度百科文字、图片为主的内容形态，将知识变成动态画面，率先支持用短视频呈现词条内容，不仅迎合
        了年轻一代用户在移动时代爱看短视频的阅读习惯，同时也缩短了知识获取的时间，让众多网民有了获得知识的新体验，这在整个互联网百科产品中尚属首家。</p>
        <p style="text-indent: 2em">2017年3月15日在我院15级数媒相关专业学生在科任老师梁老师的指导下，在Flash动画设计与制作课程中引入了网络动漫词条制作项目，
        同学们开始尝试百度秒懂百科词条的视频动画短片的制作，从第一个，第二个作品开始，越来越多的同学们的一个又一个的作品通过百度百
        科的审核成功上线，同学们初步尝到了成功的喜悦，学习的劲头更足的，短短十余天，全班同学的上线作品就达到了20余个，而且吸引了15信管
        、16数媒等班级的同学参与。截止到2017年12月我们统计二十一名同学，其完成的词条作品总数达10435个。现在同学们仍在不断的努力不断的尝
        试，高低年级学生中已经开始营造传帮带、互助互学的良好氛围。这次教学实践让老师和同学们都觉得很开心，即促进了老师的教，又帮助了学生的
        学，我们期待有更多同学的参与，也期待同学们创作出更多更好的作品！</p><p style="text-indent: 2em">学生动漫工作室作品展示，陆续更新中......</p>
        <el-table
          :data="tableData"
          size="mini"
          style="width: 90%;margin: auto"
          v-loading="loading">
          <el-table-column
            type="index"
            label="序号"
            width="60">
          </el-table-column>
          <el-table-column
            label="作者"
            prop="practiceAuthor"
            width="130">
          </el-table-column>
          <el-table-column
            label="作品名称"
            prop="practiceWorkname">
          </el-table-column>
          <el-table-column
            align="right">
            <template slot="header" slot-scope="scope">
              <el-input
                v-model="search"
                size="mini"
                v-on:input="searchInfo"
                placeholder="输入作者、作品名称搜索"/>
            </template>
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="check(scope.$index, scope.row)">查看</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div style="height: 40px;margin-right: 10%">
          <el-pagination
            @current-change="handleCurrentChange"
            background
            layout="prev, pager, next"
            :total="allRows" style="float:right;margin-top: 15px">
          </el-pagination>
        </div>
      </div>
    </div>
    <el-dialog
      title="作品详情"
      :visible.sync="centerDialogVisible"
      width="70%"
      center>
      <iframe id="iframe" style="width: 100%;height: 500px" frameborder="0" allowfullscreen="true" :src="links"></iframe>
      <span slot="footer" class="dialog-footer">
    <el-button @click="close('iframe')">关闭</el-button>
  </span>
    </el-dialog>
  </div>
</template>

<script>
    export default {
        name: "Shijain",
      data(){
          return{
            tableData: [],
            search: '',
            allRows:0,
            centerDialogVisible: false,
            loading:false,
            cur_page:1,
            links:''
          }
      },
      mounted(){
        this.getData()
      },
      methods:{
        close(id){
          this.centerDialogVisible = false;
          this.links = ''
        },
        // 分页导航
        handleCurrentChange(val) {
          this.cur_page = val;
          this.getData();
        },
        getData() {
          this.$axios.post('/practice/getList/'+this.cur_page).then((res) => {
            const result = res.data;
            this.tableData = result.list;
            this.allRows = result.allRow;
            this.loading=false
          })
        },
        searchInfo() {
          this.loading=true;
          if(this.search!==''){
            this.$axios.post('/practice/getByName/'+this.search+'/'+this.cur_page).then((res) => {
              const result = res.data;
              this.tableData = result.list;
              this.allRows = result.allRow;
              this.loading=false
            })
          }else{
            this.$axios.post('/practice/getList/'+this.cur_page).then((res) => {
              const result = res.data;
              this.tableData = result.list;
              this.allRows = result.allRow;
              this.loading=false
            })
          }
        },
        check(index, row){
          this.links = row.practiceWorklink;
          console.log("=="+row.practiceWorklink);
          this.centerDialogVisible=true
        }
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
