
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Giftwarecard from './Giftwarecard';


const Giftware = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://api.homeessentialshive.co.uk/api/v1/data/giftwarefreedelivery")
      .then(response => setUsers(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="container  mt-1">
      <div className="row">
        {users.map(user => (
          <Giftwarecard key={user._id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default Giftware;
