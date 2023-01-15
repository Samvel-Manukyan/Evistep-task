import CyberMonday from './components/CyberMonday';
import BenefitBoth from './components/BenefitBoth';
import AllFeatures from './components/AllFeatures';
import Companies from './components/Companies';

import './index.scss';

const Main = () => {
    return(
        <div className="main">
            <CyberMonday/>
            <BenefitBoth/>
            <AllFeatures/>
            <Companies/>
        </div>
    );
}

export default Main;
