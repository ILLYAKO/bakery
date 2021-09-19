import React, { useState, useContext, useRef } from "react";
import { Context } from "../../../..";
import Alert from "../../../particles/Alert";

export default function UploadProductPage() {
  const form = useRef(null);
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
    setSuccessMsg("");
    e.preventDefault();
    if (!selectedFile) return;
    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);
    const data = new FormData(form.current);
    store.uploadProduct(data);
    setSuccessMsg("Product added successfully!");
    setFileInputState("");
    setPreviewSource("");
    reader.onerror = () => {
      console.error("Error");
      setErrMsg("something went wrong!");
    };
  };
  return (
    <div>
      <h3 className="title">Upload Product</h3>
      <Alert msg={errMsg} type="danger" />
      <Alert msg={successMsg} type="success" />
      <form
        ref={form}
        onSubmit={handleSubmitFile}
        className="form"
        id="productform"
      >
        <div className="form-group row">
          <div className="col-sm-10">
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="segmentInput" className="col-sm-2 col-form-label">
            Baking Segment
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              name="segment"
              id="segmentInput"
              placeholder="Choose one from the list: bread, cakes,cookies, pies."
            />
            <div id="segmentHelp" className="form-text">
              List: bread, cakes, cookies, pies.
            </div>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="nameInput" className="col-sm-2 col-form-label">
            Name
          </label>
          <div className="col-sm-10">
            <input type="text" name="name" id="nameInput" placeholder="Name" />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="priceInput" className="col-sm-2 col-form-label">
            Price, CAD
          </label>
          <div className="col-sm-10">
            <input
              type="number"
              name="price"
              min="0"
              step="0.01"
              id="priceInput"
              placeholder="Price"
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="vendorInput" className="col-sm-2 col-form-label">
            Vendor
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              name="vendor"
              id="vendorInput"
              placeholder="Vendor"
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="descriptionInput" className="col-sm-2 col-form-label">
            Description
          </label>
          <div className="col-sm-10">
            <textarea
              rows="4"
              cols="50"
              name="description"
              form="productform"
              placeholder="Enter description here..."
            ></textarea>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="fileInput" className="col-sm-2 col-form-label">
            File
          </label>
          <div className="col-sm-10">
            <input
              id="fileInput"
              type="file"
              name="file"
              onChange={handleFileInputChange}
              value={fileInputState}
              className="form-input"
            />
          </div>
        </div>
      </form>
      {previewSource && (
        <img src={previewSource} alt="chosen" style={{ height: "300px" }} />
      )}
    </div>
  );
}
