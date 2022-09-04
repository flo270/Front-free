
import './App.css';
import { Route,Routes,BrowserRouter} from 'react-router-dom'
import Home from '../src/pages/home.jsx'
import NavBar from './components/header/NavBar';
import Footer from './components/footer/Footer';
import Login from '../src/pages/login'
import Register from './pages/register';
function App() {
  return (
    <BrowserRouter>
    <NavBar/>

       <Routes>
        <Route path='/register' element={<Register />} /> 
          <Route path='/home' element={<Home />} /> 
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer/>
    </BrowserRouter>
    
    
  );
}

export default App;
