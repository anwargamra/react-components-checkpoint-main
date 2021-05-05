import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import ProfilePhoto from './components/profile/ProfilePhoto';

import FullName from './components/profile/FullName';
import Adress from './components/profile/Adress';
import Contact from './components/profile/Contact';
import { Card, Button } from "react-bootstrap";



function App() {
  return (
    <div className="App">
     <div>
     <ProfilePhoto/>
      <div>
      <FullName/>
      <Adress/>
      <div style={{  display : 'flex', justifyContent: 'center', fontSize: 20 }}>
      <Contact/>

      </div>
      </div>
     </div>
    </div>
  );
}

export default App;
