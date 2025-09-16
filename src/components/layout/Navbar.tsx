import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ChevronDown, Filter, Calendar } from 'lucide-react';

const Navbar: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 z-30 flex items-center justify-between px-6">
      {/* Left: Title */}
      <div className="flex items-center">
        <h1 className="text-xl font-semibold text-gray-900">Overview Dashboard</h1>
      </div>

      {/* Right: Controls */}
      <div className="flex items-center gap-4">
        {/* Date Picker */}
        <div className="relative">
          <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <DatePicker
            selected={selectedDate}
            onChange={(date) => date && setSelectedDate(date)}
            className="pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            dateFormat="MMM dd, yyyy"
          />
        </div>

        {/* Filter Button */}
        <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          <Filter size={18} />
          <span className="hidden sm:inline">Filter</span>
        </button>

        {/* User Dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors"
          >
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
              <span className="text-sm font-medium text-gray-600">JD</span>
            </div>
            <ChevronDown size={18} className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 top-12 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
              <div className="p-2 border-b border-gray-100">
                <p className="text-sm font-medium text-gray-900">John Doe</p>
                <p className="text-xs text-gray-500">john@example.com</p>
              </div>
              <ul className="py-1">
                <li>
                  <button className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    Profile
                  </button>
                </li>
                <li>
                  <button className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50">
                    Settings
                  </button>
                </li>
                <li>
                  <button className="w-full text-left px-3 py-2 text-sm text-red-600 hover:bg-gray-50">
                    Sign Out
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
