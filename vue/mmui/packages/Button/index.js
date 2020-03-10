import XButton from './src'
// Vue.use()
XButton.install =function(Vue){
    Vue.component(XButton.name,XButton)
}
export default XButton