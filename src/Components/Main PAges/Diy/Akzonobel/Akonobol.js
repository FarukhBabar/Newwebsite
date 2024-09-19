
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Akzonobolcard from './Akzonobolcard';

const Akonobol = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://api.homeessentialshive.co.uk/api/v1/data/Akonobolfreedelivery")
      .then(response => setUsers(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="container  mt-1">
      <div className="row">
        {users.map(user => (
          <Akzonobolcard key={user._id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default  Akonobol;
