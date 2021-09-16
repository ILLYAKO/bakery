import React, { useState, useContext } from "react";
import { Context } from "../../../..";
import Alert from "../../../particles/Alert";

export default function UploadProductPage() {
  const [name, setName] = useState();
  const [fileInputState, setFileInputState] = useState("");
  const [previewSource, setPreviewSource] = useState("");
  const [selectedFile, setSelectedFile] = useState();
  const [successMsg, setSuccessMsg] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const { store } = useContext(Context);

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    previewFile(file);
    setSelectedFile(file);
    setFileInputState(e.target.value);
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  const handleSubmitFile = (e) => {
    e.preventDefault();
    if (!selectedFile) return;
    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);
    let data = new FormData();
    data.append("name", name);
    data.append("file", selectedFile);
    store.uploadProduct(data);
    setSuccessMsg("Image uploaded successfully");
    setFileInputState("");
    setPreviewSource("");
    reader.onerror = () => {
      console.error("Error");
      setErrMsg("something went wrong!");
    };
  };
  return (
    <div>
      <h1 className="title">Upload an Image</h1>
      <Alert msg={errMsg} type="danger" />
      <Alert msg={successMsg} type="success" />
      <form onSubmit={handleSubmitFile} className="form">
        <div>
          <label htmlFor="nameInput">Name</label>
          <input
            type="text"
            id="nameInput"
            onChange={(event) => {
              const { value } = event.target;
              setName(value);
            }}
          />
        </div>
        <div>
          <label htmlFor="fileInput">File</label>
          <input
            id="fileInput"
            type="file"
            name="image"
            onChange={handleFileInputChange}
            value={fileInputState}
            className="form-input"
          />
        </div>

        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
      {previewSource && (
        <img src={previewSource} alt="chosen" style={{ height: "300px" }} />
      )}
    </div>
  );
}
