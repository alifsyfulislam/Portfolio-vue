<template>
  <div>
    <main>
      <about-summ></about-summ>
      <my-skills></my-skills>
      <my-portfolio></my-portfolio>
      <my-experience></my-experience>
      <my-education></my-education>
      <my-training></my-training>
      <my-references></my-references>
    </main>
  </div>
</template>


<script>
  import AboutSumm from './home/AboutSumm'
  import Skills from './home/Sills'
  import Portfolio from './home/Portfolio'
  import Experience from './home/Experience'
  import Education from './home/Education'
  import Training from './home/Training'
  import References from './home/References'

  export default {
    components:{
      'about-summ': AboutSumm,
      'my-skills': Skills,
      'my-portfolio': Portfolio,
      'my-experience': Experience,
      'my-education': Education,
      'my-training':Training,
      'my-references': References,
    }
  }
</script>

<style>

</style>
