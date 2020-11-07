import { useState } from 'react';

export default function UploadForm() {
  const [fileList, setFileList] = useState(null);
  const [error, setError] = useState(null);

  const handleUpload = (e) => {
    const types = ['image/png', 'image/jpeg'];
    const selectedFileList = Object.values(e.target.files);
    let isFilesValid = true;
    selectedFileList.forEach((file) => {
      if (!types.includes(file.type)) {
        isFilesValid = false;
      }
    });

    if (selectedFileList.length > 0 && isFilesValid) {
      setFileList(selectedFileList);
      setError(null);
    } else {
      setFileList(null);
      setError('Please select image files (jpeg or png)');
    }
  };
  return (
    <form>
      <input type="file" multiple onChange={handleUpload} />
      {error && <div>{error}</div>}
      {fileList && fileList.map((file) => <div>{file.name}</div>)}
    </form>
  );
}
