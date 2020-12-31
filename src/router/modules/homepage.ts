
export default ((pre: string) => [
    {
        path: `/${pre}/home`,
        name: 'Home',
        component: () => import('@/views/homepage/home.vue'),
    },
    {
        path: `/${pre}/about`,
        name: 'About',
        component: () => import('@/views/homepage/about.vue'),
    },
])('index')