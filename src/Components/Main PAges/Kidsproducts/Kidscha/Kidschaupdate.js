
import React, { useEffect, useState } from 'react';
import {useParams, useNavigate } from 'react-router-dom';
import StaticForm from '../../../../../FormPage1';

const Kidschaupdate = () => {
   const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState(null);
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://api.homeessentialshive.co.uk/api/v1/auth/newarrivalssingle/${params.id}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                setName(result.name);
                setTitle(result.title);
                setPrice(result.price);
                setImage(result.image); // Make sure this is handled correctly
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [params.id]);

    const handleNameChange = (e) => setName(e.target.value);
    const handleTitleChange = (model) => setTitle(model); // Ensure this updates the state
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
            let response = await fetch(`https://api.homeessentialshive.co.uk/api/v1/auth/newarrivalssingle/${params.id}`, {
                method: "PUT",
                body: formData
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            let result = await response.json();
            if (result) {
                alert("Product updated successfully");
                navigate("/listpal");
            } else {
                alert("Error in connection");
            }
        } catch (error) {
            console.error("Error updating data:", error);
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
            buttonLabel="Update Product"
            listUrl="/listpal" 
        />
    );
};

export default Kidschaupdate
