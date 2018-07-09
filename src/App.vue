<template>
  <div>
    <my-header></my-header>
    <router-view></router-view>
    <my-footer></my-footer>
  </div>
</template>

<script>
  import Header from './components/Header'
  import Footer from './components/Footer'

  export default {
    components:{
      'my-header': Header,
      'my-footer': Footer,
    }
  }
</script>

<style>

</style>




