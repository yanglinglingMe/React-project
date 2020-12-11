import React from 'react'
import { Redirect } from 'react-router-dom'

const Index = React.lazy(() => import('@/pages/index'))
const Recommend = React.lazy(() => import('@/pages/index/child-pages/recommend'))
const routes = [
    { path:'/',exact:true,render:() => <Redirect to="/index"/> },
    {
        path: '/index',
        component:Index,
        routes:[ //相当于二级路由
            {
                path:'/index',
                exact:true,
                render:() => <Redirect to="/index/recommend" />
            },
            {
                path:'/index/recommend',
                component:Recommend
            }
        ]
    }
]

export default routes