import React, {useState} from 'react'

const ImageUploader = ({onUpload}) => {
  const [preview, setPreview] = useState(null)

  const handleFileChange = e => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreview(reader.result)
        onUpload(file)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {preview && <img src={preview} alt="Preview" style={{width: '100px'}} />}
    </div>
  )
}

export default ImageUploader
