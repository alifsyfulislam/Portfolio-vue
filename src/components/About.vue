<template>
  <div>
    <main>
      <owl-slider></owl-slider>
      <timeline></timeline>
    </main>
  </div>
</template>

<script>
  import OwlSlider from './about/OwlSlider'
  import Timeline from './about/Timeline'

  export default {
    components: {
      'owl-slider': OwlSlider,
      'timeline': Timeline,
    }
  }
</script>

<style>

</style>
