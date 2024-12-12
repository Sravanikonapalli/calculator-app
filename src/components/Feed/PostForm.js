import React, { useState } from 'react';
import { createPost } from '../../services/api';
import ImageUploader from './ImageUploader';

const PostForm = ({ onPostCreated }) => {
  const [content, setContent] = useState('');
  const [images, setImages] = useState([]);
  const [error, setError] = useState('');

  const handleImageUpload = (file) => {
    setImages((prevImages) => [...prevImages, URL.createObjectURL(file)]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newPost = { content, images };
      await createPost(newPost);
      onPostCreated(newPost);
      setContent('');
      setImages([]);
    } catch (err) {
      setError('Failed to create post.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        placeholder="What's on your mind?"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <ImageUploader onUpload={handleImageUpload} />
      {images.map((src, idx) => (
        <img key={idx} src={src} alt={`Preview ${idx + 1}`} />
      ))}
      {error && <p className="error">{error}</p>}
      <button type="submit">Post</button>
    </form>
  );
};

export default PostForm;
