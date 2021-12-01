// Dependencies
import React from 'react';

// Icons
import { HomeIcon, SearchIcon, LibraryIcon, PlusCircleIcon } from '@heroicons/react/outline';


const Sidebar = () => {
  return (
    <div>
      <button>
        {/* Height and width are required in Tailwind to show buttons */}
        <HomeIcon className='h-5 w-5' />
        <p>Home</p>
      </button>
      <button>
        <SearchIcon className='h-5 w-5' />
        <p>Search</p>
      </button>
      <button>
        <LibraryIcon className='h-5 w-5' />
        <p>Your Library</p>
      </button>
    </div>
  );
};

export default Sidebar;