import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardNew from '../../../CardNew'; // Make sure the path is correct
import { Link } from 'react-router-dom';

const KitchenACC = () => {
  const [users, setUsers] = useState([]);
const [showFullText, setShowFullText] = useState(false);
  const toggleText = () => {
    setShowFullText(!showFullText);
  };
  useEffect(() => {
    axios.get("https://api.homeessentialshive.co.uk/api/v1/data/kitechenaccfreedelivery")
      .then(response => setUsers(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <>
    <div className="container mt-1">
      <div className="row">
        {users.map(user => (
          <CardNew key={user._id} user={user} baseUrl="/product/kitechen" />
        ))}
      </div>
    </div>
    <div className='container'>
        <div className='row'>
          <div className='col'>
            <h5>Kitchen Accessories: </h5>
            <div className='content'>
              {showFullText ? (
                <p>
                 Let’s make your kitchen the heart of the home. Get the Home Essential Hive kitchen accessories collection to enjoy the kitchen’s prime cooking time. To enjoy the kitchen, Explore the excellently crafted Stylish kitchenware, such as cookware, high-quality appliances, premium linens, and sought-after kitchen gadgets, online.  <br/>

                  Pick the signature collection of colours and designs for your bakeware and affordable kitchen tools. Whether you are a seasonal chef or just a Kitchen organiser, Home Essential Hive offers a wide range of aesthetics and stylish kitchenware.
                  <br/>
                  <b>The items in the stylish kitchenware collection:
                  </b> <br/>
                  Home Essential Hive offers a grand collection of kitchen accessories, which are as follows:
                  <ul>
                    <li>Spice rack</li>
                    <li>Baking mats</li>
                    <li>Glass storage jars</li>
                    <li>Rolling pin</li>
                    <li>Kitchen scales</li>
                    </ul>
                    <b>Why choose the Home Essential Hive for kitchen accessories?</b> <br/>  
                    Home Essential Hive kitchen accessories are designed to meet all the needs of our customers. The affordable kitchen tools make your kitchen more organised and functional, and you will enjoy your cooking time with all your heart. We offer kitchen accessories with premium materials like stainless steel, silicon, and more. Home Essential Hive kitchenware will not only add elegance but also charm to the kitchen decoration. Call us today to get kitchenware, which will be kitchen accessories and help with the cleaning and decorating elements.     
                </p>
              ) : (
                <p>
                  Let’s make your kitchen the heart of the home. Get the Home Essential Hive kitchen accessories collection to enjoy the kitchen’s prime cooking time.
                  
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

export default KitchenACC;
