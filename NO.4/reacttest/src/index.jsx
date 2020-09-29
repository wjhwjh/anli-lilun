import App from './App'
import '../common/base.css'

if(module.hot){
  module.hot.accept(err=>{
    console.log('热替换出错---')
  })
}