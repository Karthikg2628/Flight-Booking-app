import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/FlightDeals.css'; // We'll add styles next
import Card from './Cards';

const FlightDeals = () => {
  const [deals, setDeals] = useState([]);

  useEffect(() => {
    const fetchDeals = async () => {
      try {
        const response = await axios.get('/api/deals');
        setDeals(response.data);
      } catch (error) {
        console.error("Error fetching deals:", error);
      }
    };
    fetchDeals();
  }, []);

  return (
    <div className="deals-container">
      <h2 className='deals'>Top Deals </h2>
      <div className='cards'>
        <Card place={"London"} price={1000} img={"https://th.bing.com/th?id=OIP.SIg20IWevnEPHgEqZwd6hgHaJQ&w=223&h=279&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"} />
        <Card place={"America"} price={2600} img={"https://th.bing.com/th?id=OIP.Bwx5Shy83IE1XRMRjl2yawHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"} />
        <Card place={"Japan"} price={2400} img={"https://th.bing.com/th?id=OIP.Cd0B_fc7LsVL1CESypoDMQHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"} />

      </div>
      {/* <div className="deals-grid">
        {deals.map((deal) => (
          <div key={deal._id} className="deal-card">
            <h3>{deal.destination}</h3>
            <p>Price: ${deal.price}</p>
            <p>Discount: {deal.discount}%</p>
            <p>Valid Until: {new Date(deal.validity).toLocaleDateString()}</p>
          </div>
        ))}
      </div> */}

   
    </div>
  );
};

export default FlightDeals;

