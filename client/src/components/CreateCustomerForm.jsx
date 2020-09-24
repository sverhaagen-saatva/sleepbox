import React, {useState} from 'react'
import API from '../functions/API'

function CreateCustomerForm({setCustomer, setError}) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  
  const handleSubmit = (e) => {
    e.preventDefault()
    API.sendPost('create-customer', {
        email,
        password,
        name
    })
    .then((result) => {
        console.log('res', result)
        setCustomer(result.user.result)
        setError('')
      }).catch(e => {
          setError(`${e}`)
      })
  }

  return (
    <form id="signup-form" className="col full-width centered" onSubmit={handleSubmit}>
        <h1 className="margin-bottom-3">Sign up</h1>
        <div className="col full-width">
            <input
                id="name"
                type="text"
                className="textInput margin-bottom-1 full-width"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                required
            />
                
            <input
            id="email"
            type="text"
            className="textInput margin-bottom-1 full-width"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            required
            />

            <input
            id="password"
            type="password"
            className="textInput margin-bottom-1 full-width"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
            required
            />
        </div>
​
      <button id="submit" type="submit">
        <span id="button-text">Sign up</span>
      </button>
    </form>
  )
}

export default CreateCustomerForm
