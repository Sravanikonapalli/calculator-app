import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { getUserProfile, updateUserProfile } from '../services/api'; // Ensure your API functions are defined
import ErrorMessage from '../components/Shared/ErrorMessage';

const Profile = () => {
  const { currentUser } = useAuth();
  const [profile, setProfile] = useState({
    name: '',
    bio: '',
    profilePicture: '',
  });
  const [editMode, setEditMode] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const userProfile = await getUserProfile(currentUser.uid);
        setProfile(userProfile);
      } catch (err) {
        setError('Failed to load profile.');
      }
    };

    if (currentUser) {
      fetchProfile();
    }
  }, [currentUser]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleUpdateProfile = async () => {
    try {
      await updateUserProfile(currentUser.uid, profile);
      setEditMode(false);
      setError('');
    } catch (err) {
      setError('Failed to update profile.');
    }
  };

  return (
    <div className="profile-page">
      <h2>My Profile</h2>
      <ErrorMessage message={error} />
      <div className="profile-details">
        <img
          src={profile.profilePicture || '/default-avatar.png'}
          alt="Profile"
          className="profile-picture"
        />
        {editMode ? (
          <>
            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleInputChange}
              placeholder="Name"
            />
            <textarea
              name="bio"
              value={profile.bio}
              onChange={handleInputChange}
              placeholder="Bio"
            />
            <button onClick={handleUpdateProfile}>Save</button>
            <button onClick={() => setEditMode(false)}>Cancel</button>
          </>
        ) : (
          <>
            <h3>{profile.name}</h3>
            <p>{profile.bio}</p>
            <button onClick={() => setEditMode(true)}>Edit Profile</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Profile;
