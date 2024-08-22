import React from 'react';

const CustomerDetails = ({customers}) => {
  // const customers = [
  //   { id: '14646', country: 'Netherlands', date: '30 Mar 2022', purchases: 4, sales: '$21.5K' },
  //   { id: '15646', country: 'United Kingdom	', date: '22 Mar 2022', purchases: 2, sales: '$17.8K' },
  //   { id: '14766', country: 'EIRE', date: '3 Mar 2022', purchases: 1, sales: '$15.6K' },
  //   { id: '19646', country: 'France', date: '12 Mar 2022', purchases: 2, sales: '$12.2K' },
  //   { id: '15746', country: 'Germany', date: '3 Mar 2022', purchases: 4, sales: '$10.5K' },
  //   { id: '19246', country: 'France', date: '26 Mar 2022', purchases: 3, sales: '$10K' },
  // ];

  return (
    <div className="bg-white rounded-lg p-6 shadow-md">
      <h2 className="text-xl font-bold mb-4">Customer Details</h2>
      <table className="w-full text-left">
        <thead>
          <tr>
            <th className="py-2">Customer ID</th>
            <th className="py-2">Country</th>
            <th className="py-2">Day of Latest Purchase</th>
            <th className="py-2">No of Purchases</th>
            <th className="py-2">Sales</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer, index) => (
            <tr key={index} className="border-t">
              <td className="py-2">{customer.id}</td>
              <td className="py-2">{customer.country}</td>
              <td className="py-2">{customer.date}</td>
              <td className="py-2">{customer.purchases}</td>
              <td className="py-2">{customer.sales}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerDetails;
