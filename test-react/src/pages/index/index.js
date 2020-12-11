import React, { memo } from 'react'
import { HeaderCategory} from './style'
import { renderRoutes } from 'react-router-config'

export default memo(function Index(props) {
    const { route } = props
    console.log(route,'route')
    return (
        <HeaderCategory>
            <div className="top">
                首页
            </div>
            {/*如果不写,则无法显示二级下的路由页面*/}
            {renderRoutes(route.routes)}
        </HeaderCategory>
    )
})
