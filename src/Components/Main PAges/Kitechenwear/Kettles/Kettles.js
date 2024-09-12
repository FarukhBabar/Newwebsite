
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Kettlescard from './Kettlescard';

const Kettles = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://api.homeessentialshive.co.uk/api/v1/data/kettlesfreedelivery")
      .then(response => setUsers(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="container  mt-1">
      <div className="row">
        {users.map(user => (
          <Kettlescard key={user._id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default Kettles;
