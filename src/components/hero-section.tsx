'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Don't render motion animations until client-side
  if (!isClient) {
    return (
      <section className="relative pt-40 pb-32 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            {/* Static version for SSR */}
            <div className="md:w-1/2 mb-12 md:mb-0">
              <span className="inline-block py-1 px-3 bg-blue-500/10 text-blue-400 text-sm font-medium rounded-full mb-5">
                Next-Gen DNA Security
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-white leading-tight">
                AI-Powered
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-dna-blue to-dna-green block mt-2"> Beach Cleanup</span>
                Platform
              </h1>
              <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-xl">
                GenomicChain provides a secure, decentralized platform for storing, managing, and controlling access to your genomic data.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="relative w-full h-80 md:h-96 lg:h-[500px] flex items-center justify-center">
                <img src="https://classroomclipart.com/image/static7/preview2/tropical-beach-with-palm-trees-and-ocean-waves-clipart-69897.jpg"/>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  return (
    <section className="relative pt-4 pb-4 overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50 to-blue-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 opacity-95"></div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-6 relative z-10 bg-to-b from-white to-bg-blue-100">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Hero Text */}
          <motion.div 
            className="md:w-1/2 mb-12 md:mb-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <span className="inline-block py-1 px-3 bg-blue-500/10 text-blue-600 dark:text-blue-400 text-sm font-medium rounded-full mb-5">
                Smarter Shores, Cleaner Tomorrow
              </span>
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-gray-900 dark:text-white leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
                AI-Powered
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-dna-blue to-dna-green block mt-2"> Beach Cleanup</span>
                Platform
            </motion.h1>
            
            <motion.p
              className="text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Harness the power of AI to organize, optimize, and track beach cleanups. Our platform intelligently maps litter hotspots, streamlines volunteer deployment, and provides real-time impact insights—making every cleanup smarter and more effective.
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              {/* <Link href="/auth/signup" className="dna-button text-center py-4 px-8 text-lg font-medium rounded-xl hover:scale-105 transition-transform">
                Get Started
              </Link> */}
              <Link href="#features" className="dna-button">
                Join a Cleanup
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              <Link href="#features" className="dna-button">
                Organize Drive
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </motion.div>
            
            <motion.div
              className="mt-12 text-gray-500 dark:text-gray-400 flex items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <span className="text-sm mr-2">Scroll to explore</span>
              <motion.div 
                className="h-10 w-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden"
                initial={{ opacity: 0.5 }}
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <motion.div 
                  className="h-2 w-full bg-dna-blue rounded-full"
                  animate={{ y: [0, 30, 0] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/*Animation Container (outer wala) */}
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full h-80 md:h-96 lg:h-[500px] flex items-center justify-center">
              {/* <img src="https://classroomclipart.com/image/static7/preview2/tropical-beach-with-palm-trees-and-ocean-waves-clipart-69897.jpg"/> */}
              <div className="w-full h-full flex items-center justify-center">
                <img className="mb-4" src="https://classroomclipart.com/image/static7/preview2/tropical-beach-with-palm-trees-and-ocean-waves-clipart-69897.jpg"/>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* CSS for background grid */}
      <style jsx>{`
        .bg-grid-pattern {
          background-size: 20px 20px;
          background-image: linear-gradient(to right, #ddd 1px, transparent 1px),
                           linear-gradient(to bottom, #ddd 1px, transparent 1px);
        }
        
        @media (prefers-color-scheme: dark) {
          .bg-grid-pattern {
            background-image: linear-gradient(to right, #333 1px, transparent 1px),
                             linear-gradient(to bottom, #333 1px, transparent 1px);
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;