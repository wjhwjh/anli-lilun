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
    // console.log('用来请求数据的--',this.$axios)
    this.$axios({
      method:'get',
      // params:{
      //   a:1
      // },
      headers:{
       
      },
      url:'/api/login'

    }).then(res=>{
      console.log('请求到的数据',res)
    })
    this.$api.getdata().then(res=>{
      console.log('接口api请求到的数据',res)
    });
  },
  mounted(){
    document.cookie = "";
    let strCookie =document.cookie;
     document.cookie = "jsessioned=这是一个cookie值";  
    console.log(strCookie)
  },
  components:{
      headnav,
      contentcenter
  }
}
</script>
<style scoped>

</style>