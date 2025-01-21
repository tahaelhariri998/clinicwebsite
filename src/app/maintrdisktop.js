
 
 
 
import  StatsVisualizationtr  from "./StatsVisualizationtr";
 import  EnhancedCallToActiontr  from "./EnhancedCallToActiontr";
 
import "swiper/css";
import './globals.css';
import  ChallengesPagetr  from "./ChallengesPagetr";
import  InteractiveWorkflowtr  from "./InteractiveWorkflowtr";
import Firstcontenttr from "./firstcontenttr";

import FAQSectiontr from "./FAQSectiontr"

 
const mainarbic = ({ elementRef }) => {

  return (


    <div>
<Firstcontenttr />

<ChallengesPagetr />
<  StatsVisualizationtr />
<InteractiveWorkflowtr />

<EnhancedCallToActiontr />
<FAQSectiontr ref={elementRef} />
  </div>

  );
};

export default mainarbic;
