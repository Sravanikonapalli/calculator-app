import React, {useState} from 'react'
import ImageUploader from '../Feed/ImageUploader'

const EditProfile = ({profile, onUpdate}) => {
  const [updatedProfile, setUpdatedProfile] = useState(profile)

  const handleInputChange = e => {
    const {name, value} = e.target
    setUpdatedProfile(prev => ({...prev, [name]: value}))
  }

  const handleFileUpload = file => {
    console.log(file)
  }

  const handleSave = () => {
    onUpdate(updatedProfile)
  }

  return (
    <div className="edit-profile">
      <input
        type="text"
        name="name"
        value={updatedProfile.name}
        onChange={handleInputChange}
        placeholder="Name"
      />
      <textarea
        name="bio"
        value={updatedProfile.bio}
        onChange={handleInputChange}
        placeholder="Bio"
      />
      <ImageUploader onUpload={handleFileUpload} />
      <button onClick={handleSave}>Save</button>
    </div>
  )
}

export default EditProfile
