<template>
  <div>
       这是一个模板
       <headnav></headnav>
  </div>
</template>
<script>
console.log(components)
import headnav from 'F:/ALl/anli-lilun/NO.4/vuetest/src/components/navtop/headnav.vue'

export default {
  name:'App',
  data(){
    return{
      msg:'这是一个字符串'
    }
  },
  components:{
    headnav
  }
}
</script>
<style scoped>

</style>