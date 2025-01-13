import React from 'react';

const FileList = ({ files, onRemoveFile }) => {
  return (
    <ul className="p-4">
      {files.map((file, index) => (
        <li key={index} className="flex justify-between items-center my-2">
          <span>{file.name}</span>
          <button
            onClick={() => onRemoveFile(index)}
            className="text-red-500 hover:underline"
          >
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
};

export default FileList;