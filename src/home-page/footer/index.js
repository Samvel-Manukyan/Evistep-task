import CustomButton from '../../shared/CustomButton';

import './index.scss';

const Footer = () => {
    return(
        <div className="footer">
            <div className="save">
                <span>Save 50% Now</span>

                <div className="button">
                    <CustomButton width={247} text={'GET MY DISCOUNT'}/>
                </div>
            </div>

            <div className="img-block">
                <img src="/assets/images/cards.png" alt="cards"/>
            </div>
        </div>
    );
}

export default Footer;
