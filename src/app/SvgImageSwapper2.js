import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react";
const SvgImageSwapper = () => {
  // State to track which SVG is displayed
  




  
  return (
    <div>
       <Swiper
        spaceBetween={5}  // Space between slides
        slidesPerView={1.01}  // Show one image at a time
        pagination={{ clickable: true }}  // Enable clickable dots
        loop={true}  // Infinite loop
        effect="slide"  // Slide transition effect
        centeredSlides={true}
      >
        {/* Slide 1 */}
        <SwiperSlide>
        <div
        
        style={{
            justifyContent: "center", // Centers content horizontally
            alignItems: "center", 
            gap: "5px",
            display: "flex",
       }}
             
            >
  <Image src="./im1.jpg" alt="Image 1"     style={{
           
           width: "170px", height: "200px",
      }}/>
  <Image src="./b1.jpg" alt="Image 2"    style={{
           
           width: "170px", height: "200px",
      }} />
</div>

        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
        <div
        
        style={{
            gap: "5px",
            justifyContent: "center", // Centers content horizontally
            alignItems: "center", 
            display: "flex",
       }}
             
            >
  <Image src="./im2.jpg" alt="Image 1" style={{
           
           width: "170px", height: "200px",
      }}   />
  <Image src="./b2.jpg" alt="Image 2" style={{
           
           width: "170px", height: "200px",
      }}  />
</div>
        </SwiperSlide>

        
        <SwiperSlide>
        <div
        
        style={{
            justifyContent: "center", // Centers content horizontally
            alignItems: "center", 
            gap: "5px",
            display: "flex",
       }}
             
            >
  <Image src="./im3.jpg" alt="Image 1" style={{
           
           width: "170px", height: "200px",
      }}  />
  <Image src="./b3.jpg" alt="Image 2" style={{
           
           width: "170px", height: "200px",
      }}  />
</div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SvgImageSwapper;
