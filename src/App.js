import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import ProfilePhoto from './components/profile/ProfilePhoto';

import FullName from './components/profile/FullName';
import Adress from './components/profile/Adress';
import Contact from './components/profile/Contact';

function App() {
  return (
    <div className="App">

      <div>
      <ProfilePhoto/>
      <FullName/>
      <Adress/>

      <div style={{ fontSize:30 }}>
      <Contact/>

      </div>
      </div>
    </div>
  );
}

export default App;
