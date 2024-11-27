import React, {  useRef, useEffect, useState } from 'react';

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0); // Track the current image index
  const [sliderPosition, setSliderPosition] = useState(50); // Initial slider position (50%)
  const [imageHeight, setImageHeight] = useState(0); // Dynamic height based on aspect ratio
  const containerRef = useRef(null); // Reference to the container to measure width
  const sliderRef = useRef(null); // Reference to the slider line
  const touchStartX = useRef(0); // Track touch start position for mobile
  const touchStartSliderPosition = useRef(50); // Track slider position when touch starts

  const currentImage = images[currentIndex];

  // Calculate the aspect ratio of the first image
  const calculateImageHeight = () => {
    const containerWidth = containerRef.current.getBoundingClientRect().width; // Get container width
    const image = new Image();
    image.src = currentImage.firstImage;
    image.onload = () => {
      // Calculate the height based on the image aspect ratio
      const aspectRatio = image.height / image.width;
      setImageHeight(containerWidth * aspectRatio); // Set the height dynamically based on aspect ratio
    };
  };

  // Recalculate image height on window resize
  useEffect(() => {
    calculateImageHeight();
    window.addEventListener('resize', calculateImageHeight);

    return () => {
      window.removeEventListener('resize', calculateImageHeight);
    };
  }, [currentImage]);

  // Update the slider position based on mouse movement
  const handleMouseMove = (e) => {
    if (sliderRef.current) {
      const containerWidth = containerRef.current.getBoundingClientRect().width; // Get container width
      const newPosition = ((e.clientX - containerRef.current.offsetLeft) / containerWidth) * 100;
      setSliderPosition(Math.min(Math.max(newPosition, 0), 100)); // Ensure the position is between 0 and 100
    }
  };

  // Handle the start of mouse dragging
  const handleMouseDown = (e) => {
    e.preventDefault();
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  };

  // Handle the end of mouse dragging
  const handleMouseUp = () => {
    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('mouseup', handleMouseUp);
  };

  // Update the slider position based on touch movement
  const handleTouchMove = (e) => {
    if (sliderRef.current && touchStartX.current) {
      const containerWidth = containerRef.current.getBoundingClientRect().width;
      const touchMoveX = e.touches[0].clientX;
      const newPosition = touchStartSliderPosition.current + ((touchMoveX - touchStartX.current) / containerWidth) * 100;
      setSliderPosition(Math.min(Math.max(newPosition, 0), 100)); // Ensure the position is between 0 and 100
    }
  };

  // Handle the start of touch event
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartSliderPosition.current = sliderPosition; // Store the current slider position
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleTouchEnd);
  };

  // Handle the end of touch event
  const handleTouchEnd = () => {
    window.removeEventListener('touchmove', handleTouchMove);
    window.removeEventListener('touchend', handleTouchEnd);
  };

  // Change the image to the next one
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    setSliderPosition(50); // Reset the slider position to 50% when changing the image
  };

  // Change the image to the previous one
  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    setSliderPosition(50); // Reset the slider position to 50% when changing the image
  };

  return (
<div className="flex w-full h-full items-center">
  {/* Container for the buttons */}
  <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 flex justify-between items-center px-4 z-10">
    {/* Button container, centered vertically */}
    <button
      className=" focus:outline-none  transition duration-200 "
      onClick={prevImage}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="24" y="24" width="24" height="24" rx="4" transform="rotate(180 24 24)" fill="#FF9500"/>
<path d="M13.3 17.0002L9.66939 12.7645C9.2842 12.3151 9.2842 11.652 9.66939 11.2026L13.3 6.96691" stroke="white" stroke-width="1.1" stroke-linecap="round"/>
</svg>


    </button>

    <button
  className="focus:outline-none transition duration-200 mirrored-svg"
  onClick={nextImage}
>
<img
    src="arownext.png" // Replace with the actual path to your PNG
    alt="Next"
    className="w-6 h-6 " // Adjust size as needed
  />
</button>



    
  </div>

  {/* Image container */}
  <div
    ref={containerRef}
    className="absolute w-[80%] left-[10%] z-0" // Fullwidth container
    style={{ height: imageHeight }} // Set the height based on the aspect ratio of the image
  >
    {/* First image (background) */}
    <img
      src={currentImage.firstImage} // First image URL
      alt="Before"
      className="absolute w-full h-full object-cover" // Fullscreen background image
    />

    {/* Second image */}
    <div
      className="absolute top-0 left-0 h-full"
      style={{
        clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` // Clip the second image based on the slider position
      }}
    >
      <img
        src={currentImage.secondImage} // Second image URL
        alt="After"
        className="w-full h-full object-cover" // Fullscreen second image
      />
    </div>

    {/* Vertical slider line */}
    <div
      ref={sliderRef}
      className="absolute top-0 cursor-ew-resize"
      style={{
        left: `${sliderPosition}%`, // Position the line based on sliderPosition
        height: '100%', // Full height
        width: '2px', // Vertical line thickness
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Line color
      }}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
    ></div>
  </div>
</div>

  );
  
};

export default ImageSlider;
