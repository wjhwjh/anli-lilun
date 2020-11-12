
/*
这是一个用来测试es6中，export和import的文件
*/
let obj = {
  name:'huizi',
  age:'18'
}
let obj1 = {
  name:'惠子啊惠子',
  age:'18'
}
// export {obj}  // 对外接口是obj

// 重命名接口
export {
  obj as user1,
  obj1
}


// 默认导出一个函数
let testfn =  function(){
  console.log('---这是一个模块,用来测试导出的模块')
}
export default testfn
// export let f = 'aaaaa';
