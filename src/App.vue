<template>
  <div class="webBg">
    <header style="text-align: center">
      <img src="./assets/images/headLogo.png" width="100%"/>
    </header>
    <Daohanglan/>
    <Dibu/>
  </div>
</template>

<script>
  /*引入组件*/
  import Daohanglan from './components/daohanglan/Daohanglan.vue'
  import Dibu from './components/dibu/Dibu.vue'
export default {
  name: 'App',
  components:{
    Daohanglan,
    Dibu
  }
}
</script>

<style>
  .webBg{
    background-image: url("./assets/images/bg.png");
  }
</style>
