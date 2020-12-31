export default ((pre: string) => [
    {
        path: `/${pre}/news1`,
        name: 'News1',
        component: () => import('@/views/news/news1.vue'),
    },
    {
        path: `/${pre}/news2`,
        name: 'News2',
        component: () => import('@/views/news/news2.vue'),
    },
])('news')