import {useState} from 'react';
import {tabsData} from '../../../config/featuresdata';

import '../styles/AllFeatures.scss';

const AllFeatures = () => {
    const [tabId, setTabId] = useState(1);

    const onChange = (key) => {
        setTabId(key);
    }

    return(
        <div className="all-features">
            <div className="all-features-title">
                <span>Save Big on All Features</span>
                <span className="exceptions">no exceptions</span>
            </div>

            <div className="tabs">
                <div className="tabs-container">
                    {
                        tabsData.map((item) => {
                            const {key, icon, text} = item;
                            return(
                                <div
                                    key={key}
                                    className="steps"
                                    onClick={() => onChange(key)}
                                >
                                    <div className="tabs-items">
                                        <img src={icon} alt="icon"/>
                                        <span>{text}</span>
                                    </div>

                                    <div className={tabId === key ? 'active-line': ""}>
                                        <div className="line-1"> </div>
                                        <div className="line-2"> </div>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>

                <div className="line"> </div>

                {
                    tabsData.map((item) => {
                        const {key, icon, text, component} = item;
                        return(
                            <div
                                key={key}
                            >
                                <div>{tabId === key && component}</div>
                            </div>
                        );
                    })
                }

            </div>
        </div>
    );
}

export default AllFeatures;
