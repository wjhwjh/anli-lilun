import App from './App'
import Mock from 'mockjs'
import '../common/base.css'


if(module.hot){
  module.hot.accept(err=>{
    console.log('热替换出错---')
  })
}
// mock参考文档 https://github.com/nuysoft/Mock/wiki/Syntax-Specification

// 数据的条数是随机的，最少1-10条
let dataSource = Mock.mock({
  'list|10':[{
    'id|+1':1,
    'name':'惠子',
    'age': 18,
    'love':{
      'food':'面食',
      'place':'家乡'
    },
    'work|2':[
      {
        'id|+1':10,
        'content|3':'这里是描述'
      }
    ]
  }]
});

let myData = JSON.stringify(dataSource, null, 1)
console.log(dataSource)
//console.log(myData)

// 查找数据中指定id的数据
function getData(data, id){
   let o = null;
   data.forEach(item => {
     if(item.id === id){
       console.log(111)
       o = item
       return item
     }else if(item.work&&item.work.length){
        console.log(222)
        getData(item.work, id)?o=getData(item.work, id):o
     }
   });

   //console.log(o)
   return o
};

console.log('这里是要返回的值',getData(dataSource.list, 17))

