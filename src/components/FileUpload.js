import React, { useState } from 'react';
import axios from 'axios';
import './FileUpload.css';  // Importing the CSS file

function FileUpload() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://127.0.0.1:8000/upload/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div className="file-upload-container">
      <form onSubmit={handleSubmit} className="file-upload-form">
        <input type="file" onChange={handleFileChange} accept=".xlsx, .xls" className="file-input"/>
        <button type="submit" className="upload-button">Upload</button>
      </form>
    </div>
  );
}

export default FileUpload;
