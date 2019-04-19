<template>
  <el-form ref="feedbackMsg" label-width="100px" class="demo-feedbackMsg">
    <el-form-item label="姓名" prop="name">
      <el-input v-model="name" style="width: 220px"></el-input>
    </el-form-item>
    <el-form-item
      prop="phone"
      label="联系方式">
      <el-input v-model="phone" style="width: 220px"></el-input>
    </el-form-item>
    <el-form-item
      prop="email"
      label="邮箱">
      <el-input v-model="email" style="width: 220px" placeholder="可不填"></el-input>
    </el-form-item>
    <el-form-item label="反馈意见">
      <el-input type="textarea" v-model="desc" style="width: 300px" :autosize="{ minRows: 8, maxRows: 15}" ></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm">提交</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  export default {
    data() {
      return {
          name:'',
          phone:'',
          email:'',
          desc:''
      };
    },
    methods: {
      submitForm() {
            if(this.name===''){
              this.$message.warning('请输入您的姓名');
              return;
            }
        if(this.phone===''){
          this.$message.warning('请输入您的联系方式');
          return;
        }
        if(this.desc===''){
          this.$message.warning('请填写您的反馈内容');
          return;
        }
        let feedbackmsg = {feedbackmsgId:'',feedbackmsgName:'',feedbackmsgPhone:'',feedbackmsgEmail:'',feedbackmsgContent:'',feedbackmsgIsread:'',feedbackmsgHandler:'',feedbackmsgCreationtime:'',feedbackmsgModifytime:'',feedbackmsgIsdelete:''}
        feedbackmsg.feedbackmsgName = this.name;
        feedbackmsg.feedbackmsgPhone = this.phone;
        feedbackmsg.feedbackmsgEmail = this.email;
        feedbackmsg.feedbackmsgContent = this.desc;
        this.$axios({
          url: '/feedBack/addFeedBack',
          method: 'post',
          data: this.$qs.stringify(feedbackmsg),
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }).then((res) => {
          const result = res.data;
          switch (result) {
            case 'success':
              this.$message({
                type: 'success',
                message: '反馈成功'
              });
              this.$router.push('/IndexPage')
              break;
            case 'error':
              this.$message({
                type: 'error',
                message: '反馈失败'
              });
              break;
            default:
              this.$message({
                type: 'error',
                message: '未知错误'
              });
          }
        })
      },
    }
  }
</script>

<style scoped>

</style>
