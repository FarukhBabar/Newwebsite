import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import FroalaEditorComponent from 'react-froala-wysiwyg';
import "../../../admin.css";

const Sportsbottelform = () => {
  const [Image, setImage] = useState(null);
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [ImageError, setImageError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [titleError, setTitleError] = useState(false);
  const [priceError, setPriceError] = useState(false);
  const navigate = useNavigate();

  const handleDescriptionChange = (model) => {
    setTitle(model);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let formData = new FormData();
    formData.append('name', name);
    formData.append('title', title);
    formData.append('price', price);
    formData.append('image', Image);

    if (!name || !title || !price) {
      if (!name) setNameError(true);
      if (!title) setTitleError(true);
      if (!price) setPriceError(true);
      if (!Image) setImageError(true);
      return;
    }

    try {
      let result = await fetch("https://api.homeessentialshive.co.uk/api/v1/auth/sportbottelproducts", {
        method: "POST",
        body: formData,
      });
      result = await result.json();
      if (result) {
        navigate("/listsportbootel");
        alert("Product added successfully");
      } else {
        alert("Error in connection");
      }
    } catch (error) {
      console.log("ERROR IN DB");
    }
  };

  return (
    <div>
      <Link to="/listsportbootel" className="btn btn-success mss mt-2">Product-list</Link>
      <form className='marr'>
        <div className="mb-3 maa">
          <label className="form-label mt-2">Item Name</label>
          <input
            type="text"
            className={`form-control ${nameError ? 'is-invalid' : ''}`}
            name='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Enter your Item name'
          />
          {nameError && <div className="invalid-feedback">Please enter your name</div>}
        </div>
        <div className="mb-3 maa">
          <label className="form-label">Description</label>
          <FroalaEditorComponent
            tag='textarea'
            model={title}
            onModelChange={handleDescriptionChange}
          />
          {titleError && <div className="invalid-feedback">Please enter your title</div>}
        </div>
        <div className="mb-3 maa">
          <label className="form-label">Price</label>
          <input
            type="text"
            className={`form-control form-control-lg ${priceError ? 'is-invalid' : ''}`}
            name='price'
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder='Enter your Item title'
          />
          {priceError && <div className="invalid-feedback">Please enter your price</div>}
        </div>
        <div className="mb-3 maa">
          <label className="form-label">Image</label>
          <input
            type="file"
            className={`form-control form-control-lg ${ImageError ? 'is-invalid' : ''}`}
            name='Image'
            onChange={(e) => setImage(e.target.files[0])}
            placeholder='Enter your Item title'
          />
          {ImageError && <div className="invalid-feedback">Please enter your price</div>}
        </div>
        <button type="submit" className="btn btn-success mss" onClick={handleSubmit}>Add Product</button>
      </form>
    </div>
  );
};

export default Sportsbottelform;
