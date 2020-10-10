<template>
  <div>
       这是一个模板www
       <!-- <headnav></headnav> -->
       <contentcenter></contentcenter>
  </div>
</template>
<script>
//console.log(components)
 import headnav from '@component/navtop/headnav'
import contentcenter from '@component/contentcenter/contentcenter'
export default {
  name:'App',
  data(){
    return{
      msg:'这是一个字符串'
    }
  },
  created(){
    console.log('用来请求数据的--',this.$axios)
    this.$axios({
      url:`/api`
    }).then(res=>{
      console.log('请求到的数据',res)
    }) 

  },
  components:{
      headnav,
      contentcenter
  }
}
</script>
<style scoped>

</style>