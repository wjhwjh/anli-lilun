 /*
 创造一个作用域，
 对外暴露一个接口供使用，但是外部却不能修改作用域内容的变量；
 防止变量被不小心穿改
 **/
// 一般的做法
//一个匿名函数
(function(window){
  //console.log(window)
  let myObj={};
  let obj = {
    name:'惠子是我的名字',
    age:'20'
  }
  myObj.tell = function(){
    console.log('这是我内部的变量----',obj.name+'and 年龄'+obj.age)
  }
  window.myObj = myObj
})(window)
