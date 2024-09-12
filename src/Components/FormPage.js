// StaticForm.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import FroalaEditorComponent from 'react-froala-wysiwyg';
import 'froala-editor/js/plugins.pkgd.min.js';
// import './Pages/Adminside/admin.css';

const StaticForm = ({ name, title, price, onNameChange, onTitleChange, onPriceChange, onFileChange, onSubmit, buttonLabel ,listUrl }) => {
    return (
        <div className="container mt-5">
            <Link to={listUrl} className="btn btn-success mb-4">Product List</Link>
            <h2 className="mb-4 text-center">{buttonLabel}</h2>
            <form className="p-4 shadow-lg rounded bg-white" onSubmit={onSubmit}>
                <div className="mb-3">
                    <label className="form-label mt-2">Item Name</label>
                    <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={name}
                        onChange={onNameChange}
                        placeholder="Enter your Item name"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <FroalaEditorComponent
                        tag="textarea"
                        model={title}
                        onModelChange={onTitleChange}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Price</label>
                    <input
                        type="text"
                        className="form-control"
                        name="price"
                        value={price}
                        onChange={onPriceChange}
                        placeholder="Enter your Item price"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Image</label>
                    <input
                        type="file"
                        className="form-control mt-2"
                        name="image"
                        onChange={onFileChange}
                    />
                </div>
                <button type="submit" className="btn btn-success w-100">{buttonLabel}</button>
            </form>
        </div>
    );
};

export default StaticForm;

