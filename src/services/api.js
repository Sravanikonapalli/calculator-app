import { db } from './firebase';
import { collection, getDocs, addDoc, doc, updateDoc } from 'firebase/firestore';

export const getFeedPosts = async () => {
  const postsSnapshot = await getDocs(collection(db, 'posts'));
  return postsSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const createPost = async (post) => {
  await addDoc(collection(db, 'posts'), post);
};

export const getUserProfile = async (userId) => {
  const userDoc = doc(db, 'profiles', userId);
  const profileSnapshot = await getDocs(userDoc);
  return profileSnapshot.data();
};

export const updateUserProfile = async (userId, profileData) => {
  const userDoc = doc(db, 'profiles', userId);
  await updateDoc(userDoc, profileData);
};
