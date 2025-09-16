import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import ContentArea from './ContentArea';

interface DashboardLayoutProps {
  children?: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="relative h-screen bg-gray-50">
      <Sidebar isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />
      <Navbar />
      <ContentArea isCollapsed={isCollapsed}>
        {children}
      </ContentArea>
    </div>
  );
};

export default DashboardLayout;
