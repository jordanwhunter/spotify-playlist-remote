// Dependencies
import Head from 'next/head'
import Sidebar from '../components/Sidebar';

export default function Home() {
  return (
    // Height of screen, overflow hidden in order to create scrolling effect with other elements
    <div className="bg-black h-screen overflow-hidden">
      <main>
       <Sidebar />
       {/* Center */}
     </main>

     <div>
       {/* Player */}
     </div>
    </div>
  );
};
