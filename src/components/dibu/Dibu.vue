<template>
  <div>
    <footer class="main-footer">
      <div class="container">
        <div class="row">
          <div style="margin-bottom: 10px;width: 33%"><img :src="linksTitle" alt="荣誉墙"/></div>
          <hr>
            <div class="widget" style="margin-top: 10px">
              <div class="content tag-cloud friend-links">
                <a v-for="(item,key) in links" :href="item.linksHref">{{item.linksName}}</a>
              </div>
            </div>
        </div>
      </div>
    </footer>
    <hr>
    <div class="copyright">
      <div class="container">
        <div class="row">
          <div class="col-sm-12"><span>Copyright © <a>萍乡学院信息与计算机工程学院</a></span> | <span><a target="_blank">京ICP备11008151号</a></span> | <span>京公网安备11010802014853</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Dibu",
      data(){
          return{
            //友情链接
            links:[],
            linksTitle:''
          }
      },
      created(){
          this.getLinks();
          this.getPic()
      },
      methods:{
          getPic(){
            let urlTemp1 = "assets/images/links.png";
            this.linksTitle = require("@/" + urlTemp1);
          },
        //获取友情链接
        getLinks(){
          this.$axios.post('/links/getLinks').then((res)=>{
            if(res.data) {
              this.links = res.data;
            }
          })
        },
      }
    }
</script>

<style scoped>

</style>
