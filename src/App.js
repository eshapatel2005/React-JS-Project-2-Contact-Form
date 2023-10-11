import logo from './logo.svg';
import './App.css';
import Navs from './components/fronted';

function App() {


   let obj={
    img1:'https://cutewallpaper.org/24/people-icon-png/group-together-teamwork-icon-people-icon-flat-png-free-transparent-png-clipart-images-download.png',
    img2:'https://static.vecteezy.com/system/resources/previews/021/796/929/original/24-hours-servises-24-7-support-technical-support-customer-help-tech-support-customer-service-business-and-technology-concept-wireframe-hand-touching-digital-interface-illustration-vector.jpg'
   }

  return (
    <Navs {...obj}></Navs>
  );
}

export default App;
