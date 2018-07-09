<template>
  <div>
    <main>
      <my-info></my-info>
      <my-form></my-form>
    </main>
  </div>
</template>

<script>
  import Info from './contact/Info'
  import InfoMes from './contact/InfoMes'

  export default {
    components:{
      'my-info': Info,
      'my-form': InfoMes,
    }
  }
</script>
<style></style>
