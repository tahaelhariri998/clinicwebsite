
 
import ImageSlider from './ImageSlider';

import "swiper/css";
import './globals.css';
import {   Brain, Users, ArrowLeft } from 'lucide-react';
 import EnhancedCallToActionar from './EnhancedCallToActionar';
import ChallengesPagear from './ChallengesPagear';
 
import InteractiveWorkflowar from './InteractiveWorkflowar';
import StatsVisualizationar from './StatsVisualizationar';
import FAQSectionar from './FAQSectionar';

const mainarbic = ({ elementRef }) => {

   
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


   <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white p-8 md:p-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Content Section */}
          <div className="order-2 md:order-2 space-y-8 relative text-right">
            {/* Main Heading */}
            <div className="space-y-6">
              <h1 dir="rtl" className="text-3xl md:text-5xl font-bold leading-tight text-gray-900">
                كم عميل تخسر عيادتك بسبب "خايف من النتيجة"؟ 🤔
              </h1>
              
              <div dir="rtl" className="text-xl md:text-2xl text-gray-700 space-y-4">
                <p className="font-medium">
                  نحن متخصصون في تطوير تقنيات الذكاء الاصطناعي لقطاع زراعة الشعر
                </p>
                <p className="font-medium text-orange-600">
                  التقنيه الاكثر تطورا لتحويل المترددين إلى عملاء
                </p>
              </div>
            </div>

            {/* Features */}
            <div dir="rtl" className="grid grid-cols-2 gap-4 ">
              <div className="bg-white/80 p-4 rounded-xl shadow-md backdrop-blur">
                <div className="flex items-center gap-3 text-orange-600">
                  <Brain className="w-6 h-6" />
                  <p className="text-s font-semibold"> ذكاء اصطناعي توليدي </p>
                </div>
              </div>
              <div className="bg-white/80 p-4 rounded-xl shadow-md backdrop-blur">
                <div className="flex items-center gap-3 text-orange-600">
                  <Users className="w-8 h-8" />
                  <p className="text-s font-semibold" >    تحويل المترددين الى عملاء</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-8">
              <button className="group relative w-full bg-gradient-to-r from-orange-500 to-orange-400 text-white text-xl md:text-2xl font-semibold py-4 md:py-6 px-8 rounded-xl transition-all duration-300 hover:shadow-2xl shadow-lg overflow-hidden">
                احجز استشاره مجانيه - انقر هنا
                <ArrowLeft className="inline-block mr-2 w-6 h-6 group-hover:-translate-x-2 transition-transform duration-300" />
                <div className="absolute inset-0 w-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 group-hover:translate-x-full transition-transform duration-1000"></div>
              </button>
            </div>

            {/* Security Badge */}
           
          </div>
{/* Image Section */}
<div className="order-1 md:order-1">
  <div className="aspect-[6/10] bg-white rounded-2xl overflow-hidden shadow-2xl">
    <div className="relative w-full h-full">
    <div className="relative inset-x-0 top-16 z-10 text-center animate-pulse">
  <span className="px-6 py-2 bg-white/90 backdrop-blur-sm rounded-lg text-2xl font-bold text-gray-800 shadow-lg 
    ring-2 ring-orange-400 ring-offset-2 ring-offset-white/10
    animate-[glow_2s_ease-in-out_infinite] hover:scale-105 transition-transform
    bg-gradient-to-r from-orange-100 via-white to-orange-100">
        ! هذا هو الحل 
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




     
  
    <ChallengesPagear />

    <StatsVisualizationar />
<InteractiveWorkflowar />

<EnhancedCallToActionar />
<FAQSectionar ref={elementRef} />
  </div>

  );
};

export default mainarbic;
