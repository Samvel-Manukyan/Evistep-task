import CustomCard from '../../../shared/CustomCard';
import {awardsData} from '../../../config/benefitBothData';

import '../styles/BenefitBoth.scss';

const BenefitBoth = () => {
    return(
        <div className="benefit-both">
            <p className="benefit-both-title">Benefit both ways - monthly or yearly</p>

            <div className="custom-card-block">
                <CustomCard
                    oldPrice={'$4.99'}
                    price={'$2.49'}
                    text={'*for 6 months'}
                    percent={'50%'}
                />

                <CustomCard
                    oldPrice={'$4.09'}
                    price={'$2.09'}
                    percent={
                        <div className="percents">
                            <span className="small-percent">18%+</span>
                            <span>50%</span>
                        </div>
                    }
                />
            </div>

            <div className="awards">
                {
                    awardsData.map((item) => {
                        const {id, src, scale, translateX, zIndex} = item;
                        return(
                            <img
                                key={id}
                                style={{ transform: `scale(${scale}) translateX(${translateX})`, zIndex: zIndex }}
                                src={src}
                                alt="img"
                            />
                        );
                    })
                }
            </div>
        </div>
    );
}

export default BenefitBoth;
