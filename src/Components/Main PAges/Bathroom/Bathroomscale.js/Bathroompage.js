
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Bathroomcard from './Bathroomcard';

const  Bathroompage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://api.homeessentialshive.co.uk/api/v1/data/bathdefreedelivery")
      .then(response => setUsers(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="container  mt-1">
      <div className="row">
        {users.map(user => (
          <Bathroomcard key={user._id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default  Bathroompage;
