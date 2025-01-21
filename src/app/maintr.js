
 
 
 
import ChallengesPagetr from "./ChallengesPagetr";
import "swiper/css";
import './globals.css';

import StatsVisualizationtr from "./StatsVisualizationtr";
 import InteractiveWorkflowtr from "./InteractiveWorkflowtr";
 import EnhancedCallToActiontr from "./EnhancedCallToActiontr";
  import FAQSectiontr from "./FAQSectiontr";
   import Firstcontenttr from "./firstcontenttr";
const mainen = ({ elementRef }) => {

 

  return (
<div>
<div className="mt-28">

<Firstcontenttr />
</div>

<ChallengesPagetr />
<  StatsVisualizationtr />
<  InteractiveWorkflowtr />
<  EnhancedCallToActiontr />
<  FAQSectiontr ref={elementRef} />

</div>
  );
};

export default mainen;
