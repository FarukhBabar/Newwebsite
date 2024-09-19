
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Weedingcards from './Weedingcard';


const Weeding = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://api.homeessentialshive.co.uk/api/v1/data/weddingfreedelivery")
      .then(response => setUsers(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="container  mt-1">
      <div className="row">
        {users.map(user => (
          <Weedingcards key={user._id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default Weeding;
 