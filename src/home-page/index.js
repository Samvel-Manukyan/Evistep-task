import Header from './header';
import Main from './main';
import Footer from './footer';

import './index.scss';

const HomePage = () => {
  return(
      <div className="home_page">
          <Header/>
          <Main/>
          <Footer/>
      </div>
  );
}

export default HomePage;
