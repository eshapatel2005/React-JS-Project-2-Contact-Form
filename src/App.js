import logo from './logo.svg';
import './App.css';
import Navs from './components/fronted';

function App() {


   let obj={
    img1:'https://cutewallpaper.org/24/people-icon-png/group-together-teamwork-icon-people-icon-flat-png-free-transparent-png-clipart-images-download.png'
   }

  return (
    <Navs {...obj}></Navs>
  );
}

export default App;
