import {companiesLogos} from '../../../config/companies';

import '../styles/Companies.scss';

const Companies = () => {
    return(
        <div className="companies">
            <span className="companies-title">Trusted by 1000+ Companies</span>

            <div className="logos">
                {
                    companiesLogos.map((item) => {
                        const {id, src, width, height} = item;
                        return(
                            <div style={{width: width, height: height}} key={id}>
                                <img src={src} alt="companies-logo"/>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default Companies;
