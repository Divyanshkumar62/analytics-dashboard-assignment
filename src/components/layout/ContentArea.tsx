import React from 'react';

interface ContentAreaProps {
  isCollapsed: boolean;
  children?: React.ReactNode;
}

const ContentArea: React.FC<ContentAreaProps> = ({ isCollapsed, children }) => {
  return (
    <main
      className={`pt-16 transition-all duration-300 ${
        isCollapsed ? 'ml-16' : 'ml-64'
      } bg-gray-50 min-h-screen`}
    >
      <div className="p-6">
        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {/* Sample Cards */}
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Total Users</h3>
            <p className="text-3xl font-bold text-blue-600">1,234</p>
            <p className="text-sm text-gray-500 mt-2">+12% from last month</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Revenue</h3>
            <p className="text-3xl font-bold text-green-600">$45K</p>
            <p className="text-sm text-gray-500 mt-2">+8% from last month</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Orders</h3>
            <p className="text-3xl font-bold text-purple-600">567</p>
            <p className="text-sm text-gray-500 mt-2">+5% from last month</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Conversion Rate</h3>
            <p className="text-3xl font-bold text-orange-600">3.2%</p>
            <p className="text-sm text-gray-500 mt-2">+2% from last month</p>
          </div>
        </div>

        {/* Larger section for charts/tables */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Analytics Chart</h3>
            <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
              <p className="text-gray-500">Chart will go here</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between py-2 border-b">
                <p className="text-sm text-gray-900">New user registered</p>
                <span className="text-xs text-gray-500">2 min ago</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b">
                <p className="text-sm text-gray-900">Order completed</p>
                <span className="text-xs text-gray-500">5 min ago</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b">
                <p className="text-sm text-gray-900">Payment received</p>
                <span className="text-xs text-gray-500">10 min ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContentArea;
