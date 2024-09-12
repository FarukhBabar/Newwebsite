
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Glovescard from './Glovescard';
import { Link } from 'react-router-dom';
const Gloves = () => {
  const [users, setUsers] = useState([]);
const [showFullText, setShowFullText] = useState(false);
  const toggleText = () => {
    setShowFullText(!showFullText);
  };
  useEffect(() => {
    axios.get("https://api.homeessentialshive.co.uk/api/v1/data/glovesfreedelivery")
      .then(response => setUsers(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <>
    <div className="container  mt-1">
      <div className="row">
        {users.map(user => (
          <Glovescard key={user._id} user={user} />
        ))}
      </div>
    </div>
    <div className='container'>
        <div className='row'>
          <div className='col'>
            <h5>Gloves: </h5>
            <div className='content'>
              {showFullText ? (
                <p>
                 Are you tired of burning your hands from your bath or kitchen's complicated cleaning liquid? Explore the Home Essential Hive gloves products to save your hands from burning scars. From the best quality gloves for heavy-duty cleaning tasks to the best latex and vinyl options, we provide gloves that allow you to work confidently and comfortably without injury. 
 <br/>
                  <b>Types of gloves:</b><br/>
                  
                    <ul>
                      <li>Cleaning gloves: Rubber and latex gloves.
                        </li>
                        <li>Household gloves: Marigold kitchen gloves and bathroom gloves.</li>
                        <li>Protection gloves: Vinyl and rubber hand gloves. </li>
                        
                    </ul>
                   
                  <b>How to choose the best glove for yourself?</b><br/>
                    <ul>
                      <li>
                        Check for the comfort and fit in the gloves selection and the stretch material of the gloves.

                      </li>
                      <li>
                        Consider the task and care for the cleansing material when buying the gloves.

                      </li>
                      <li>Before buying any type of gloves, check for allergies. If you have an allergy to any glove material, do not buy it, as it can cause hectic skin problems. </li>
                      <li>The size of the gloves matters the most because if they do not fit, harmful liquids will enter them and cause injury. </li>
                      <li>The proper care of the gloves will make their life long, and whenever you use them, wash them, rinse off the chemicals, dry them thoroughly, and keep them in an airy place.</li>
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

export default Gloves;
