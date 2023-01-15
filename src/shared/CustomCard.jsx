import CustomButton from './CustomButton';

import './styles/CustomCard.scss';

const CustomCard = ({oldPrice, text, percent, price}) => {
    return(
        <div className="custom-card">
            <span className='custom-card-title'>Monthly</span>

            <div className="fifty-percent">
                <span className="percent">{percent ? percent : ''}</span>
            </div>

            <img className="round" src="/assets/images/neon-outline.png" alt="neon-outline"/>

            <div className="old-price">
                <div className="line"> </div>
                <span>{oldPrice ? oldPrice : ''}</span>
            </div>

            <div className="price-block">
                <span className="price">{price}</span>
                <span className="month">per user/month</span>
            </div>

            <div className="description-block">
                <div>
                    <img src="assets/icons/Vector-check.png" alt="vector-check"/>
                    <span>14-day Free Trial</span>
                </div>

                <div>
                    <img src="assets/icons/Vector-check.png" alt="vector-check"/>
                    <span>Access to All Features</span>
                </div>

                <div>
                    <img src="assets/icons/Vector-check.png" alt="vector-check"/>
                    <span className="support">24/7 Support</span>
                </div>
            </div>

            <div className="custom-card-button">
                <CustomButton width={223} text={'GET YOUR DEAL'}/>
            </div>

            <span className="text">{text ? text : ''}</span>
        </div>
    );
}

export default CustomCard;
