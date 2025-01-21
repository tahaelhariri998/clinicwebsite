
 
import ImageSlider from './ImageSlider';

import "swiper/css";
import './globals.css';
import {   Brain, Users, ArrowLeft } from 'lucide-react';
 import EnhancedCallToActionar from './EnhancedCallToActionar';
import ChallengesPagear from './ChallengesPagear';
 
import InteractiveWorkflowar from './InteractiveWorkflowar';
import StatsVisualizationar from './StatsVisualizationar';
import FAQSectionar from './FAQSectionar';
import Firstcontentar from './firstcontentar';
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


    <div dir="rtl">
<Firstcontentar />



     
  
    <ChallengesPagear />

    <StatsVisualizationar />
<InteractiveWorkflowar />

<EnhancedCallToActionar />
<FAQSectionar ref={elementRef} />
  </div>

  );
};

export default mainarbic;
