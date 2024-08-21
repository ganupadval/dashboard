import React from 'react';

const Bar = () => {
  return (
    <div className="bg-blue-900 text-white py-4 px-8 rounded-lg flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <div>
          <div className="text-xl font-bold">Customers</div>
          <div>1,012</div>
        </div>
        <div>
          <div className="text-xl font-bold">Products</div>
          <div>2.2K</div>
        </div>
        <div>
          <div className="text-xl font-bold">Sales</div>
          <div>$573.3K</div>
        </div>
        <div>
          <div className="text-xl font-bold">Avg Sales</div>
          <div>$21.2K</div>
        </div>
      </div>
      <div>
        <button className="bg-blue-800 py-2 px-4 rounded-lg">Sales</button>
        <button className="bg-blue-800 py-2 px-4 rounded-lg ml-4">March 2022</button>
      </div>
    </div>
  );
};

export default Bar;
