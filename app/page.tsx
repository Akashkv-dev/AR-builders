"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [currentSet, setCurrentSet] = useState(0);

  const imageSets = [
    [
      "/modals/pexels-expect-best-79873-323772.jpg",
      "/modals/pexels-curtis-adams-1694007-14495969.jpg",
      "/modals/pexels-heyho-6970048.jpg",
    ],
    [
      "/modals/pexels-heyho-6538895.jpg",
      "/modals/pexels-heyho-8134845.jpg",
      "/modals/pexels-lexovertoom-1109541.jpg",
    ],
    [
      "/modals/pexels-pavel-danilyuk-7937668.jpg",
      "/modals/pexels-binyaminmellish-106399.jpg",
      "/modals/pexels-pixabay-210617.jpg",
    ],
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSet((prev) => (prev + 1) % imageSets.length);
    }, 3000); // Rotate every 3 seconds
    return () => clearInterval(interval);
  }, [imageSets.length]);

  return (
    <div>
    <div className="grid grid-rows-[80px_1fr_40px] items-center min-h-screen m-4 sm:p-0 font-[family-name:var(--font-geist-sans)]">
      {/* Logo Section */}
      <div className="flex justify-center items-center p-2 sm:p-2">
        <Image
          className="dark h-14 sm:h-20"
          src="/arlogo.png"
          alt="ar logo"
          width={160}
          height={20}
          priority
        />
      </div>

      {/* Main Content */}
      <div className="flex flex-col sm:flex-row justify-between items-center">
        {/* Text Section */}
        <div className="font-thin text-3xl sm:text-7xl text-center sm:text-left mb-6 sm:mb-0 px-2">
          BUILD.RENOVATE.
          <br />
          IMPROVE.
        </div>

        {/* Collage Section */}
        <div className="flex items-center justify-center lg:pt-20 w-full lg:p-10 sm:w-4/5 max-h-[calc(100vh-180px)]">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            {/* Image 1 */}
            <div>
              <img
                src={imageSets[currentSet][0]}
                alt={`Image 1 - Set ${currentSet + 1}`}
                className="w-full h-40 sm:h-full object-cover rounded-lg"
              />
            </div>
            {/* Image 2 */}
            <div>
              <img
                src={imageSets[currentSet][1]}
                alt={`Image 2 - Set ${currentSet + 1}`}
                className="w-full h-40 sm:h-full object-cover rounded-lg"
              />
            </div>
            {/* Image 3 */}
            <div className="col-span-1 sm:col-span-2">
              <img
                src={imageSets[currentSet][2]}
                alt={`Image 3 - Set ${currentSet + 1}`}
                className="w-full h-48 sm:h-72 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

      {/* Footer */}
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center p-2 sm:p-4">
        <p className="text-sm text-gray-600">&copy; 2024 Your Company</p>
      </footer>
    </div>
  );
}
