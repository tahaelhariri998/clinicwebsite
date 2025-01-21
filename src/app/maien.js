
 
 
 
import "swiper/css";
import './globals.css';
 
import EnhancedCallToActionen from './EnhancedCallToActionen';
import ChallengesPageen from './ChallengesPageen';
import FAQSectionen from './FAQSectionen';
import InteractiveWorkflowen from './InteractiveWorkflowen';
import StatsVisualizationen from './StatsVisualizationen';
import Firstcontenten from './firstcontenten';
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
<div className="mt-28">

<Firstcontenten />
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
