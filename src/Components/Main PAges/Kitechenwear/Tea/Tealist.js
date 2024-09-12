import React, { useState, useEffect } from 'react';
import StaticListComponent from '../../../StaticList'; // Adjust the path as needed
import { useNavigate } from 'react-router-dom';

const Tealist = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch data here
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.homeessentialshive.co.uk/api/v1/data/teauser');
        if (!response.ok) throw new Error('Network response was not ok');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await fetch(`https://api.homeessentialshive.co.uk/api/v1/data/teauserid/${id}`, {
        method: 'DELETE',
      });
      setData(data.filter(item => item._id !== id));
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  const handleEdit = (id) => {
    // Handle edit logic here, if needed
  };

  return (
    <StaticListComponent
      data={data}
      onDelete={handleDelete}
      onEdit={handleEdit}
      editUrlBase='/listtea'  // Set the base URL for editing
      addProductUrl='/teaform'  // Set the URL for adding a new product
    />
  );
};

export default Tealist;
