import React, { useState, useEffect } from 'react';
import StaticListComponent from '../../../StaticList'; // Adjust the path as needed
const Dusterlist = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    // Fetch data here
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.homeessentialshive.co.uk/api/v1/data/dusteruser');
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
      await fetch(`https://api.homeessentialshive.co.uk/api/v1/data/dusteruserid/${id}`, {
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
      editUrlBase='/listduster'  // Set the base URL for editing
      addProductUrl='/dusterform'  // Set the URL for adding a new product
    />
  );
};

export default Dusterlist;