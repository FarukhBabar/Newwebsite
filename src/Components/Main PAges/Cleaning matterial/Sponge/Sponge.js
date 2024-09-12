
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spongecard from './Spongecard';
import { Link } from 'react-router-dom';

const Sponge = () => {
  const [users, setUsers] = useState([]);
 const [showFullText, setShowFullText] = useState(false);
  const toggleText = () => {
    setShowFullText(!showFullText);
  };
  useEffect(() => {
    axios.get("https://api.homeessentialshive.co.uk/api/v1/data/spongefreedelivery")
      .then(response => setUsers(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <>
    <div className="container  mt-1">
      <div className="row">
        {users.map(user => (
          <Spongecard key={user._id} user={user} />
        ))}
      </div>
    </div>
 <div className='container'>
        <div className='row'>
          <div className='col'>
            <h5>Sponge & Scourer: </h5>
            <div className='content'>
              {showFullText ? (
                <p>
                  Are you tired of rubbing the surface to remove the hard stain of any liquid, like ketchup or oil? The home essential hive Sponge and scourer collection is here for you.
                   Whether you want to remove greasy surfaces in the kitchen, wipe down the bathroom surface, or save the spark of glassware like glass doors, windows, or glass tables, we offer the best quality Kitchen sponges, Scouring pads, Non-scratch sponges, Heavy-duty scourers, and scrub pads. <br/>
                  <b>Types of Sponge and scourer you need to get:</b><br/>
                  Kitchen & Antibacterial Sponges
                    <ul>
                      <li>Multi-purpose sponges are used to wipe the countertops, sinks, and dishes. 
                        </li>
                        <li>Non-scratch sponges are used for non-stick kitchenware, as they remove grime without damaging the surface.</li>
                        <li>Heavy-duty sponges are used for tough cleaning jobs like hard baked-on food and grease stains. </li>
                        <li>
                          Odour-resistant sponges are the sponges that prevent odour-causing bacteria growth and keep the surface fresh and shiny. 
                        </li>
                        <li>
                          The Sanitised scrubbers used for antibacterial protection in areas where germs and bacteria can spread quickly. 
                        </li>
                    </ul>
                    <br/>
                  <b>Care to do for your safety and long life of Sponge and Scourer:</b><br/>
                    <ul>
                      <li>
                        Rinse properly 
                      </li>
                      <li>
                        Dry it thoroughly 
                      </li>
                      <li>
                        Replace it after it starts leaving stains. 
                      </li>
                      </ul> <br/>
                
                </p>
              ) : (
                <p>
                  Are you tired of rubbing the surface to remove the hard stain of any liquid, like ketchup or oil? The home essential hive Sponge and scourer collection is here for you. 
                  
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

export default Sponge;
