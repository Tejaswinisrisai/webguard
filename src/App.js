import logo from './logo.svg';
import './App.css';
import MultiCards from './Components/Multicards/MultiCards';
import Navbar from './Components/Navbar/Navbar';
import Herocontent from './Components/Herocontent/Herocontent';
import bgv from "./Images/earth.mp4";
import Secondsec from './Components/Secondsec/Secondsec';
import Thirdsec from './Components/Thirdsec/Thirdsec';
import Foursec from './Foursec/Foursec';
import Fivesec from './Components/Fivesec/Fivesec';
import CompanyLogo from './Components/Companylogossec/CompanyLogo';
import Sixsec from './Components/Sixsec/Sixsec'
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>

      <Navbar />
      <div >
        <Herocontent />
        <MultiCards />
        <Secondsec />
        <Thirdsec />
        <Foursec />
        <Fivesec />
        <CompanyLogo />
        <Sixsec />
        <Footer />
      </div>
    </>
  );
}

export default App;
