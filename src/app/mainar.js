
 
import ImageSlider from './ImageSlider';
import ChallengesPagear from './ChallengesPagear';
import "swiper/css";
import './globals.css';
 import EnhancedCallToActionar from './EnhancedCallToActionar';
 import FAQSectionar from './FAQSectionar';
  import Firstcontentar from './firstcontentar';
import { Brain, Users, ArrowLeft } from 'lucide-react';
import StatsVisualizationar from './StatsVisualizationar';
 import InteractiveWorkflowar from './InteractiveWorkflowar';
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
<div className="mt-28">

<Firstcontentar />
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
