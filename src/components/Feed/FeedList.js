import React, {useState, useEffect} from 'react'
import {getFeedPosts} from '../../services/api'
import Post from './Post'
import Loader from '../Shared/Loader'

const FeedList = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getFeedPosts()
        setPosts(data)
      } catch (err) {
        console.error('Failed to load feed:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  if (loading) return <Loader />

  return (
    <div className="feed-list">
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  )
}

export default FeedList
