import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules"; // Import required modules
import "swiper/css"; // Import Swiper styles
import "swiper/css/pagination"; // Optional pagination styles
import "./globals.css"; // Import custom styles if needed

const SvgImageSwapper = () => {
  const slideContainerStyle = {
    backgroundColor: 'rgb(211, 208, 208)', // Grey background
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '200%', // Fixed width for all slides
    height: '100px', // Fixed height for all slides
    marginBottom: '8%',
    borderRadius: '20px', // Optional: Rounded corners
  };

  const swiperImageStyle = {
    maxWidth: '90%',
    maxHeight: '100%',
    objectFit: 'contain', // Ensure images fit well
  };

  return (
    <div>
      <Swiper
        modules={[Autoplay, Pagination]} // Register modules
        spaceBetween={20} // Space between slides
        slidesPerView={2} // Default slides per view
        pagination={{ clickable: true }} // Enable clickable dots
        autoplay={{
          delay: 1000, // 2 seconds delay for autoplay
          disableOnInteraction: false, // Continue autoplay after interaction
        }}
        breakpoints={{
          640: {
            slidesPerView: 1, // 1 slide for smaller screens
          },
          768: {
            slidesPerView: 2, // 2 slides for medium screens
          },
          1024: {
            slidesPerView: 3, // 3 slides for larger screens
          },
        }}
        effect="slide" // Slide transition effect
      >
        {/* Slide 1 */}
        <SwiperSlide style={slideContainerStyle}>
          <img src="./azure.png" alt="Image 1" style={swiperImageStyle}/>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide style={slideContainerStyle}>
          <img src="./Jasper.png" alt="Image 2" style={swiperImageStyle}/>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide style={slideContainerStyle}>
          <img src="./sta.png" alt="Image 3" style={swiperImageStyle}/>
        </SwiperSlide>

        {/* Slide 4 */}
        <SwiperSlide style={slideContainerStyle}>
          <img src="./tflow.png" alt="Image 4" style={swiperImageStyle}/>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SvgImageSwapper;