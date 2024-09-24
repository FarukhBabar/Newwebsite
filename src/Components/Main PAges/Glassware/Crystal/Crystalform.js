import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StaticForm from '../../../../../FormPage1';
const Crystalform = () => {
  const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState(null);
const navigate = useNavigate();
    const handleNameChange = (e) => setName(e.target.value);
    const handleTitleChange = (model) => setTitle(model);
    const handlePriceChange = (e) => setPrice(e.target.value);
    const handleFileChange = (e) => setImage(e.target.files[0]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        let formData = new FormData();
        formData.append('name', name);
        formData.append('title', title);
        formData.append('price', price);
        if (image) {
            formData.append('image', image);
        }

        try {
            let response = await fetch('https://api.homeessentialshive.co.uk/api/v1/auth/crystalproducts', {
                method: 'POST',
                body: formData
            });

            if (!response.ok) throw new Error('Network response was not ok');

            let result = await response.json();
            if (result) {
                alert('Product added successfully');
                navigate('/listcrystal')
               
            } else {
                alert('Error in connection');
            }
        } catch (error) {
            console.error('Error adding data:', error);
        }
    };

    return (
        <StaticForm
            name={name}
            title={title}
            price={price}
            onNameChange={handleNameChange}
            onTitleChange={handleTitleChange}
            onPriceChange={handlePriceChange}
            onFileChange={handleFileChange}
            onSubmit={handleSubmit}
            buttonLabel="Add Product"
            listUrl="/listcrystal" 
        />
    );
};

export default Crystalform