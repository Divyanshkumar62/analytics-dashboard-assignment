import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ChevronDown, Filter, Calendar } from 'lucide-react';

interface TopBarProps {
  className?: string;
}

const TopBar: React.FC<TopBarProps> = ({ className = '' }) => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className={`h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 ${className}`}>
      {/* Left: Title */}
      <div className="flex items-center">
        <h1 className="text-xl font-semibold text-gray-900">Overview Dashboard</h1>
      </div>

      {/* Right: Controls */}
      <div className="flex items-center gap-4">
        {/* Date Picker Component */}
        <DatePickerComponent
          selectedDate={selectedDate}
          onChange={setSelectedDate}
        />

        {/* Filter Button Component */}
        <FilterButton />

        {/* User Dropdown Component */}
        <UserDropdown
          isOpen={isDropdownOpen}
          onToggle={() => setIsDropdownOpen(!isDropdownOpen)}
          onClose={() => setIsDropdownOpen(false)}
        />
      </div>
    </header>
  );
};

interface DatePickerComponentProps {
  selectedDate: Date;
  onChange: (date: Date) => void;
}

const DatePickerComponent: React.FC<DatePickerComponentProps> = ({ selectedDate, onChange }) => (
  <div className="relative">
    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
    <DatePicker
      selected={selectedDate}
      onChange={(date) => date && onChange(date)}
      className="pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      dateFormat="MMM dd, yyyy"
    />
  </div>
);

interface FilterButtonProps {}

const FilterButton: React.FC<FilterButtonProps> = () => (
  <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
    <Filter size={18} />
    <span className="hidden sm:inline">Filter</span>
  </button>
);

interface UserDropdownProps {
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}

const UserDropdown: React.FC<UserDropdownProps> = ({ isOpen, onToggle, onClose }) => (
  <div className="relative">
    <button
      onClick={onToggle}
      className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors"
      aria-label="User menu"
    >
      <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
        <span className="text-sm font-medium text-gray-600">JD</span>
      </div>
      <ChevronDown
        size={18}
        className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}
        aria-expanded={isOpen}
      />
    </button>

    {/* Dropdown Menu */}
    {isOpen && (
      <UserDropdownMenu onClose={onClose} />
    )}
  </div>
);

interface UserDropdownMenuProps {
  onClose: () => void;
}

const UserDropdownMenu: React.FC<UserDropdownMenuProps> = ({ onClose }) => (
  <div className="absolute right-0 top-12 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
    <div className="p-2 border-b border-gray-100">
      <p className="text-sm font-medium text-gray-900">John Doe</p>
      <p className="text-xs text-gray-500">john@example.com</p>
    </div>
    <ul className="py-1">
      <li>
        <button
          className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50"
          onClick={onClose}
        >
          Profile
        </button>
      </li>
      <li>
        <button
          className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50"
          onClick={onClose}
        >
          Settings
        </button>
      </li>
      <li>
        <button
          className="w-full text-left px-3 py-2 text-sm text-red-600 hover:bg-gray-50"
          onClick={onClose}
        >
          Sign Out
        </button>
      </li>
    </ul>
  </div>
);

export default TopBar;
