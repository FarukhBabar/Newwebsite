 
 import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Sportsbottelupdate = () => {
    const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState(null);
    let params = useParams();

    const stripHTML = (html) => {
        const div = document.createElement('div');
        div.innerHTML = html;
        return div.textContent || div.innerText || '';
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://api.homeessentialshive.co.uk/api/v1/auth/sportbottelsingle/${params.id}`);
                const result = await response.json();
                setName(result.name);
                setTitle(stripHTML(result.title)); // Strip HTML tags from title
                setPrice(result.price);
                setImage(result.image);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        
        fetchData();
    }, [params.id]);

    const updateUser = async (e) => {
        e.preventDefault();

        let formData = new FormData();
        formData.append('name', name);
        formData.append('price', price);
        formData.append('title', title);
        if (image instanceof File) {
            formData.append('image', image);
        }

        try {
            let response = await fetch(`https://api.homeessentialshive.co.uk/api/v1/auth/sportbottelsingle/${params.id}`, {
                method: "PUT",
                body: formData
            });

            if (response.ok) {
                let result = await response.json();
                alert("Product updated successfully");
            } else {
                alert("Error in connection");
            }
        } catch (error) {
            console.error("Error updating data:", error);
            alert("Error updating data");
        }
    };

    return (
        <div>
            <form className='marr' onSubmit={updateUser}>
                <div className="mb-3 maa">
                    <label className="form-label mt-2">Item Name</label>
                    <input
                        type="text"
                        className='form-control form-control-lg'
                        name='name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder='Enter your Item name'
                    />
                </div>
                <div className="mb-3 maa">
                    <label className="form-label">Title</label>
                    <input
                        type="text"
                        className='form-control form-control-lg'
                        name='title'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder='Enter your Item title'
                    />
                </div>
                <div className="mb-3 maa">
                    <label className="form-label">Price</label>
                    <input
                        type="text"
                        className='form-control form-control-lg'
                        name='price'
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        placeholder='Enter your Item Price'
                    />
                </div>
                <div className="mb-3 maa">
                    <label className="form-label">Image</label>
                    <input
                        type="text"
                        className='form-control form-control-lg'
                        name='Image'
                        value={image instanceof File ? '' : image}
                        onChange={(e) => setImage(e.target.value)}
                        placeholder='Enter your Item image path or name'
                    />
                    <input
                        type="file"
                        className='form-control form-control-lg'
                        name='Image'
                        onChange={(e) => setImage(e.target.files[0])}
                    />
                </div>
                <button type="submit" className="btn btn-success mss">Update Product</button>
            </form>
        </div>
    );
};

export default Sportsbottelupdate;
