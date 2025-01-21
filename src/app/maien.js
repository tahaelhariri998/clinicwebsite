
 
 
 
import "swiper/css";
import './globals.css';
 
import EnhancedCallToActionen from './EnhancedCallToActionen';
import ChallengesPageen from './ChallengesPageen';
import FAQSectionen from './FAQSectionen';
import InteractiveWorkflowen from './InteractiveWorkflowen';
import StatsVisualizationen from './StatsVisualizationen';
import Firstcontenten from './firstcontenten';
const mainen = ({ elementRef }) => {

    
 


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
