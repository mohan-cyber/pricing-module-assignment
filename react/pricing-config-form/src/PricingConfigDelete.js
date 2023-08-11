import React from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';

const PricingConfigDelete = () => {
//   const history = useHistory();
  const { id } = useParams();

  const handleDelete = async () => {
    try {
      await axios.delete(`http://127.0.0.1:8002/api/pricing-configurations/${id}`);
    //   history.push('/');
    } catch (error) {
      console.error('Error deleting pricing configuration:', error);
    }
  };

  return (
    <div>
      <h2>Confirm Delete</h2>
      <p>Are you sure you want to delete this pricing configuration?</p>
      <button onClick={handleDelete}>Delete</button>
      {/* <button onClick={() => history.goBack()}>Cancel</button> */}
    </div>
  );
};

export default PricingConfigDelete;
