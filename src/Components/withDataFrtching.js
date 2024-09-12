import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const withDataFetching = (WrappedComponent, url) => {
  return (props) => {
    const [data, setData] = useState({});
    const location = useLocation();
    const id = location.state?.id;

    useEffect(() => {
      if (id) {
        fetchData(id);
      }
    }, [id]);

    const fetchData = async (id) => {
      try {
        const response = await fetch(`${url}/${id}`);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    return <WrappedComponent {...props} data={data} />;
  };
};

export default withDataFetching;
