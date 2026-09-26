import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';
import { GiMuscleUp } from 'react-icons/gi';

export default function NotFound() {
  return (
    <main className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0e14] -mb-8 sm:-mb-10 md:-mb-12 lg:-mb-14">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/program/pg7.jpg" 
          alt="404 Page Not Found"
          fill
          className="object-cover object-center opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e14] via-[#0a0e14]/50 to-transparent z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 w-full md:-mt-2 lg:-mt-10">
        <h1 className="text-[120px] sm:text-[180px] md:text-[250px] font-black text-white leading-none tracking-tighter drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] flex items-center justify-center">
          4
          <span className="w-[75px] h-[115px] sm:w-[110px] sm:h-[170px] md:w-[150px] md:h-[230px] bg-[#E5192C] rounded-[40px] sm:rounded-[60px] md:rounded-[80px] flex items-center justify-center mx-2 sm:mx-4 md:mx-6 shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]">
             <GiMuscleUp className="text-[#0a0e14] text-[65px] sm:text-[95px] md:text-[130px] mt-2 sm:mt-3 md:mt-4" />
          </span>
          4
        </h1>
        
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tight mt-2 mb-6 drop-shadow-lg">
          Page <span className="text-[#E5192C]">Not</span> Found
        </h2>
        
        <p className="text-gray-300 text-base sm:text-lg md:text-xl font-medium max-w-xl mx-auto mb-10 drop-shadow-md leading-relaxed">
          Looks like you've taken a wrong turn.<br/>
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        <Link 
          href="/"
          className="group flex items-center gap-3 bg-[#E5192C] hover:bg-red-700 text-white text-lg font-bold px-10 py-4 rounded transition-all duration-300 shadow-[0_4px_20px_rgba(229,25,44,0.4)] hover:shadow-[0_6px_25px_rgba(229,25,44,0.6)] hover:-translate-y-1"
        >
          Back to Home
          <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-2" />
        </Link>
      </div>
    </main>
  );
}
