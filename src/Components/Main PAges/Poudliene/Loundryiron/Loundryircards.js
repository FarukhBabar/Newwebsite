import React from 'react';
import { Link } from 'react-router-dom';

const Loundryircards = ({ user }) => {
  return (
    <div className="col-6 col-sm-2 col-md-4 col-lg-3 mt-4">
      <div className="card11212 ">
        <h5 className='image'>
       
          <Link to={`/loundryironsinglepage/${user._id}`} className="btn">
            {user.image && (
              <a href=''>
              <img
                src={`https://api.homeessentialshive.co.uk/${user.image}`}
                alt={user.name}
                className="img-fluid border"
                style={{ height: '60%', width: '99%' }}
              /> </a>
            )}
          </Link>
         
        </h5>
        <h5 className='ms-2'>{user.name.slice(0, 25)}</h5>
        <p className='ms-2'>{user.title.slice(0, 35)}...</p>
        {/* <div className="d-flex">
          <h6>${user.price}</h6>
            <small className="text-danger">(36% off)</small>
          </div> */}
        <center>
          <button className='btn btn-success mb-2 w-100'>Shop now</button>
        </center>
      </div>
    </div>
  );
};

export default Loundryircards;
