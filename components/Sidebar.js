// Dependencies
import React from 'react';

// Icons
import { HomeIcon, SearchIcon, LibraryIcon, PlusCircleIcon } from '@heroicons/react/outline';


const Sidebar = () => {
  return (
    <div>
      {/* option + click = multicursor */}
      <button className='flex items-center space-x-2 hover:text-white'>
        {/* Height and width are required in Tailwind to show buttons */}
        <HomeIcon className='h-5 w-5' />
        <p>Home</p>
      </button>
      <button className='flex items-center space-x-2 hover:text-white'>
        <SearchIcon className='h-5 w-5' />
        <p>Search</p>
      </button>
      <button className='flex items-center space-x-2 hover:text-white'>
        <LibraryIcon className='h-5 w-5' />
        <p>Your Library</p>
      </button>
    </div>
  );
};

export default Sidebar;