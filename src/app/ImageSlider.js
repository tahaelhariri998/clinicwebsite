import React, { useRef, useEffect, useState } from "react";

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0); // Current image index
  const [sliderPosition, setSliderPosition] = useState(0); // Slider position (0% to 100%)
  const [imageHeight, setImageHeight] = useState(0); // Dynamic height based on aspect ratio
  const containerRef = useRef(null); // Reference to the container to measure width
  const direction = useRef(1); // 1 for moving right, -1 for moving left
  const intervalRef = useRef(null); // Reference to interval

  const currentImage = images[currentIndex];

  // Calculate the aspect ratio of the first image
  const calculateImageHeight = () => {
    const containerWidth = containerRef.current.getBoundingClientRect().width; // Get container width
    const image = new Image();
    image.src = currentImage.firstImage;
    image.onload = () => {
      const aspectRatio = image.height / image.width; // Aspect ratio
      setImageHeight(containerWidth * aspectRatio); // Dynamically set height
    };
  };

  // Function to start the automatic slider
  const startSlider = () => {
    intervalRef.current = setInterval(() => {
      setSliderPosition((prev) => {
        let newPosition = prev + direction.current * 1; // Move 1% at a time
        if (newPosition >= 100 || newPosition <= 0) {
          direction.current *= -1; // Reverse direction
          newPosition = Math.max(0, Math.min(newPosition, 100));
        }
        return newPosition;
      });
    }, 30); // Adjust speed by changing interval time
  };

  // Function to stop the automatic slider
  const stopSlider = () => {
    clearInterval(intervalRef.current);
  };

  // Automatically move the slider
  useEffect(() => {
    startSlider();
    return () => stopSlider();
  }, []);

  // Change to the next image when the animation completes
  useEffect(() => {
    
    if (sliderPosition == 1 && direction.current == -1) {
      handleNext();
      
    }
  }, [sliderPosition]);

  // Recalculate image height on resize
  useEffect(() => {
    calculateImageHeight();
    window.addEventListener("resize", calculateImageHeight);

    return () => window.removeEventListener("resize", calculateImageHeight);
  }, [currentImage]);

  // Handle previous/next button clicks
  const handlePrevious = () => {

    stopSlider();
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    startSlider();
    setSliderPosition(0);
  };

  const handleNext = () => {
    
    stopSlider();
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    startSlider();
    setSliderPosition(0);
  };

  return (
    <div className="flex w-full h-full items-center">
  {/* Container for the buttons */}
  <div className="absolute inset-y-0 w-full flex justify-between items-center px-1 z-10">
    {/* Previous button */}
    <button
      className="focus:outline-none transition duration-200 mr-4 "
      onClick={handlePrevious}
    >
       <img
        src="arrowprev.png" // Replace with the actual path to your PNG
        alt="Next"
        className="w-6 h-6"
      />
    </button>

    {/* Next button */}
    <button
      className="focus:outline-none transition duration-200 mr-4"
      onClick={handleNext}
    >
      <img
        src="arownext.png" // Replace with the actual path to your PNG
        alt="Next"
        className="w-6 h-6"
      />
    </button>
  </div>

  {/* Image container */}
  <div
    ref={containerRef}
    className="absolute w-[80%] left-[8%] z-0"
    style={{ height: imageHeight }}
  >
    {/* First image (background) */}
    <img
      src={currentImage.firstImage}
      alt="Before"
      className="absolute w-full h-full object-cover"
    />

    {/* Second image */}
    <div
      className="absolute top-0 left-0 h-full"
      style={{
        clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
      }}
    >
      <img
        src={currentImage.secondImage}
        alt="After"
        className="w-full h-full object-cover"
      />
    </div>

    {/* Vertical slider line */}
    <div
      className="absolute top-0"
      style={{
        left: `${sliderPosition}%`,
        height: "100%",
        width: "1px",
        backgroundColor: "#FF9500",
      }}
    ></div>
  </div>
</div>
  );
};

export default ImageSlider;
