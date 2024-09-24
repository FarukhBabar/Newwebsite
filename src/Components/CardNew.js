
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Components/assets/Style.css'; // Import custom styles

const CardNew = ({ user, baseUrl }) => {
  const navigate = useNavigate();

  const handleImageClick = () => {
    const productName = user.name.replace(/\s+/g, '-').replace(/[^a-zA-Z0-9-]/g, '').toLowerCase();
    navigate(`${baseUrl}/${productName}`, { state: { id: user._id } });
  };

  return (
    <div className="col-6 col-sm-2 col-md-4 col-lg-3 mt-5">
    <div className="product-card">
      <div className="product-image" onClick={handleImageClick}>
        {user.image && (
          <img
            src={`https://api.homeessentialshive.co.uk/${user.image}`}
            alt={user.name}
            className="product-img"
          />
        )}
      </div>
      <div className="product-info">
        <h5 className="product-name">{user.name.slice(0, 25)}</h5>
        <p
          className="product-description"
          dangerouslySetInnerHTML={{ __html: user.title.slice(0, 50) }}
        ></p>
        {/* <button className="shop-now-btn">Shop now</button> */}
      </div>
    </div>
    </div>
  );
};

export default CardNew;
