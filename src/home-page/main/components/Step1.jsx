import CustomButton from '../../../shared/CustomButton';
import {trackData} from '../../../config/featuresdata';

import '../styles/Step1.scss';

const Step1 = () => {
    return(
        <div className="step-1">
            <div className="description-block">
                <span className="step-1-title">
                    Track the time your employees spend on work and get detailed information
                </span>

                <div className="text">
                    {
                        trackData.map((item) => {
                            const {icon, text, id} = item;
                            return(
                                <div
                                    key={id}
                                    className="time-data"
                                >
                                    <img src={icon} alt="icon"/>
                                    <span>{text}</span>
                                </div>
                            );
                        })
                    }
                </div>

                <div className="button">
                    <CustomButton width={267} text={'RESERVE YOUR SEAT'}/>
                </div>
            </div>

            <div className="img-block">
                <img src="/assets/images/images.png" alt="images"/>
            </div>
        </div>
    );
}

export default Step1;
