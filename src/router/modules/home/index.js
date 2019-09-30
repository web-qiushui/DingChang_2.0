const home = {
    path: '/home',
    name: 'Home',
    meta: { title: '首页' },
    component: () =>
        import ('@/views/home/index'),
    children: []
}
export default home