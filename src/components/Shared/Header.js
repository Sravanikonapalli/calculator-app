import React from 'react'
import {Link} from 'react-router-dom'
import {useAuth} from '../../context/AuthContext'

const Header = () => {
  const {currentUser, logout} = useAuth()

  return (
    <header className="header">
      <h1>Social Media App</h1>
      <nav>
        <Link to="/">Home</Link>
        {currentUser ? (
          <>
            <Link to="/profile">Profile</Link>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </nav>
    </header>
  )
}

export default Header
