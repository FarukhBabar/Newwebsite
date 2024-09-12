
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StaticForm from '../../FormPage';

const Smokingessform = () => {
    const [data, setData] = useState({
        name: '',
        title: '',
        price: '',
        image: null
    });
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                let response = await fetch("https://api.homeessentialshive.co.uk/api/v1/auth/smokinproducts");
                let result = await response.json();
                setData({
                    name: result.name,
                    title: result.title,
                    price: result.price,
                    image: null
                });
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    const handleNameChange = (e) => {
        setData({ ...data, name: e.target.value });
    };

    const handlePriceChange = (e) => {
        setData({ ...data, price: e.target.value });
    };

    const handleDescriptionChange = (model) => {
        setData({ ...data, title: model });
    };

    const handleFileChange = (e) => {
        setData({ ...data, image: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        let formData = new FormData();
        formData.append('name', data.name);
        formData.append('title', data.title);
        formData.append('price', data.price);
        formData.append('image', data.image);

        if (!data.name || !data.title || !data.price || !data.image) {
            alert("Please fill all fields");
            return;
        }

        try {
            let response = await fetch("https://api.homeessentialshive.co.uk/api/v1/auth/smokinproducts", {
                method: "POST",
                body: formData
            });
            let result = await response.json();
            if (response.ok) {
                navigate("/listsmokigess");
                alert("Product added successfully");
            } else {
                alert("Error in connection");
            }
        } catch (error) {
            console.error("ERROR IN DB", error);
            alert("Error in connection");
        }
    };

    return (
        <StaticForm
            name={data.name}
            title={data.title}
            price={data.price}
            onNameChange={handleNameChange}
            onPriceChange={handlePriceChange}
            onDescriptionChange={handleDescriptionChange}
            onFileChange={handleFileChange}
            onSubmit={handleSubmit}
             listUrl="/listsmokigess" 
        />
    );
};

export default Smokingessform;
