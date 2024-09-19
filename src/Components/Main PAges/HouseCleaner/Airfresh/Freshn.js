
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Freshncards from './Freshncards';

const  Freshn = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://api.homeessentialshive.co.uk/api/v1/data/freshnfreedelivery")
      .then(response => setUsers(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="container  mt-1">
      <div className="row">
        {users.map(user => (
          <Freshncards key={user._id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default  Freshn;

