import React , { Suspense } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Route, Switch } from "react-router-dom"
import { ConnectedRouter } from 'connected-react-router'
import configureStore, { history } from './store/configureStore'
import 'bootstrap/dist/css/bootstrap.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './index.css'
import * as serviceWorker from './serviceWorker'

const store = configureStore()
const HomePage = React.lazy(() => import('./components/HomePage/HomePage'))
const OrderPage = React.lazy(() => import('./components/OrderPage/OrderPage'))
const NavBar = React.lazy(() => import('./components/NavBar/NavBar'))
const loading = () => (
    <div className="animated fadeIn pt-3 text-center">
      <i className="fas fa-redo fa-spin"></i>
    </div>
  )

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Suspense fallback={loading()}>
          <div className="PizzaApp">
            <NavBar />
            <Switch>
              <Route exact path="/" render={() => <HomePage /> } />
              <Route exact path="/order" render={() => <OrderPage /> } />
            </Switch>
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
