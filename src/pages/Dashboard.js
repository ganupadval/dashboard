import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import Bar from "../components/Bar";
import Location from "../components/Location";
import Products from "../components/Products";
import CustomerDetails from "../components/CustomerDetails";
import Trends from "../components/Trends";

const Dashboard = () => {
  const [locations, setLocations] = useState([]);
  const [products, setProducts] = useState([]);
  const [salesData, setSalesData] = useState({});
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetch("https://dashboard-backend-eight.vercel.app/locations")
      .then((response) => response.json())
      .then((data) => {
        console.log("Locations Data:", data);
        setLocations(data);
      })
      .catch((error) => {
        console.error("There was an error fetching the locations data!", error);
      });

    fetch("https://dashboard-backend-eight.vercel.app/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("There was an error fetching the products data!", error);
      });

    fetch("https://dashboard-backend-eight.vercel.app/sales_data")
      .then((response) => response.json())
      .then((data) => {
        console.log("Sales Data:", data);
        setSalesData(data);
      })
      .catch((error) => {
        console.error("There was an error fetching the sales data!", error);
      });

    fetch("https://dashboard-backend-eight.vercel.app/customers")
      .then((response) => response.json())
      .then((data) => {
        setCustomers(data);
      })
      .catch((error) => {
        console.error("There was an error fetching the customers data!", error);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <Nav />
      <Bar />
      <div className="grid grid-cols-2 gap-8 mt-8">
        <Location locations={locations} />
        <Products products={products} />
      </div>
      <div className="grid grid-cols-2 gap-8 mt-8">
        <CustomerDetails customers={customers} />
        <Trends salesData={salesData} />
      </div>
    </div>
  );
};

export default Dashboard;
