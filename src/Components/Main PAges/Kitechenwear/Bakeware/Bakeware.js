
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Bakewarecard from './Bakewarecard';
import { Link } from 'react-router-dom';
const Bakeware = () => {
  const [users, setUsers] = useState([]);
const [showFullText, setShowFullText] = useState(false);
  const toggleText = () => {
    setShowFullText(!showFullText);
  };
  useEffect(() => {
    axios.get("https://api.homeessentialshive.co.uk/api/v1/data/bakewarefreedelivery")
      .then(response => setUsers(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <>
    <div className="container  mt-1">
      <div className="row">
        {users.map(user => (
          <Bakewarecard key={user._id} user={user} />
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
                Nothing can be delicious more than the smell of freshly baked bread and the cake wafting from the kitchen. Welcome to the world of Non-stick bakeware and Oven-safe bakeware; whether you are a starting baker or a seasonal baking person, here we are to help you bake a delicious treat on your first baking day. Nowadays, bakeware is essential for the kitchen as you want to give a treat to your family or create memories for a special occasion. With the Home Essential Hive product, you can bake dishes like tasty roasted vegetables or any amazing fluffy cake or brownie.
                  <br/>
                  <b>Add value to your kitchen with Home Essential Hive: </b> 
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

export default Bakeware;
