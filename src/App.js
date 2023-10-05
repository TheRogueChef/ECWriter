import  React from 'react';
import { BrowserRouter as Router, Routes, Route } from'react-router-dom';
import Dashboard from './components/Dashboard';
import Main from './views/Main';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Main/>}default />
          <Route path='/dashboard' element={<Dashboard/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
