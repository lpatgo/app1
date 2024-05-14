import React, { useState, useEffect } from 'react';

const BackgroundImageSwap = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = ['/big-arrow-750-lines-1.png', '/big-arrow-750-lines-2.png'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(currentImage === 0 ? 1 : 0); // Toggle between 0 and 1
    }, 8000); // Interval in milliseconds (8 seconds)

    return () => clearInterval(interval); // Cleanup function to clear interval on component unmount
  }, [currentImage]); // Run effect whenever currentImage changes

  return (
    <div className="bg-image bg-contain bg-left bg-no-repeat bg-opacity-75 h-screen absolute inset-0 z-[-1] transition-opacity duration-2000 ease-in-out" style={{ backgroundImage: `url(${images[currentImage]})` }}>

    </div>
  );
};

export default BackgroundImageSwap;
