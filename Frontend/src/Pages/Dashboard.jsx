import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [vendors, setVendors] = useState([]);

  useEffect(() => {
    const fetchVendors = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/vendors');
        setVendors(response.data);
      } catch (error) {
        console.error('Error fetching vendors:', error);
      }
    };

    fetchVendors();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl mb-4">Vendors</h1>
      <ul>
        {vendors.map((vendor) => (
          <li key={vendor._id} className="mb-2">
            <h2 className="text-xl">{vendor.name}</h2>
            <p>Email: {vendor.email}</p>
            <p>Service: {vendor.service}</p>
            <p>Description: {vendor.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
