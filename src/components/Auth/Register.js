import React, {useState} from 'react'
import {useAuth} from '../../context/AuthContext'
import ErrorMessage from '../Shared/ErrorMessage'

const Register = () => {
  const {register} = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await register(email, password)
    } catch {
      setError('Failed to create an account.')
    }
  }

  return (
    <div>
      <h2>Register</h2>
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
        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default Register
