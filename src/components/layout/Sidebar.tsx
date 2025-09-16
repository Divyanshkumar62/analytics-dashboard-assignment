import React, { useState } from 'react';
import {
  BarChart3,
  Gift,
  MessageSquare,
  PieChart,
  TrendingUp,
  Users,
  CheckCircle,
  Bookmark,
  Calendar,
  User
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

interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = () => {
  const [activeItem, setActiveItem] = useState<string>('dashboard');

  const handleItemClick = (itemId: string) => {
    setActiveItem(itemId);
  };

  return (
    <div
      className="fixed left-[-4px] top-[-10px] w-[60px] h-[849px] bg-[#FF5900] text-white flex flex-col"
    >
      {/* Logo */}
      <div className="flex items-center justify-center p-4">
        <span className="text-xl font-bold text-white">LG</span>
      </div>

      {/* Navigation Items - First 7 */}
      <nav className="flex-1 p-2 space-y-1">
        <NavIconButton
          Icon={BarChart3}
          title="Dashboard"
          isActive={activeItem === 'dashboard'}
          onClick={() => handleItemClick('dashboard')}
        />
        <NavIconButton
          Icon={Gift}
          title="Gift"
          isActive={activeItem === 'gift'}
          onClick={() => handleItemClick('gift')}
        />
        <NavIconButton
          Icon={MessageSquare}
          title="Messages"
          isActive={activeItem === 'messages'}
          onClick={() => handleItemClick('messages')}
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
          Icon={Users}
          title="Users"
          isActive={activeItem === 'users'}
          onClick={() => handleItemClick('users')}
        />
        <NavIconButton
          Icon={CheckCircle}
          title="Tasks"
          isActive={activeItem === 'tasks'}
          onClick={() => handleItemClick('tasks')}
        />
      </nav>

      {/* Spacer */}
      <div className="flex-1"></div>

      {/* Navigation Items - Last 2 */}
      <nav className="p-2 space-y-1">
        <NavIconButton
          Icon={Bookmark}
          title="Bookmarks"
          isActive={activeItem === 'bookmarks'}
          onClick={() => handleItemClick('bookmarks')}
        />
        <NavIconButton
          Icon={Calendar}
          title="Calendar"
          isActive={activeItem === 'calendar'}
          onClick={() => handleItemClick('calendar')}
        />
      </nav>

      {/* Profile */}
      <div className="p-4">
        <NavIconButton
          Icon={User}
          title="Profile"
          isActive={activeItem === 'profile'}
          onClick={() => handleItemClick('profile')}
        />
      </div>
    </div>
  );
};

export default Sidebar;
