import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ChevronDown, Calendar, Menu, FileText } from 'lucide-react';

interface TopBarProps {
  className?: string;
  onMenuClick?: () => void;
}

const TopBar: React.FC<TopBarProps> = ({ className = '', onMenuClick }) => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [isPdfDropdownOpen, setIsPdfDropdownOpen] = useState(false);

  return (
    <header className={`h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 sm:px-6 ${className}`}>
      {/* Left: Title */}
      <div className="flex items-center">
        <h1 className="text-lg sm:text-xl font-semibold text-gray-900">Overview Dashboard</h1>
      </div>

      {/* Right: Controls */}
      <div className="flex items-center gap-2">
        {/* PDF Selector Dropdown - left of calendar */}
        <div className="hidden sm:block">
          <PdfSelector
            isOpen={isPdfDropdownOpen}
            onToggle={() => setIsPdfDropdownOpen(!isPdfDropdownOpen)}
            onClose={() => setIsPdfDropdownOpen(false)}
          />
        </div>

        <div className="hidden sm:flex items-center gap-2">
          {/* Date Icon */}
          <button className="text-gray-600 hover:text-gray-800 transition-colors bg-white rounded-md p-2 border border-black" aria-label="Date">
            <Calendar size={18} />
          </button>

          {/* Date Picker Component */}
          <DatePickerComponent
            selectedDate={selectedDate}
            onChange={setSelectedDate}
          />
        </div>

        {/* Hamburger Menu Icon for mobile */}
        <button
          onClick={onMenuClick}
          className="lg:hidden text-black hover:text-gray-700 transition-colors bg-white rounded-md p-2 border border-black"
          aria-label="Toggle menu"
        >
          <Menu size={24} />
        </button>

        {/* Hamburger Menu Icon for desktop - if needed for other menu */}
        <button className="hidden lg:block text-black hover:text-gray-700 transition-colors bg-white rounded-md p-2 border border-black" aria-label="Menu">
          <Menu size={24} />
        </button>
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
    <DatePicker
      selected={selectedDate}
      onChange={(date) => date && onChange(date)}
      className="pl-8 pr-2 py-1 border border-gray-300 rounded-md bg-white text-gray-900 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 min-w-0"
      dateFormat="MMM dd, yyyy"
    />
  </div>
);

interface PdfSelectorProps {
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}

const PdfSelector: React.FC<PdfSelectorProps> = ({ isOpen, onToggle, onClose }) => (
  <div className="relative">
    <button
      onClick={onToggle}
      className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors bg-white border border-black px-5 py-2 rounded-md"
      aria-label="PDF selector"
    >
      <FileText size={20} className="text-red-500" />
      <span className="hidden sm:inline font-semibold text-red-500">PDF</span>
      <ChevronDown
        size={20}
        className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}
        aria-expanded={isOpen}
      />
    </button>

    {/* Dropdown Menu */}
    {isOpen && (
      <PdfSelectorMenu onClose={onClose} />
    )}
  </div>
);

interface PdfSelectorMenuProps {
  onClose: () => void;
}

const PdfSelectorMenu: React.FC<PdfSelectorMenuProps> = ({ onClose }) => (
  <div className="absolute right-0 top-12 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
    <ul className="py-1">
      <li>
        <button
          className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50"
          onClick={onClose}
        >
          Export Current View
        </button>
      </li>
      <li>
        <button
          className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50"
          onClick={onClose}
        >
          Export Full Report
        </button>
      </li>
      <li>
        <button
          className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50"
          onClick={onClose}
        >
          Export Summary
        </button>
      </li>
    </ul>
  </div>
);

export default TopBar;
