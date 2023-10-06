import  React from 'react';
import { BrowserRouter as Router, Routes, Route } from'react-router-dom';
import Dashboard from './components/Dashboard';
import AboutMe from './components/AboutMe';
import Library from './views/Library';
import Main from './views/Main';
import MVI from './components/stories/MeVsI';
import ToLove from './components/stories/ToLove';
import Late from './components/stories/Late';
import DR from './components/stories/DiarrheticReaction';
import HGH from './components/stories/HatersGonnaHate';
import Keegs from './components/stories/KeegityKeegers';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Main/>}default />
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/aboutMe' element={<AboutMe/>} />
          <Route path='/library' element={<Library/>} />
          <Route path='/mvi' element={<MVI/>} />
          <Route path='/toLove' element={<ToLove/>} />
          <Route path='/late' element={<Late/>} />
          <Route path='/dr' element={<DR/>} />
          <Route path='/hgh' element={<HGH/>} />
          <Route path='/keegs' element={<Keegs/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
