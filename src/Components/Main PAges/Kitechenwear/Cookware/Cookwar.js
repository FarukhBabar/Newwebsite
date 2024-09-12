
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Cookwecard from './Cookwecard';
import { Link } from 'react-router-dom';

const Cookwar = () => {
  const [users, setUsers] = useState([]);
const [showFullText, setShowFullText] = useState(false);
  const toggleText = () => {
    setShowFullText(!showFullText);
  };
  useEffect(() => {
    axios.get("https://api.homeessentialshive.co.uk/api/v1/data/cookwarfreedelivery")
      .then(response => setUsers(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <>
    <div className="container  mt-1">
      <div className="row">
        {users.map(user => (
          <Cookwecard key={user._id} user={user} />
        ))}
      </div>
    </div>
    <div className='container'>
        <div className='row'>
          <div className='col'>
            <h5>Cookware: </h5>
            <div className='content'>
              {showFullText ? (
                <p>
                 Nothing can be better than having the best cookware set in the kitchen. Home Essential Hive is your go-to source for everything you need to enhance your cooking experience. You will get a variety of dishes with eye-catching designs that match your taste. Home Essential Hive gives its cookware products the perfect blend of style, performance, and durability. You can gift the heritage enamel and non-stick cookware to your loved ones, so whenever they cook in it or do the Sunday roast, a smile will shine on their lips while thinking about you. 
                  <br/>
                  <b>Home Essential Hive offers a variety of cookware, which are listed below:

                  </b> 
                   <ul>
                    <li>Aluminum casserole</li>
                    <li>Milk pan</li>
                    <li>Pressure cooker</li>
                    </ul>
                    <b>Why choose cookware from Home Essential Hive?</b> <br/>  
                    Cookware is designed uniquely and crafted from the best-grade material, such as Stainless steel cookware, Cast iron cookware, and nonstick coating on the inner and outer of the pot. The collection of Home Essential Hive cookware offers a wide range of utensils. Our Induction cookware has a heritage and modern touch, like air-tight lids and ergonomic handles. We care about your health, so Home Essential Hive provides luxury cookware and  PFOA-free nonstick surfaces so you can cook without any doubt about health issues.     
                </p>
              ) : (
                <p>
                  Nothing can be better than having the best cookware set in the kitchen. Home Essential Hive is your go-to source for everything you need to enhance your cooking
                  
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

export default Cookwar;
