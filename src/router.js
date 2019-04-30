import * as React from 'react'
import { Route, Router, Switch } from 'dva/router'
import Article from './containers/article'
import createHistory from 'history/createBrowserHistory'

const App = () => (
    <Router history={createHistory()}>
        <Switch>
            <Route path="/" exact component={Article} />
        </Switch>
    </Router>
);

export default App