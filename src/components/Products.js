import React from "react";

const Products = () => {
  const products = [
    { name: "Jumbo bag strawberry", value: 0.9, amount: "$4.7K" },
    { name: "Party bunting", value: 0.4, amount: "$3.3K" },
    { name: "Regency cakestand 3 tier", value: 0.2, amount: "$2.7K" },
    { name: "Postage", value: 0.16, amount: "$1.7K" },
    { name: "White hanging heart t-light holder", value: 0.1, amount: "$1K" },
    // Add more products as necessary...
  ];

  return (
    <div className="bg-white rounded-lg p-6 shadow-md">
      <h2 className="text-xl font-bold mb-4">Top Sold Products</h2>
      <ul>
        {products.map((product, index) => (
          <li key={index} className="flex justify-between items-center mb-2">
            <span className="w-1/3">{product.name}</span>
            <div className="w-2/3">
              <div
                className="bg-blue-300 h-2 rounded-full mr-2"
                style={{ width: product.value * 100 + "%" }}
              ></div>
            </div>
            <span>{product.amount}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
