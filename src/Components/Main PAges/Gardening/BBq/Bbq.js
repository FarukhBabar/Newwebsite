
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Bbqcards from './Bbqcards';

const Bbq = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://api.homeessentialshive.co.uk/api/v1/data/bbqfreedelivery")
      .then(response => setUsers(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="container  mt-1">
      <div className="row">
        {users.map(user => (
          <Bbqcards key={user._id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default Bbq;
