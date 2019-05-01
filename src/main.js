import Vue from 'vue'
import App from './App'
import BodyInfo from '@/components/bodyInfo/BodyInfo.vue'
import router from './router'
import axios from 'axios';
import './assets/css/screen.min.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import ElementUI from 'element-ui'
import VueAMap from 'vue-amap';
import 'element-ui/lib/theme-chalk/index.css'
import {Card} from 'iview';
import 'iview/dist/styles/iview.css';
import qs from 'qs';

Vue.use(ElementUI)
Vue.use(VueAMap);
Vue.component('Card', Card);
Vue.component('BodyInfo', BodyInfo)
Vue.prototype.$axios = axios;
Vue.prototype.$qs  = qs;
axios.defaults.baseURL = "http://111.230.19.105:8088";


VueAMap.initAMapApiLoader({
  key: '6d9302257d8b31d6e015d548887fb7a0',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
  // 默认高德 sdk 版本为 1.4.4
  v: '1.4.4'
});

new Vue({
  el: '#app',
  components: {App},
  template: '<App/>',
  router,
  render: h => h(App)

});
