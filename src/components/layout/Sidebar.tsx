import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { LayoutDashboard, BarChart3, FileText, Settings } from 'lucide-react';

interface NavItem {
  icon: React.ComponentType<any>;
  label: string;
  active?: boolean;
}

const navItems: NavItem[] = [
  { icon: LayoutDashboard, label: 'Dashboard', active: true },
  { icon: BarChart3, label: 'Analytics' },
  { icon: FileText, label: 'Reports' },
  { icon: Settings, label: 'Settings' },
];

interface SidebarProps {
  isCollapsed: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isCollapsed, toggleSidebar }) => {
  const sidebarVariants = {
    expanded: { width: 256 },
    collapsed: { width: 64 },
  };

  const itemVariants = {
    expanded: { opacity: 1, x: 0 },
    collapsed: { opacity: 0, x: -20 },
  };

  return (
    <motion.div
      initial="expanded"
      animate={isCollapsed ? 'collapsed' : 'expanded'}
      variants={sidebarVariants}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="fixed left-0 top-0 h-screen bg-gray-900 text-white z-40 flex flex-col border-r border-gray-700"
    >
      {/* Sidebar Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        <motion.h1
          initial={{ opacity: 1, x: 0 }}
          animate={isCollapsed ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
          className="text-xl font-bold"
        >
          Logo
        </motion.h1>
        <button
          onClick={toggleSidebar}
          className="p-1 rounded hover:bg-gray-800 transition-colors"
          title={isCollapsed ? 'Expand' : 'Collapse'}
        >
          {/* Simple hamburger icon */}
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <li key={index}>
                <button
                  className={`w-full flex items-center p-3 rounded-lg hover:bg-gray-800 transition-colors group ${
                    item.active ? 'bg-blue-600' : ''
                  }`}
                  title={isCollapsed ? item.label : ''}
                >
                  <Icon size={24} className="flex-shrink-0" />
                  <motion.span
                    initial="expanded"
                    animate={isCollapsed ? 'collapsed' : 'expanded'}
                    variants={itemVariants}
                    transition={{ duration: 0.2 }}
                    className="ml-3 whitespace-nowrap"
                  >
                    {item.label}
                  </motion.span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Bottom Section - can add user profile, etc. */}
      <div className="p-4 border-t border-gray-700">
        <button className="w-full flex items-center p-2 hover:bg-gray-800 rounded">
          <div className="w-8 h-8 bg-gray-600 rounded-full flex-shrink-0"></div>
          <motion.span
            initial="expanded"
            animate={isCollapsed ? 'collapsed' : 'expanded'}
            variants={itemVariants}
            className="ml-3 whitespace-nowrap"
          >
            Profile
          </motion.span>
        </button>
      </div>
    </motion.div>
  );
};

export default Sidebar;
