import React, { useState } from 'react';

const BottomTabs: React.FC = () => {
  const tabs = ['All Orders', 'Pending', 'Reviewed', 'Arrived'];
  const [activeTab, setActiveTab] = useState<string>('All Orders');

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    console.log(`${tab} clicked`);
  };

  return (
    <div className="flex items-center border-t border-gray-300 bg-white">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => handleTabClick(tab)}
          className={`px-4 py-2 text-sm font-medium transition ${
            activeTab === tab
              ? 'text-green-700 border-b-2 border-green-600 bg-green-1'
              : 'text-gray-600 hover:text-green-600'
          }`}
        >
          {tab}
        </button>
      ))}

      {/* + button */}
      <button
        onClick={() => console.log('Add tab clicked')}
        className="ml-2 px-3 py-1 text-lg font-semibold text-gray-500 hover:bg-green-300 hover:text-green-600"
      >
        +
      </button>
    </div>
  );
};

export default BottomTabs;
