/*
 封装一个其tab切换功能，其中包括增加、删除、切换
 感受一下封装对象的思想
 主要是对DOM的操作，事件的注册、DOM的获取创建删除
 其中的逻辑

*/
/*
分类这个思维方式，很棒。
*/
/*
问题：
1. that 的定义，定义为全局变量吗？如何使用，为什么要这样做
2.


为DOM插入元素时使用的内置方法，显的很高级的样子
insertAdjacentText(position, string);
insertAdjacentHTML(position, htmlstring);
insertAdjacentElement(position, element);

beforebegin
afterbegin
beforeend
afterend

*/
let that;
class Tab{
  constructor(id) {
    that = this; 
    this.domId = document.querySelector(id);
    this.nav = this.domId.querySelector(".nav");
    // this.navList = this.domId.querySelectorAll('li');
    this.add = this.domId.querySelector('.add');
    this.content=this.domId.querySelector('.content-wrapper');
    //this.contentDiv=this.domId.querySelectorAll('.content-wrapper > div');
    // console.log('内容元素--',this.contentDiv);
    this.init();
  }
  // 对DOM进行初始化，注册默认的事件
  init(){
    this.upDateDom();
    let len = this.navList.length;
    for(let i=0; i<len; i++){
      // console.log(this)
      this.navList[i].index=i;
      this.navList[i].onclick=this.toggleTab;
      this.deleteDiv[i].onclick=this.deleteTab;
    }
    // 添加操作
    this.add.onclick = this.addTab;
    // console.log(that)
  }
  // 清楚DOM类
  clearClass(){
    this.upDateDom();
    for(let i=0; i<this.navList.length; i++){
      this.navList[i].className='';
      this.contentDiv[i].className='';
    }
  }
  // 更新DOM, 每次创建DOM添加到对应位置，都应该重新获取创建后的DOM
  // 如果不重新获取，则代表是初始获取的
  upDateDom(){
    this.navList = this.domId.querySelectorAll('li');
    this.contentDiv=this.domId.querySelectorAll('.content-wrapper > div');
    this.deleteDiv = this.domId.querySelectorAll('.tabDelete');
  }
  // 添加
  addTab(){
    // console.log('添加操作');
    let random = Math.random();
    
    that.clearClass();
    // 添加切换的li
    let li = '<li class="active">新添加 <a class="tabDelete" href="javascript:void(0)">-</a></li>';
    that.nav.insertAdjacentHTML('beforeend',li)

    // 添加切换li对应的内容
    let div = ' <div class="active">新添加的内容'+random+'</div>';
    that.content.insertAdjacentHTML('beforeend', div);

    // 对于新添加的元素没有注册的事件
    that.init();
  }
  // 删除
  deleteTab(e){
    // 阻止事件冒泡
    e.stopPropagation();
    let parent = this.parentNode;
    let index = parent.index;
    console.log('索引--',index)
    parent.remove();
    that.contentDiv[index].remove();
    console.log(parent);
    that.init()
  }
  // 切换
  toggleTab(){
    // 这里的this指的是点击的当前DOM。并不是这个构造函数生成的对象
    // 要想调用构造函数中其它方法和属性，不能使用this调用，而是使用that
    // console.log(this.index, that.contentDiv[0]);
    that.clearClass();
    this.className='active';
    that.contentDiv[this.index].className='active';
  }
}

new Tab('#tabWrapper')