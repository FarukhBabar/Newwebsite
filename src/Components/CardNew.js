import React from 'react';
import { useNavigate } from 'react-router-dom';

const CardNew = ({ user, baseUrl }) => {
  const navigate = useNavigate();

  const handleImageClick = () => {
    const productName = user.name.replace(/\s+/g, '-').replace(/[^a-zA-Z0-9-]/g, '').toLowerCase();
    navigate(`${baseUrl}/${productName}`, { state: { id: user._id } });
  };

  console.log('CardNew component user:', user);

  return (
    <div className="col-6 col-sm-2 col-md-4 col-lg-3 mt-5">
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

export default CardNew;
