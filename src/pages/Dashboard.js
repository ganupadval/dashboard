import React from 'react';
import Nav from '../components/Nav';
import Bar from '../components/Bar';
import Location from '../components/Location';
import Products from '../components/Products';
import CustomerDetails from '../components/CustomerDetails';
import Trends from '../components/Trends';


const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <Nav/>
      <Bar/>
      <div className="grid grid-cols-2 gap-8 mt-8">
        <Location/>
        <Products/>
      </div>
      <div className="grid grid-cols-2 gap-8 mt-8">
        <CustomerDetails/>
        <Trends/>
      </div>
    </div>
  );
};

export default Dashboard;
