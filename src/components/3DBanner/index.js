import BannerComponent from './index.vue'
BannerComponent.install = (Vue) => {
    Vue.component(BannerComponent.name, BannerComponent)
}
export default BannerComponent