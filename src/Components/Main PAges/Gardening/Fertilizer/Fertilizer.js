import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Fertilizercard from './Fertilizercard';
import { Link } from 'react-router-dom';
const Fertilizer = () => {
  const [users, setUsers] = useState([]);
const [showFullText, setShowFullText] = useState(false);
  const toggleText = () => {
    setShowFullText(!showFullText);
  };
  useEffect(() => {
    axios.get("https://api.homeessentialshive.co.uk/api/v1/data/fertilizerfreedelivery")
      .then(response => setUsers(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <>
    <div className="container  mt-1">
      <div className="row">
        {users.map(user => (
          <Fertilizercard key={user._id} user={user} />
        ))}
      </div>
    </div>
    <div className='container'>
        <div className='row'>
          <div className='col'>
            <h5>Fertilizers and chemicals </h5>
            <div className='content'>
              {showFullText ? (
                <p>
                  <b>Best plants grow with fertilisers and chemicals</b> <br/>
                Do you know fertilisers and chemicals play an essential role in plant growth? Many people want to enhance the growth of their plants, but they need to use proper chemicals to protect their crops from pests and insects. Home Essential Hive brings the best fertilisers for garden plants that not only protect from harmful species but also improve the quality of the soil.  <br/>
                <b>Ensure the crop's safety with organic plant food </b>
                 Proper fertilisers and chemicals can help plants in many ways. They provide the necessary nutrients to help them grow better. In addition, these chemicals destroy unwanted weeds and protect your plants from bacterial diseases. Remember to use the chemicals by following proper guidelines. 

 <br/>
                  <b>Reliable fertilisers and chemicals for your plants</b><br/>
                  We offer a wide range of fertilisers and chemicals from trusted brands like baby bios and miracle-gro. These products include 
                    <ul>
                      <li>WEEDKILLERS</li>
                      These products contain long weed killers and chemical weed killers. Lawn feed, rose feed, tomato feed and feed for hanging baskets are also used for this purpose. 
                        <li>Pest killers</li>
                        Many harmful creatures can damage your plants, so we offer various pest killers, such as ant killer, slug copper tape, and flycatcher products.                        
                    </ul>
                   
                  <b>Choose Home Essential Hive for Fertilisers</b><br/>
                   
                      <p>Home Essential Hive is the largest product-selling brand in the UK, offering a wide range of pest control chemicals. Our team of experts knows how to cater to customers' needs. Call us to get productive fertiliser delivered to your doorstep at affordable rates. Our staff will be pleased to serve you. 

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

export default Fertilizer;
