import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardNew from '../../../CardNew'; // Make sure the path is correct

const Clothing = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://api.homeessentialshive.co.uk/api/v1/data/Clothingfreedelivery")
      .then(response => setUsers(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="container mt-1">
      <div className="row">
        {users.map(user => (
          <CardNew key={user._id} user={user} baseUrl="/product/clothing" />
        ))}
      </div>
    </div>
  );
}

export default Clothing;