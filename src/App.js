import { Route, Router, Routes } from 'react-router';
import './App.css';
import Dashboard from './components/pages/Admin/Dashboard';
import AsiaNews from './components/pages/AsiaNews';
import Home from './components/pages/Home';
import News from './components/pages/Admin/News';
import Single from './components/pages/Single';
import Categories from './components/pages/Admin/Categories';
function App() {
  return (
    <Routes>
      <Route path='/'      element={ <Home/>}/>
      <Route path='/news'  element={ <News/>}/>
      <Route path='/news/:slug'  element={ <Single/>}/>
      <Route path='/news/asia-news' element={<AsiaNews/>}/>
      
      {/*  admin componets */}
      <Route path='/admin' element={<Dashboard/>}/>
      <Route path='/admin/news'      element={ <News/>}/>
      <Route path='/admin/categories'      element={ <Categories/>}/>
    </Routes>
   
  );
}

export default App;
