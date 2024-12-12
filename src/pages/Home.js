import React from 'react'
import FeedList from '../components/Feed/FeedList'
import PostForm from '../components/Feed/PostForm'

const Home = () => {
  return (
    <div className="home-page">
      <PostForm onPostCreated={() => window.location.reload()} />
      <FeedList />
    </div>
  )
}

export default Home
