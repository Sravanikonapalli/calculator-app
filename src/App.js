import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {AuthProvider} from './context/AuthContext'
import {FirestoreProvider} from './context/FirestoreContext'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import PrivateRoute from './components/Auth/PrivateRoute' 
import Header from './components/Shared/Header'

const App = () => {
  return (
    <AuthProvider>
      <FirestoreProvider>
        <Router>
          <Header />
          <Routes>
            
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/profile"
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              }
            />
          </Routes>
        </Router>
      </FirestoreProvider>
    </AuthProvider>
  )
}

export default App
