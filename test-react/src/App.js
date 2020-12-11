import React, { Suspense } from 'react'
import { Provider }        from 'react-redux'
import { renderRoutes }    from 'react-router-config'
import { HashRouter }      from 'react-router-dom'
import routes              from  './router'
import store               from './store'

import { Spin }            from 'antd';
import AppHeader           from './components/app-header/index'
function App() {
  return (
    <Provider store={store}>
      <HashRouter>
         <AppHeader />
         <Suspense fallback={<Spin />}>{renderRoutes(routes)}</Suspense>
      </HashRouter>
    </Provider>
  );
}

export default App;
