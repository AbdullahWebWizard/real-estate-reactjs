import {Routes,Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import About from './pages/About';
import Contact from './pages/Contact';
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';
import Blog from './pages/Blog';
import Marketplace from './pages/marketplace';





function App() {
  return (
    <>
    
    <Routes>
    <Route path='/login'element={<Login/>} ></Route>
    <Route path='/marketplace'element={<Marketplace/>} ></Route>
    <Route path='/register'element={<Register/>} ></Route>
      <Route path='/'element={<HomePage/>} ></Route>
      <Route path='/about'element={<About/>} ></Route>
      <Route path='/contact'element={<Contact/>} ></Route>
      <Route path='/blog' element={<Blog/>}></Route>
    </Routes>
    </>
  
  );
};

export default App;
