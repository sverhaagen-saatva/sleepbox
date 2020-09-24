import React, {useState} from 'react'
import {Elements} from '@stripe/react-stripe-js'
import {loadStripe} from '@stripe/stripe-js'
import './App.css'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom'

import Home from './pages/Home'
import ErrorDisplay from './components/ErrorDisplay'
import Header from './components/Header'
import Signup from './pages/Signup'
import Manage from './pages/Manage'

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe("pk_test_51HTwDyC5KM6kXLzBBCoTpcEkmDMClBcmmdorJNNY273h6YI6aUvrkBUgHLWJCQV6Nv6Rm0sfYw6ZeSb78xe3AkYx00Ok7hzmAB")

function App() {
    const [customer, setCustomer] = useState(JSON.parse(localStorage.getItem('customer')))
    const saveCustomer = (newCustomer) => {
        setCustomer(newCustomer)
        localStorage.setItem('customer', JSON.stringify(newCustomer))
    }
    const [error, setError] = useState('')
    return (
        <Elements stripe={stripePromise}>
            <div className="App">
                <ErrorDisplay error={error} />
                <Router>
                <Header />

                    <Switch>
                        <Route path="/" exact>
                            <Home />
                        </Route>

                        <Route path="/signup">
                            <Signup setError={setError} customer={customer} setCustomer={saveCustomer} />
                        </Route>

                        <PrivateRoute path="/manage" customer={customer}>
                            <Manage customer={customer} />
                        </PrivateRoute>
                    </Switch>
                </Router>
            </div>
        </Elements>
    )
}

export default App


const PrivateRoute = ({ customer, children, ...rest }) => {
    return (
      <Route
        {...rest}
        render={({ location }) => {
          return (
            customer ? (
                children
            ) : (
                <Redirect to={{ pathname: "/", state: { from: location } }} />
            )
          )
        }}
      />
    )
  }
