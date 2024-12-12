import React from 'react'

const UserProfile = ({user}) => {
  const {name, bio, profilePicture} = user

  return (
    <div className="user-profile">
      <img src={profilePicture || '/default-avatar.png'} alt="Profile" />
      <h3>{name}</h3>
      <p>{bio}</p>
    </div>
  )
}

export default UserProfile
