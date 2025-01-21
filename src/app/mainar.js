
 
 
import ChallengesPagear from './ChallengesPagear';
import "swiper/css";
import './globals.css';
 import EnhancedCallToActionar from './EnhancedCallToActionar';
 import FAQSectionar from './FAQSectionar';
  import Firstcontentar from './firstcontentar';
 
import StatsVisualizationar from './StatsVisualizationar';
 import InteractiveWorkflowar from './InteractiveWorkflowar';
const mainarbic = ({ elementRef }) => {

   
  
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
