
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Cutlerycard from './Cutlerycard';
import { Link } from 'react-router-dom';

const Cutlery = () => {
  const [users, setUsers] = useState([]);
const [showFullText, setShowFullText] = useState(false);
  const toggleText = () => {
    setShowFullText(!showFullText);
  };
  useEffect(() => {
    axios.get("https://api.homeessentialshive.co.uk/api/v1/data/culteryfreedelivery")
      .then(response => setUsers(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <>
    <div className="container  mt-1">
      <div className="row">
        {users.map(user => (
          <Cutlerycard key={user._id} user={user} />
        ))}
      </div>
    </div>
    <div className='container'>
        <div className='row'>
          <div className='col'>
            <h5>Cutlery Set: </h5>
            <div className='content'>
              {showFullText ? (
                <p>
                 Updating your kitchen equipment can be daunting, and you may need help figuring out where to start and how to get all the cutlery sets and kitchenware. No worries, though this is where our Home Essential Hive comes in. We offer a wide range of cutlery sets and kitchenware, from large sets suitable for a family dinner to smaller sets perfect for a cosy meal. Our sets are designed to add a touch of elegance to your dining table, no matter what the occasion is. <br/>

If you are on a low budget and also low on a cutlery set, check out the Home Essential Hive kitchenware collection. Our cutlery sets are crafted with high-quality stainless steel, ensuring durability and a mirror polish finish for an elegant look. They are dishwasher safe, making them convenient for everyday use and perfect for any special occasion. <br/>

The set includes knives, forks, decorating spoons, beautifully designed cake servers, and grapefruit spoons, providing you with all the essentials for a complete dining experience. The cutlery set includes the best knife set, the best steak knives, plain knives, sober spoons, and the nylon utensil set. 
    
                </p>
              ) : (
                <p>
                  Updating your kitchen equipment can be daunting, and you may need help figuring out where to start and how to get all the cutlery sets and kitchenware. No worries, though this is where our Home Essential Hive comes in. 
                  
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

export default Cutlery;
