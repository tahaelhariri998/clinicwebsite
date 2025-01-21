
 
 
 

 
 
import "swiper/css";
import './globals.css';
 

 
import EnhancedCallToActionen from './EnhancedCallToActionen';
import StatsVisualizationen from './StatsVisualizationen';
import ChallengesPageen from './ChallengesPageen';
import FAQSectionen from './FAQSectionen';
import Firstcontenten from './firstcontenten';
 import InteractiveWorkflowen from './InteractiveWorkflowen';
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
 <Firstcontenten />


  

<ChallengesPageen />
<StatsVisualizationen />
<InteractiveWorkflowen />
<EnhancedCallToActionen />
<FAQSectionen ref={elementRef} />

  </div>

  );
};

export default mainarbic;
