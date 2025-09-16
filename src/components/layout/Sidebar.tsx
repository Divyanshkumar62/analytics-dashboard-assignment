import React, { useState } from 'react';
import {
  BarChart3,
  PieChart,
  TrendingUp,
  CheckCircle,
  Bookmark,
  User,
  Settings,
  HelpCircle
} from 'lucide-react';

interface NavIconButtonProps {
  Icon: React.ComponentType<any>;
  title: string;
  isActive: boolean;
  onClick: () => void;
}

const NavIconButton: React.FC<NavIconButtonProps> = ({
  Icon,
  title,
  isActive,
  onClick
}) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center justify-center p-3 rounded-lg transition-all duration-200 group ${
      isActive ? 'bg-white/30 hover:bg-white/40' : 'bg-transparent hover:bg-orange-600/20'
    }`}
    title={title}
    aria-label={title}
  >
    <Icon size={24} className="flex-shrink-0 text-white" />
  </button>
);

interface SidebarProps {
  onClose?: () => void;
}

const Sidebar: React.FC<SidebarProps> = () => {
  const [activeItem, setActiveItem] = useState<string>('dashboard');

  const handleItemClick = (itemId: string) => {
    setActiveItem(itemId);
  };

  return (
    <div className="w-16 bg-[#FF5900] text-white flex flex-col min-h-screen lg:w-16">
      {/* Logo */}
      <div className="flex items-center justify-center p-4">
        <span className="text-xl font-bold text-white">LG</span>
      </div>

      {/* Navigation Items - Top Section */}
      <nav className="flex-1 p-2 space-y-1">
        <NavIconButton
          Icon={BarChart3}
          title="Dashboard"
          isActive={activeItem === 'dashboard'}
          onClick={() => handleItemClick('dashboard')}
        />
        <NavIconButton
          Icon={PieChart}
          title="Charts"
          isActive={activeItem === 'charts'}
          onClick={() => handleItemClick('charts')}
        />
        <NavIconButton
          Icon={TrendingUp}
          title="Trends"
          isActive={activeItem === 'trends'}
          onClick={() => handleItemClick('trends')}
        />
        <NavIconButton
          Icon={CheckCircle}
          title="Tasks"
          isActive={activeItem === 'tasks'}
          onClick={() => handleItemClick('tasks')}
        />
        <NavIconButton
          Icon={Bookmark}
          title="Bookmarks"
          isActive={activeItem === 'bookmarks'}
          onClick={() => handleItemClick('bookmarks')}
        />
      </nav>

      {/* Spacer/Gap */}
      <div className="mb-4"></div>

      {/* Navigation Items - Bottom Section (Settings, FAQ, Profile) */}
      <nav className="p-2 space-y-1">
        <NavIconButton
          Icon={Settings}
          title="Settings"
          isActive={activeItem === 'settings'}
          onClick={() => handleItemClick('settings')}
        />
        <NavIconButton
          Icon={HelpCircle}
          title="FAQ"
          isActive={activeItem === 'faq'}
          onClick={() => handleItemClick('faq')}
        />
        <NavIconButton
          Icon={User}
          title="Profile"
          isActive={activeItem === 'profile'}
          onClick={() => handleItemClick('profile')}
        />
      </nav>
    </div>
  );
};

export default Sidebar;
