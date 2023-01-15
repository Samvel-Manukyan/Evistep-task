import CustomButton from '../../../shared/CustomButton';

import '../styles/CyberMonday.scss';

const CyberMonday = () => {
    return(
        <div className="cyber-monday">
            <div className="description">
                <span className="title">
                    <span>CYBER MONDAY</span> means an even <span>BIGGER SALE</span>
                </span>

                <span className="text-cyber">Cyber Monday saves you money,WebWork saves you time.</span>

                <div className="button">
                    <CustomButton width={211} text={'SAVE BIG NOW'}/>
                </div>

                <div className="free-trial">
                    <img src="/assets/icons/check-icon.png" alt="check-icon"/>
                    <span>14-day free trial | No credit card required</span>
                </div>

                <div className="reviews">
                    <img src="/assets/icons/rating-stars.png" alt="rating-stars"/>
                    <span>Reviews from 51K+ happy users below and beyond</span>
                </div>

                <div className="icons">
                    <img className="capterra" src="/assets/icons/capterra.png" alt="capterra"/>
                    <img className="gicrowd" src="/assets/icons/Gicrowd.png" alt="gicrowd"/>
                    <img className="getapp" src="/assets/icons/getapp.png" alt="getapp"/>
                </div>
            </div>

            <div className="fifty-percent-img">
                <img src="/assets/images/50off.png" alt="50off"/>
            </div>
        </div>
    );
}

export default CyberMonday;
