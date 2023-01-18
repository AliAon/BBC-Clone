import { Route, Router, Routes } from 'react-router';
import './App.css';
import Dashboard from './components/pages/Admin/Dashboard';
import AsiaNews from './components/pages/AsiaNews';
import Home from './components/pages/Home';
import News from './components/pages/News';
import Single from './components/pages/Single';
function App() {
  return (
    <Routes>
      <Route path='/'      element={ <Home/>}/>
      <Route path='/news'  element={ <News/>}/>
      <Route path='/news/:slug'  element={ <Single/>}/>
      <Route path='/news/asia-news' element={<AsiaNews/>}/>
      <Route path='/admin' element={<Dashboard/>}/>

    </Routes>
   
  );
}

export default App;
