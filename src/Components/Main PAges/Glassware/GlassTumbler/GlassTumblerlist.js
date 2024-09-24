import React, { useState, useEffect } from 'react';
import StaticListComponent from '../../../../../Staticlist'; // Adjust the path as needed
const GlassTumblerlist = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    // Fetch data here
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.homeessentialshive.co.uk/api/v1/data/glasstablewareuser');
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
      await fetch(`https://api.homeessentialshive.co.uk/api/v1/data/glasstablewareuserid/${id}`, {
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
      editUrlBase='/listglasstumbler'  // Set the base URL for editing
      addProductUrl='/glasstumblerform'  // Set the URL for adding a new product
    />
  );
};

export default GlassTumblerlist;