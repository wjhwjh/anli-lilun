<template>
  <div>这是一个导航模板</div>
</template>
<script>
export default {
  data(){
    return {
      msg:'这是一个数据'
    }
  },
  created(){
    this.$api.getnav().then(res=>{
      console.log('导航栏目请求')
    })
  }
}
</script>
