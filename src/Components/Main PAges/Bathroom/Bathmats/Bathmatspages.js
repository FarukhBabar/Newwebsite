import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardNew from '../../../CardNew'; // Make sure the path is correct
import { Link } from 'react-router-dom';

const Bathmatspages = () => {
  const [users, setUsers] = useState([]);
const [showFullText, setShowFullText] = useState(false);
  const toggleText = () => {
    setShowFullText(!showFullText);
  };
  useEffect(() => {
    axios.get("https://api.homeessentialshive.co.uk/api/v1/data/bathmatesfreedelivery")
      .then(response => setUsers(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <>
    <div className="container mt-1">
      <div className="row">
        {users.map(user => (
          <CardNew key={user._id} user={user} baseUrl="/product/bathroom" />
        ))}
      </div>
    </div>
     <div className='container mt-3'>
        <div className='row'>
          <div className='col'>
            <h5>Bakeware:</h5>
            <div className='content'>
              {showFullText ? (
                <p>
                Welcome to the Home Essential Hive, where we offer a premium selection of bath mats designed to bring comfort, style, and safety to your bathroom. From luxurious, quick-drying mats to affordable options, we provide a diverse range to cater to different preferences and requirements. Our bath mats offer a blend of practicality and style, featuring non-slip options for safety and plush cotton for comfort.
                  <br/>
                  <b>Non-slip bath mats for safety: </b> 
                  Where should you start buying the baking set to add value to your kitchen? Explore our wide range of bakeware like:
                   <ul>
                    <li>Baking trays</li>
                    <li>Cake tins</li>
                    <li>Muffin trays</li>
                    <li>Bread pans</li>
                    <li>Non-stick bakeware sets</li>
                    <li>Baking dishes</li>
                    <li>Oven-safe bakeware sets </li>
                    <li>Roasting pans</li>
                    <li>Non-stick cake tins</li>
                    <li>Silicone baking mats</li>
                    <li>Cake pans</li>
                    <li>Bread loaf tins</li>
                    </ul>
                    <b>Home Essential Hive is the best choice for bakeware:</b> <br/>  
                    Home Essential Hive is your best choice for bakeware. No matter what type of bakeware you choose, it will surely help you bake the best treats or lenient food for your family to impress them. We offer you things for your support, like premium quality, a wide range of variety, and user-friendly design for your baking. Plus, with Home Essential Hive, you can shop at your convenience as we are available 24/7. Order your heart-chosen product, and let us deliver it to your doorstep without delay or damage.    
                </p>
              ) : (
                <p>
                  Nothing can be delicious more than the smell of freshly baked bread and the cake wafting from the kitchen. Welcome to the world of Non-stick bakeware and
                  
                </p>
              )}
               <Link onClick={toggleText} className='mb-2 mt-0'>
              {showFullText ? 'Read less' : 'Read more'}
            </Link>
            </div>
           
          </div>
        </div>
      </div>
      </>
  );
}

export default Bathmatspages;