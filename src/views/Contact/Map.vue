<template>
    <div>
      <div class="amap-page-container">
        <el-amap vid="amap" :zoom="zoom" :center="center" class="amap-demo" :plugin="plugin">
          <el-amap-info-window
            :position="currentWindow.position"
            :content="currentWindow.content"
            :visible="currentWindow.visible"
            :events="currentWindow.events">
          </el-amap-info-window>
        </el-amap>
        <div class="toolbar">
          <span v-if="loaded">
            location: lng = {{ lng }} lat = {{ lat }}
          </span>
          <span v-else></span>
        </div>
    </div>
      <span>单 位：江西省高等学校平面设计与动漫工程技术研究中心</span>
      <span>地址：萍乡市萍安中大道211号萍乡学院</span><br/>
      <span>邮政编码：337000</span>
      <span>办公电话：6682102</span>
      <span>电子邮箱：328941445@qq.com</span>
    </div>
</template>

<script>
  module.exports = {
    data () {
      let self = this;
      return {
        zoom: 14,
        center: [113.879873, 27.628312],
        windows: [
          {
            position: [113.879873, 27.628312],
            content: 'Hi! I am here!',
            visible: true,
            events: {
              close() {
                console.log('close infowindow1');
              }
            }
          }
        ],
        slotWindow: {
          position: [113.879873, 27.628312]
        },
        currentWindow: {
          position: [0, 0],
          content: '',
          events: {},
          visible: false
        },
        lng: 0,
        lat: 0,
        loaded: false,
        plugin: [{
          pName: 'Geolocation',
          events: {
            init(o) {
              // o 是高德地图定位插件实例
              o.getCurrentPosition((status, result) => {
                if (result && result.position) {
                  self.lng = result.position.lng;
                  self.lat = result.position.lat;
                  self.center = [self.lng, self.lat];
                  self.loaded = true;
                  self.$nextTick();
                }
              });
            }
          }
        }]
      }
    },

    mounted() {
      this.currentWindow = this.windows[0];
    },

  };
</script>

<style scoped>
  .amap-demo {
    height: 400px;
  }
</style>
