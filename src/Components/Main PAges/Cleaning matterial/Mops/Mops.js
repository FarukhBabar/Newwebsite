
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Mopscard from './Mopscard';
import { Link } from 'react-router-dom';

const Mops = () => {
  const [users, setUsers] = useState([]);
const [showFullText, setShowFullText] = useState(false);
  const toggleText = () => {
    setShowFullText(!showFullText);
  };
  useEffect(() => {
    axios.get("https://api.homeessentialshive.co.uk/api/v1/data/mopsfreedelivery")
      .then(response => setUsers(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <>
    <div className="container  mt-1">
      <div className="row">
        {users.map(user => (
          <Mopscard key={user._id} user={user} />
        ))}
      </div>
    </div>
 <div className='container'>
        <div className='row'>
          <div className='col'>
            <h5>Mops: </h5>
            <div className='content'>
              {showFullText ? (
                <p>
                 Make your home modern not only with decor but also with cleaning materials. Explore the Home Essential Hive mop collection to update your cleaning materials for your home, bath, and kitchen for effective and efficient cleaning purposes. <br/>

                  Get the traditional to innovative spray mops for your home’s cleaning needs. If you're looking for cleaning tools and mops for everyday spills or deep home cleaning, get them online from Home Essential Hive. 
 <br/>
                  <b>Mops:</b><br/>
                  
                    <ul>
                      <li>Addis cloth mops.
                        </li>
                        <li>Loop end mops.</li>
                        <li>Window Addis cleaner mops . </li>
                        
                    </ul>
                   
                  <b>Mop heads:</b><br/>
                    <ul>
                      <li>
                        Cotton mop heads

                      </li>
                      <li>
                        Microfibre mop heads

                      </li>
                      
                      </ul> 
                      <b>Spray mops:</b>
                      <ul>
                        <li>Plastic spray bottle mops</li>
                        <li>Clear spray bottle mops</li>
                      </ul>
                      <p>Explore the best quality mops, head mops, and cleaning materials for house cleaning, like floor and window cleaning tools, from Home Essential Hive. Whether you are searching for Addis cloth mops or spray mops with plastic or clear spray bottles, we offer everything you will ever need for house cleaning. 
</p>
                      <br/>
                
                </p>
              ) : (
                <p>
                  Make your home modern not only with decor but also with cleaning materials. Explore the Home Essential Hive mop collection to update your cleaning materials 
                  
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

export default Mops;
