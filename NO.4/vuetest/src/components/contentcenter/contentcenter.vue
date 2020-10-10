<template>
  <div>这是一个内容模板
    <headnav></headnav>
  </div>
</template>
<script>
import headnav from '@component/navtop/headnav.vue'
export default {
  data(){
    return {
      msg:'这是一个数据'
    }
  },
  components:{
    headnav
  }
}
</script>
