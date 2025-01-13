import React from 'react';

const FileUploader = ({ onFileUpload }) => {
  const handleFileChange = (event) => {
    onFileUpload([...event.target.files]);
  };

  return (
    <div className="p-4 border-dashed border-2 border-gray-300 rounded">
      <label className="block text-center cursor-pointer">
        Drag files here or click to upload
        <input
          type="file"
          multiple
          onChange={handleFileChange}
          className="hidden"
        />
      </label>
    </div>
  );
};

export default FileUploader;