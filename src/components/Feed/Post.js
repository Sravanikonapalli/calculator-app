import React from 'react'

const Post = ({post}) => {
  const {author, content, createdAt, images} = post

  return (
    <div className="post">
      <h3>{author}</h3>
      <p>{content}</p>
      {images &&
        images.map((img, idx) => (
          <img key={idx} src={img} alt={`Post image ${idx + 1}`} />
        ))}
      <span>{new Date(createdAt).toLocaleString()}</span>
    </div>
  )
}

export default Post
