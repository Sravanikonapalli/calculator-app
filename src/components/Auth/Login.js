import React, {useState} from 'react'
import {useAuth} from '../../context/AuthContext'
import ErrorMessage from '../Shared/ErrorMessage'

const Login = () => {
  const {login} = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await login(email, password)
    } catch {
      setError('Failed to log in.')
    }
  }

  return (
    <div>
      <h2>Login</h2>
      <ErrorMessage message={error} />
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login
