
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Breadcard from './Breadcard';
import { Link } from 'react-router-dom';


const Bread = () => {
  const [users, setUsers] = useState([]);
const [showFullText, setShowFullText] = useState(false);
  const toggleText = () => {
    setShowFullText(!showFullText);
  };
  useEffect(() => {
    axios.get("https://api.homeessentialshive.co.uk/api/v1/data/breadfreedelivery")
      .then(response => setUsers(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <>
    <div className="container  mt-1">
      <div className="row">
        {users.map(user => (
          <Breadcard key={user._id} user={user} />
        ))}
      </div>
    </div>
    <div className='container'>
        <div className='row'>
          <div className='col'>
            <h5>Bread bins & Storage Boxes: </h5>
            <div className='content'>
              {showFullText ? (
                <p>
                 Do you need to learn how to organise the kitchen because of the low plastic storage boxes and bread bins? <br/>
                 Explore the Home Essential Hive collection to modernise your kitchen. Our Stackable storage boxes include the option of tight clip-lock lids so your food will always be safe.  <br/>

                  Leave the old-fashioned bread bins and get in our different types of bread storage solutions to keep your bread and pastries fresh and tasty. Choose the wide range of Metal bread bins, Wooden bread bins, steel bread bins, Bamboo bread bins, and Ceramic bread bins. <br/>

                  Let us help you organise the kitchen with a classy touch, which can always be challenging to do. We have cookware, bakeware, kitchen accessories, plastic storage containers, and Kitchen storage bread bins. 
                  <br/>
                  When you get the Home Essential Hive bread bin storage collection, you can remember the tension of the bread, crumpets, cookies, cakes, and buns. Bread bins not only offer storage advantages but also a charming rustic feel.  If you are interested in baking, go to our bakeware collection and bake your artistic bread and cakes at home.  

                
                </p>
              ) : (
                <p>
                   Do you need to learn how to organise the kitchen because of the low plastic storage boxes and bread bins? 
                  
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

export default Bread;
