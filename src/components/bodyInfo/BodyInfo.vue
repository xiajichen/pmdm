<template>
  <div class="container">
    <div class="row">
      <div class="col-md-3">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
        </el-menu>
      </div>
      <div class="col-md-9">
        <div class="row">
          <div class="col-md-3">
            <el-card :body-style="{ padding: '0px' }">
              <div style="width:100%;height: 130px" ><img :src="lake" class="image"></div>
              <div style="padding: 10px;">
                <a class="articletitle">好吃的汉堡</a><br>
                <p class="areacontent">大大大大大撒大苏达到哈哈打开蛤科的黄金卡号的卡号即可电话卡就打</p>
                <div class="bottom clearfix">
                  <time class="time">{{ currentDate }}</time>
                </div>
              </div>
            </el-card>
          </div>
          <div class="col-md-3">
            <el-card :body-style="{ padding: '0px' }">
              <div style="width:100%;height: 130px" ><img :src="lake" class="image"></div>
              <div style="padding: 10px;">
                <a class="articletitle">好吃的汉堡</a><br>
                <p class="areacontent">大大大大大撒大苏达到哈哈打开蛤科的黄金卡号的卡号即可电话卡就打</p>
                <div class="bottom clearfix">
                  <time class="time">{{ currentDate }}</time>
                </div>
              </div>
            </el-card>
          </div>
          <div class="col-md-3">
            <el-card :body-style="{ padding: '0px' }">
              <div style="width:100%;height: 130px" ><img :src="lake" class="image"></div>
              <div style="padding: 10px;">
                <a class="articletitle">好吃的汉堡</a><br>
                <p class="areacontent">大大大大大撒大苏达到哈哈打开蛤科的黄金卡号的卡号即可电话卡就打</p>
                <div class="bottom clearfix">
                  <time class="time">{{ currentDate }}</time>
                </div>
              </div>
            </el-card>
          </div>
          <div class="col-md-3">
            <el-card :body-style="{ padding: '0px' }">
              <div style="width:100%;height: 130px" ><img :src="lake" class="image"></div>
              <div style="padding: 10px;">
                <a class="articletitle">好吃的汉堡</a><br>
                <p class="areacontent">大大大大大撒大苏达到哈哈打开蛤科的黄金卡号的卡号即可电话卡就打</p>
                <div class="bottom clearfix">
                  <time class="time">{{ currentDate }}</time>
                </div>
              </div>
            </el-card>
          </div>
        </div>
        <div class="row" style="margin-top: 30px">
          <div class="col-md-3">
            <el-card :body-style="{ padding: '0px' }">
              <div style="width:100%;height: 130px" ><img :src="lake" class="image"></div>
              <div style="padding: 10px;">
                <a class="articletitle">好吃的汉堡</a><br>
                <p class="areacontent">大大大大大撒大苏达到哈哈打开蛤科的黄金卡号的卡号即可电话卡就打</p>
                <div class="bottom clearfix">
                  <time class="time">{{ currentDate }}</time>
                </div>
              </div>
            </el-card>
          </div>
          <div class="col-md-3">
            <el-card :body-style="{ padding: '0px' }">
              <div style="width:100%;height: 130px" ><img :src="lake" class="image"></div>
              <div style="padding: 10px;">
                <a class="articletitle">好吃的汉堡</a><br>
                <p class="areacontent">大大大大大撒大苏达到哈哈打开蛤科的黄金卡号的卡号即可电话卡就打</p>
                <div class="bottom clearfix">
                  <time class="time">{{ currentDate }}</time>
                </div>
              </div>
            </el-card>
          </div>
          <div class="col-md-3">
            <el-card :body-style="{ padding: '0px' }">
              <div style="width:100%;height: 130px" ><img :src="lake" class="image"></div>
              <div style="padding: 10px;">
                <a class="articletitle">好吃的汉堡</a><br>
                <p class="areacontent">大大大大大撒大苏达到哈哈打开蛤科的黄金卡号的卡号即可电话卡就打</p>
                <div class="bottom clearfix">
                  <time class="time">{{ currentDate }}</time>
                </div>
              </div>
            </el-card>
          </div>
          <div class="col-md-3">
            <el-card :body-style="{ padding: '0px' }">
              <div style="width:100%;height: 130px" ><img :src="lake" class="image"></div>
              <div style="padding: 10px;">
                <a class="articletitle">好吃的汉堡</a><br>
                <p class="areacontent">大大大大大撒大苏达到哈哈打开蛤科的黄金卡号的卡号即可电话卡就打</p>
                <div class="bottom clearfix">
                  <time class="time">{{ currentDate }}</time>
                </div>
              </div>
            </el-card>
          </div>
        </div>
        <div class="row" style="margin-top: 30px">
          <div class="col-md-3">
            <el-card :body-style="{ padding: '0px' }">
              <div style="width:100%;height: 130px" ><img :src="lake" class="image"></div>
              <div style="padding: 10px;">
                <a class="articletitle">好吃的汉堡</a><br>
                <p class="areacontent">大大大大大撒大苏达到哈哈打开蛤科的黄金卡号的卡号即可电话卡就打</p>
                <div class="bottom clearfix">
                  <time class="time">{{ currentDate }}</time>
                </div>
              </div>
            </el-card>
          </div>
          <div class="col-md-3">
            <el-card :body-style="{ padding: '0px' }">
              <div style="width:100%;height: 130px" ><img :src="lake" class="image"></div>
              <div style="padding: 10px;">
                <a class="articletitle">好吃的汉堡</a><br>
                <p class="areacontent">大大大大大撒大苏达到哈哈打开蛤科的黄金卡号的卡号即可电话卡就打</p>
                <div class="bottom clearfix">
                  <time class="time">{{ currentDate }}</time>
                </div>
              </div>
            </el-card>
          </div>
          <div class="col-md-3">
            <el-card :body-style="{ padding: '0px' }">
              <div style="width:100%;height: 130px" ><img :src="lake" class="image"></div>
              <div style="padding: 10px;">
                <a class="articletitle">好吃的汉堡</a><br>
                <p class="areacontent">大大大大大撒大苏达到哈哈打开蛤科的黄金卡号的卡号即可电话卡就打</p>
                <div class="bottom clearfix">
                  <time class="time">{{ currentDate }}</time>
                </div>
              </div>
            </el-card>
          </div>
          <div class="col-md-3">
            <el-card :body-style="{ padding: '0px' }">
              <div style="width:100%;height: 130px" ><img :src="lake" class="image"></div>
              <div style="padding: 10px;">
                <a class="articletitle">好吃的汉堡</a><br>
                <p class="areacontent">大大大大大撒大苏达到哈哈打开蛤科的黄金卡号的卡号即可电话卡就打</p>
                <div class="bottom clearfix">
                  <time class="time">{{ currentDate }}</time>
                </div>
              </div>
            </el-card>
          </div>
        </div>
        <div class="row" style="margin-top: 30px">
          <div class="col-md-3">
            <el-card :body-style="{ padding: '0px' }">
              <div style="width:100%;height: 130px" ><img :src="lake" class="image"></div>
              <div style="padding: 10px;">
                <a class="articletitle">好吃的汉堡</a><br>
                <p class="areacontent">大大大大大撒大苏达到哈哈打开蛤科的黄金卡号的卡号即可电话卡就打</p>
                <div class="bottom clearfix">
                  <time class="time">{{ currentDate }}</time>
                </div>
              </div>
            </el-card>
          </div>
          <div class="col-md-3">
            <el-card :body-style="{ padding: '0px' }">
              <div style="width:100%;height: 130px" ><img :src="lake" class="image"></div>
              <div style="padding: 10px;">
                <a class="articletitle">好吃的汉堡</a><br>
                <p class="areacontent">大大大大大撒大苏达到哈哈打开蛤科的黄金卡号的卡号即可电话卡就打</p>
                <div class="bottom clearfix">
                  <time class="time">{{ currentDate }}</time>
                </div>
              </div>
            </el-card>
          </div>
          <div class="col-md-3">
            <el-card :body-style="{ padding: '0px' }">
              <div style="width:100%;height: 130px" ><img :src="lake" class="image"></div>
              <div style="padding: 10px;">
                <a class="articletitle">好吃的汉堡</a><br>
                <p class="areacontent">大大大大大撒大苏达到哈哈打开蛤科的黄金卡号的卡号即可电话卡就打</p>
                <div class="bottom clearfix">
                  <time class="time">{{ currentDate }}</time>
                </div>
              </div>
            </el-card>
          </div>
          <div class="col-md-3">
            <el-card :body-style="{ padding: '0px' }">
              <div style="width:100%;height: 130px" ><img :src="lake" class="image"></div>
              <div style="padding: 10px;">
                <a class="articletitle">好吃的汉堡</a><br>
                <p class="areacontent">大大大大大撒大苏达到哈哈打开蛤科的黄金卡号的卡号即可电话卡就打</p>
                <div class="bottom clearfix">
                  <time class="time">{{ currentDate }}</time>
                </div>
              </div>
            </el-card>
          </div>
        </div>
        <div class="row">
          <el-pagination
            background
            layout="prev, pager, next"
            :total="1000" style="text-align:center;padding: 10px">
          </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "BodyInfo",
        methods: {
          handleOpen(key, keyPath) {
            console.log(key, keyPath);
          },
          handleClose(key, keyPath) {
            console.log(key, keyPath);
          }
        }
    }
</script>

<style scoped>
  .test2{
    margin-top: -1.4%;
  }
  .ss {
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 0, 0, .12);
  }
</style>
