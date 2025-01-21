
 
import ImageSlider from './ImageSlider';
 
import "swiper/css";
import './globals.css';
import { Brain, Users, ArrowLeft } from 'lucide-react';
import EnhancedCallToActionen from './EnhancedCallToActionen';
import ChallengesPageen from './ChallengesPageen';
import FAQSectionen from './FAQSectionen';
import InteractiveWorkflowen from './InteractiveWorkflowen';
import StatsVisualizationen from './StatsVisualizationen';
const mainen = ({ elementRef }) => {

    
  const images = [
    {
      firstImage: '/im2.jpg', // Example image before
      secondImage: '/b2.jpg', // Example image after
      
    }, {
      firstImage: '/im4.png', // Example image before
      secondImage: '/b4.png', // Example image after
      
    },
    {
      firstImage: '/im5.png', // Example image before
      secondImage: '/b5.png', // Example image after
      
    },
    {
      firstImage: '/im1.jpg',
      secondImage: '/b1.jpg',
    },
    // Add more image pairs here
  ];

 


  return (
<div>
<div className="min-h-screen bg-gradient-to-br from-orange-50 to-white p-4 sm:p-6 md:p-8 "  >
  <div className="max-w-7xl mx-auto">
    <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-16">
      {/* Content Section */}
      <div className="order-2 md:order-2 space-y-6 md:space-y-8 relative text-left">
        {/* Main Heading */}
        <div className="space-y-4 md:space-y-6">
         
          <div className="text-lg sm:text-xl md:text-2xl text-gray-700 space-y-3">
            <p className="font-medium">
              We specialize in developing AI technologies for the hair transplantation sector
            </p>
            <p className="font-medium text-orange-600">
              The most advanced technology to turn hesitant individuals into clients
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          <div className="bg-white/80 p-3 sm:p-4 rounded-xl shadow-md backdrop-blur">
            <div className="flex items-center gap-2 sm:gap-3 text-orange-600">
              <Brain className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
              <p className="text-sm sm:text-base font-semibold">Generative AI</p>
            </div>
          </div>
          <div className="bg-white/80 p-3 sm:p-4 rounded-xl shadow-md backdrop-blur">
            <div className="flex items-center gap-2 sm:gap-3 text-orange-600">
              <Users className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
              <p className="text-sm sm:text-base font-semibold">Convert hesitation to trust</p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="pt-4 sm:pt-6 md:pt-8">
          <button className="group relative w-full bg-gradient-to-r from-orange-500 to-orange-400 text-white text-lg sm:text-xl md:text-2xl font-semibold py-3 sm:py-4 md:py-6 px-4 sm:px-6 md:px-8 rounded-xl transition-all duration-300 hover:shadow-2xl shadow-lg overflow-hidden">
            Book a free consultation - Click here
            <ArrowLeft className="inline-block mr-2 w-5 h-5 sm:w-6 sm:h-6 group-hover:-translate-x-2 transition-transform duration-300" />
            <div className="absolute inset-0 w-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 group-hover:translate-x-full transition-transform duration-1000"></div>
          </button>
        </div>
      </div>

       {/* Görsel Bölümü */}
       <div className="order-0 md:order-1 mx-auto w-full max-w-sm md:max-w-none mt-16 ml-4">
       <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight text-gray-900">
            How many clients is your clinic losing due to "fear of results"? 🤔
          </h1>
          

        <div className="aspect-[8/10] bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl mt-4">
    
          <div className="relative w-full h-full">
          <div className="relative inset-x-0 top-8 z-10 text-center animate-pulse">
  <span className="px-6 py-2 bg-white/90 backdrop-blur-sm rounded-lg text-2xl font-bold text-gray-800 shadow-lg 
    ring-2 ring-orange-400 ring-offset-2 ring-offset-white/10
    animate-[glow_2s_ease-in-out_infinite] hover:scale-105 transition-transform
    bg-gradient-to-r from-orange-100 via-white to-orange-100">
        Here is the solution!
        </span>
      </div>
            <ImageSlider images={images} />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<ChallengesPageen />
<StatsVisualizationen />
<InteractiveWorkflowen />
<EnhancedCallToActionen />
<FAQSectionen ref={elementRef} />
</div>
  );
};

export default mainen;
