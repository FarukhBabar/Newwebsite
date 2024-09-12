
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Cateringcard from './Cateringcard';

const Catering = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://api.homeessentialshive.co.uk/api/v1/data/cateringfreedelivery")
      .then(response => setUsers(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="container  mt-1">
      <div className="row">
        {users.map(user => (
          <Cateringcard key={user._id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default Catering;
