import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement
);

const Trends = ({ salesData }) => {
  // const data = {
  //   labels: ['26 Feb', '3 Mar', '8 Mar', '13 Mar', '18 Mar', '23 Mar', '28 Mar', '2 Apr'],
  //   datasets: [
  //     {
  //       type: 'bar',
  //       label: 'Sales',
  //       data: [20, 30, 25, 35, 40, 50, 45, 60],
  //       backgroundColor: 'rgba(54, 162, 235, 0.5)',
  //       borderColor: 'rgba(54, 162, 235, 1)',
  //       borderWidth: 1,
  //     },
  //     {
  //       type: 'line',
  //       label: 'Number of Purchases',
  //       data: [10, 15, 13, 20, 18, 23, 21, 27],
  //       fill: false,
  //       borderColor: 'rgba(255, 99, 132, 1)',
  //       tension: 0.4,
  //     },
  //   ],
  // };
  if (!salesData || Object.keys(salesData).length === 0) {
    return <p>Loading data...</p>;
  }

  console.log(salesData);
  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-md">
      <h2 className="text-xl font-bold mb-4">Daily Sales Trend</h2>
      <div>
        <span className="text-red-600 font-bold">▼13.2%</span> vs. previous day
      </div>
      <Bar data={salesData} options={options} />
    </div>
  );
};

export default Trends;
