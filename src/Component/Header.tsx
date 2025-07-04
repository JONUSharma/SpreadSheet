import React from 'react';
import { FaChevronRight, FaSearch } from 'react-icons/fa';
import { IoNotificationsOutline } from 'react-icons/io5';

const Header: React.FC = () => {
    return (
        <header className="flex items-center justify-between bg-white px-4 py-2 border-b border-gray-200">
            {/* Left Side - Breadcrumbs */}
            <div className="flex items-center space-x-2">
                <span className="text-sm font-medium text-gray-600">Workspace</span>
                <FaChevronRight className="text-xs text-gray-400" />
                <span className="text-sm font-medium text-gray-600">Folder 2</span>
                <FaChevronRight className="text-xs text-gray-400" />
                <span className="text-sm font-semibold text-gray-800">Spreadsheet 3</span>
                <span className="text-sm font-semibold text-gray-500 mb-2">...</span>
            </div>

            {/* Right Side - Search, Profile, */}
            <div className="flex items-center space-x-4 ">
                {/* Search Bar */}
                <div className="relative">
                    <FaSearch className="absolute left-2 top-3.5 text-gray-400 text-sm" />
                    <input
                        type="text"
                        placeholder="Search within sheet"
                        onChange={(e)=>console.log(e.target.value)}
                        className="pl-8 pr-3 py-2.5 bg-gray-100 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                </div>

                <div className="relative" onClick={()=> console.log("Number of notification : 2")}>
                    <IoNotificationsOutline className="text-gray-600 text-2xl cursor-pointer" />
                    <span  className="absolute -top-1 -right-1 bg-green-800 text-white text-[10px] rounded-full h-4 w-4 flex items-center justify-center font-medium">
                        2
                    </span>
                </div>

                {/* User Profile */}
                <div className="flex items-center space-x-2 p-1.5 ">
                    <div className="h-8 w-8 cursor-pointer rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-bold">
                        JD
                    </div>
                    <div onClick={()=> console.log("John Deo")} className="text-md  cursor-pointer ">John Doe
                        <p className='text-gray-700 text-sm '>
                            john.doe...
                        </p>
                    </div>
                </div>

               

            </div>
        </header>
    );
};

export default Header;
