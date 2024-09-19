import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Framsmirrorcard = ({ user }) => {
   const navigate = useNavigate();

  const handleImageClick = () => {
    // Replace spaces with hyphens and remove any non-alphanumeric characters to create a URL-friendly product name
    const productName = user.name.replace(/\s+/g, '-').replace(/[^a-zA-Z0-9-]/g, '').toLowerCase();
    navigate(`/product/framsmirror/${productName}`, { state: { id: user._id } });
  };

  return (
    <div className="col-6 col-sm-2 col-md-4 col-lg-3 mt-4">
      <div className="card11212">
        <h5 className="image">
          <div onClick={handleImageClick} className="btn">
            {user.image && (
              <img
                src={`https://api.homeessentialshive.co.uk/${user.image}`}
                alt={user.name}
                className="img-fluid border"
                style={{ height: '60%', width: '99%' }}
              />
            )}
          </div>
        </h5>
        <h5 className="ms-2">{user.name.slice(0, 25)}</h5>
        <p dangerouslySetInnerHTML={{ __html: user.title.slice(0, 25) }}></p>
        <center>
          <button className="btn btn-success mb-2 w-100">Shop now</button>
        </center>
      </div>
    </div>
  
  );
};

export default Framsmirrorcard; 
