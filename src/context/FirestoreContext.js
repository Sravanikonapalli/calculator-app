// src/context/FirestoreContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import { db } from '../services/firebase';  
import { collection, getDocs } from 'firebase/firestore';

const FirestoreContext = createContext();

export const useFirestore = () => useContext(FirestoreContext);

export const FirestoreProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const postsSnapshot = await getDocs(collection(db, 'posts'));
      setPosts(postsSnapshot.docs.map(doc => doc.data()));
    };

    fetchPosts();
  }, []);

  return (
    <FirestoreContext.Provider value={{ posts }}>
      {children}
    </FirestoreContext.Provider>
  );
};
