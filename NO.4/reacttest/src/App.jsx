import React from 'react'
import ReactDom from 'react-dom'

// 一方面箭头函数,低版本的浏览器不会支持
// 另一方面webpack裸奔，是处理不了es6语法的
// webpack默认只处理es5以及以下的js
// webpack处理html文件
const App = () => {
  return (
    <div>
      <h1>React大法好， hello World</h1>
    </div>
  )
}

export default App

ReactDom.render(<App></App>, document.getElementById('app'))