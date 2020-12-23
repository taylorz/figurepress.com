import React from "react"
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { CSSTransition, TransitionGroup} from 'react-transition-group';
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
            <TransitionGroup component={null}>
                  <CSSTransition
                    key={key}
                    appear={true}
                    classNames="my-node"
                    timeout={{enter: 1000, exit: 500}}
                  >
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
                  </CSSTransition>

            </TransitionGroup>
          )    
        }}
      />
    </Router>
  )
}
