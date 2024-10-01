import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardNew from '../../CardNew'; // Make sure the path is correct
import { Link } from 'react-router-dom';
const Phone = () => {
  const [users, setUsers] = useState([]);
const [showFullText, setShowFullText] = useState(false);
  const toggleText = () => {
    setShowFullText(!showFullText);
  };
  useEffect(() => {
    axios.get("https://api.homeessentialshive.co.uk/api/v1/data/Phonefreedelivery")
      .then(response => setUsers(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <>
    <div className="container mt-1">
      <div className="row">
        {users.map(user => (
          <CardNew key={user._id} user={user} baseUrl="/product/phone" />
        ))}
      </div>
    </div>
    <div className='container'>
        <div className='row'>
          <div className='col'>
            <h5>Phone Accessories </h5>
            <div className='content'>
              {showFullText ? (
                <p>
                   <b>Best plants grow with fertilisers and chemicals</b> <br/>
                Do you know fertilisers and chemicals play an essential role in plant growth? Many people want to enhance the growth of their plants, but they need to use proper 
                  In today’s interconnected era, our smartphones serve more than communication gadgets. They are more like entertainment centers, movie theaters, tools for efficiency, and indispensable partners.Home essential provide a selection of top-notch phone accessories crafted to improve phone usage. If you want protection for your phone, ease, or flair, we are here for you with every new and trendy mobile phone accessory. 
                  <br/>
                  These phones have been incredibly beneficial in the widespread. They have simplified tasks ranging from purchasing important things from online stores to organizing trips, ordering food from fast-food establishments, and participating in meetings and educational sessions. So here are the phone accessories near my online store. 
  <br/>
                <b>Variety of cost-efficient mobile phone ADD-ONS available on home essential</b>
                <br/>
                We rely on our smartphones so much these days to check emails and to stay updated about news whenever and wherever we are. Given our extensive use of mobile phones, it is customary to maximize usage and durability. This is the place where phone accessories play a crucial role. These items are ideal solutions if you want to achieve all that or more effortlessly. What’s fantastic is that our site offers a range of affordable phone accessories for mobile phones. Home essential  phone accessories variety will never let you choose from a lot, but it will also not let you out of money on the purchases. 
 <br/>
                  <b>Phone accessories at home essential</b><br/>
                  Home Essential is here with our top-quality products. We understand the importance of keeping your devices connected, powered up, and protected. View our phone accessories stock on the Home Essential website. New Quick view our list of stock shops.
                    <ol>
                      <li>USB c cable</li>
                      <li>iPhone fast charging cable</li>
                      <li>Micro USB cable</li>
                      <li>Phone cable</li>
                      <li>1M micro USB charger</li>
                      <li>Anti-slip ring holder</li>
                      <li>Fx iPhone data cable</li>
                      <li>Fx micro USB data cable</li>
                      <li>Fx pawabud bank</li>
                      <li>Fx power bank </li>
                                             
                    </ol>
                   
                  <b>Shop your phone accessories  with home essentials:</b><br/>
                   
                      <p>Home Essential is a fast-growing company that ships your needed products 24/7. Buy a quality product from Home Essential and help us grow together. Shop with us, leave a review on the product, and help us improve and grow with you. We are happy to provide you with the phone accessories you desire.


</p>
                      <br/>
                
                </p>
              ) : (
                <p>
                  <b>Best plants grow with fertilisers and chemicals</b> <br/>
                Do you know fertilisers and chemicals play an essential role in plant growth? Many people want to enhance the growth of their plants, but they need to use proper 
                  
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

export default Phone;