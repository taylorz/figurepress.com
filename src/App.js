import React from "react"
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Homepage from './pages/Homepage/Homepage';
import createHistory from 'history/createBrowserHistory'

const routes = [
  { path: '/', name: 'Home', Component: Homepage },
]

const history = createHistory()
export default () => {
  return(
    <Router history={history}>
      <Route
        render={({ location }) => {
        const {key} = location
          return(
            <Switch location={location}>
              {routes.map(({ path, Component }) => (
                <Route key={path} exact path={path}>
                  {({ match }) => (
                    <div className="my-node">
                      <Component/>
                    </div>
                  )}
                </Route>
              ))}
            </Switch>
          )    
        }}
      />
    </Router>
  )
}
