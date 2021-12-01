// Dependencies
import React from 'react';

// Icons
import { HomeIcon, SearchIcon, LibraryIcon, PlusCircleIcon, HeartIcon, RssIcon } from '@heroicons/react/outline';


const Sidebar = () => {
  return (
    <div className='text-gray-500 p-5 text-sm border-r-gray-900'>
      {/* option + click = multicursor */}
      <div className='space-y-4'>
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

        {/* Border on the top w/ custom value of 0.1 pixels */}
        {/* 'Custom value' referring to value within [] brackets - just in time compiler mode */}
        {/* Compiler mode takes custom values and creates utility classes on the fly to support dev */}
        <hr className='border-t-[0.1px] border-gray-900'/>

        <button className='flex items-center space-x-2 hover:text-white'>
          <PlusCircleIcon className='h-5 w-5' />
          <p>Create Playlist</p>
        </button>
        <button className='flex items-center space-x-2 hover:text-white'>
          <HeartIcon className='h-5 w-5' />
          <p>Liked Songs</p>
        </button>
        <button className='flex items-center space-x-2 hover:text-white'>
          <RssIcon className='h-5 w-5' />
          <p>Your Episodes</p>
        </button>
        
        <hr className='border-t-[0.1px] border-gray-900'/>

        {/* Playlists... */}
      </div>
    </div>

    
  );
};

export default Sidebar;