import { useState } from "react";
import { submitMultipartForm } from "../lib";

const Upload = () => {
  const [file, setFile] = useState(null);

  const submitHandler = (e) => {
    e.preventDefault();
    submitMultipartForm('media', file)
  };
  
  return (
    <form
      onSubmit={submitHandler}
      encType="multipart/form-data"
      action="/upload"
      method="POST"
    >
      <input
        type="file"
        name="media"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <button>Upload</button>
    </form>
  );
};

export default Upload;
