
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Memorialscard from './Memorialscard';


const Memorials = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://api.homeessentialshive.co.uk/api/v1/data/memorialfreedelivery")
      .then(response => setUsers(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="container  mt-1">
      <div className="row">
        {users.map(user => (
          <Memorialscard key={user._id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default Memorials;
 