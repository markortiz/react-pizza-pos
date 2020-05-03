import React , { Suspense } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Route } from "react-router-dom"
import { ConnectedRouter } from 'connected-react-router'
import configureStore, { history } from './store/configureStore'
import { CSSTransition } from 'react-transition-group'
import 'bootstrap/dist/css/bootstrap.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './index.css'
import * as serviceWorker from './serviceWorker'

import NavBar from './components/NavBar/NavBar'
import HomePage from './components/HomePage/HomePage'
import OrderPage from './components/OrderPage/OrderPage'
import CheckoutPage from './components/CheckoutPage/CheckoutPage'

const store = configureStore()
const routes = [
  { path: '/', name: 'Home', Component: HomePage },
  { path: '/order', name: 'Order', Component: OrderPage },
  { path: '/checkout', name: 'Checkout', Component: CheckoutPage },
]
const loading = () => (
    <div className="d-flex justify-content-center">
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Suspense fallback={loading()}>
          <div className="PizzaApp">
            <NavBar />
            {routes.map(({ path, Component }) => (
              <Route key={path} exact path={path}>
                {({ match }) => (
                  <CSSTransition
                    in={match != null}
                    appear={true}
                    timeout={300}
                    classNames="page"
                    mountOnEnter
                    unmountOnExit
                  >
                    <Component />
                  </CSSTransition>
                )}
              </Route>
            ))}
          </div>
        </Suspense>
      </ConnectedRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
