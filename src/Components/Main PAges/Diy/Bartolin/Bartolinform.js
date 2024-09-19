// import React, { useEffect, useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import "../../../admin.css"


// const Bartolinform = () => {
//   const [Image , setImage]=useState(null)
//   const [name , setname]=useState()
//   const [title , settitle] =useState()
//   const [price , setprice] = useState()
//   const [ImageError , setImageError]=useState()
//   const [nameError, setNameError] = useState(false);
//     const [titleError, settitlteError] = useState(false);
//     const [priceError, setPriceError] = useState(false);
//     const nevigate = useNavigate();
//     const handlesubmit = async(e)=>{

//       e.preventDefault();

//       let formdata = new FormData()

//       formdata.append('name', name)

//       formdata.append('title', title)

//       formdata.append('price', price)

//       formdata.append('image', Image)

//       if(!name || !title || !price){

//       if (!name) setNameError(true);

//       if (!title) settitlteError(true);

//       if (!price) setPriceError(true);

//       if(!Image) setImageError(true)
      
//       return;
//     }
//     try {
//       let result = await fetch("https://api.homeessentialshive.co.uk/api/v1/auth/bartolinproducts" , {
//         method: "post",
//         body :formdata
      
//       })
//       result = await result.json();
//       if(result){
//         nevigate("/listobstical")
//         alert("Product added sucessfully")
//         }
//         else{
//           alert("Error in connection")
//         }
//     } catch (error) {
//       console.log("ERROR IN DB")
//     }
    
//     }
//   return (

//     <div>
      
//       <Link to="/listbartolin" className="btn btn-success mss mt-2" >Product-list</Link>
//       <form className='marr '>
//   <div className="mb-3 maa ">
//     <label  className="form-label mt-2">ITem Name</label>
//     <input type="text" className={`form-control ${nameError ? 'is-invalid' : ''}`}  name='name' value={name} onChange={(e)=>setname(e.target.value)}  placeholder='Enter your Item name' />
//     {nameError && <div className="invalid-feedback">Please enter your name</div>}
//     {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
//   </div>
//   <div className="mb-3 maa ">
//     <label  className="form-label">Description</label>
//     <input type="text" className={`form-control form-control-lg ${titleError ? 'is-invalid' : ''}`}  name='title' value={title} onChange={(e)=>settitle(e.target.value)} placeholder='Enter your Item title' />
//     {titleError && <div className="invalid-feedback">Please enter your title</div>}
//   </div>
//   <div className="mb-3 maa ">
//     <label  className="form-label">Price</label>
//     <input type="text" className={`form-control form-control-lg ${priceError ? 'is-invalid' : ''}`} name='price' value={price} onChange={(e)=>setprice(e.target.value)} placeholder='Enter your Item title' />
//     {priceError && <div className="invalid-feedback">Please enter your price</div>}
//   </div>
//   <div className="mb-3 maa ">
//     <label  className="form-label">Image</label>
//     <input type="file" className={`form-control form-control-lg ${ImageError ? 'is-invalid' : ''}`} name='Image'  onChange={(e)=>setImage(e.target.files[0])} placeholder='Enter your Item title' />
//     {ImageError && <div className="invalid-feedback">Please enter your price</div>}
//   </div>
  
//   <button type="submit" className="btn btn-success mss" onClick={handlesubmit}>Add Product</button>
// </form>

     
//     </div>
//   )
// }

// export default Bartolinform;

import React, {  useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StaticForm from '../../../FormPage';
const Bartolinform = () => {
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
            let response = await fetch('https://api.homeessentialshive.co.uk/api/v1/auth/bartolinproducts', {
                method: 'POST',
                body: formData
            });

            if (!response.ok) throw new Error('Network response was not ok');

            let result = await response.json();
            if (result) {
                alert('Product added successfully');
                navigate('/listbartolin')
               
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
            listUrl="/listbartolin" 
        />
    );
};

export default Bartolinform