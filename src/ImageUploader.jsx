import React, { useState } from 'react';

function ImageUploader() {
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
      document.querySelector('input').style.display = 'none'
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        style={{ margin: '10px 0' }}
      />
      {selectedImage && (
        <div style={{ marginTop: '20px' }}>
          <img
            src={selectedImage}
            alt="Uploaded Preview"
            style={{ Width: '300px', maxHeight: '250px' , borderRadius: '50%' }}
          />
        </div>
      )}
    </div>
  );
}

export default ImageUploader;
