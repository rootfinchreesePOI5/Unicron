import React, { useState } from 'react';

const ImageUploader = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    // Handle image selection
    const handleImageChange = (event) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setSelectedImage(reader.result); // Set the image as a base64 string
        };
        reader.readAsDataURL(file);
      }
    };
  
  return (
    <div className='Profile'>
      <h2>Upload an Image</h2>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        style={{ margin: '10px 0' }}
      />
      {selectedImage && (
        <div style={{ marginTop: '20px' }}>
          <h3>Preview:</h3>
          <img
            src={selectedImage}
            alt="Uploaded Preview"
            style={{ maxWidth: '100%', maxHeight: '300px' }}
          />
        </div>
      )}
    </div>
  )
}

export default ImageUploader
