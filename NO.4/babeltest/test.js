//https://www.cnblogs.com/bai1218/p/12392180.html 参考文章
/*
1. 使用指令的方式进行编译
babel test.js --presets=@babel/preset-env

2. babel编译文件时遵守的规则设置
在package.json里可以
或者单独一个js文件，.babelrc

在编译的时候先查找.babelrc文件

*/

[1,2,3].map((item)=>{
  console.log(item)
});


[2,3,5,1].forEach(item => {
  console.log(item*2)
});