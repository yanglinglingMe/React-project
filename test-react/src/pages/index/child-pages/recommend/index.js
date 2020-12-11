import React, { memo } from 'react'
import { renderRoutes } from 'react-router-config'

export default memo(function Recommend(props) {
    const { route } = props
    console.log(route,'route')
    return (
        <div>
            推荐啊
            {renderRoutes(route.routes)}
        </div>
    )
})