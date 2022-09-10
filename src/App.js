import { Route,Routes,BrowserRouter} from 'react-router-dom'
import Home from '../src/pages/home/home'
import NavBar from './components/header/NavBar';
import Footer from './components/footer/Footer';
import Login from '../src/pages/login'
import Register from './pages/register';
import Admin from '../src/pages/administrador/admin'
import LoginSuccess from './pages/LoginSuccess';
import RegSuccess from './pages/RegSuccess';
import AdminUser from '../src/components/administracionUser/AdminUser'
import AdminMedico from './pages/adminMedicos/adminMedico';
import AdminDetalleMedico from './components/adminDetalleMedico/AdminDetalleMedico';
import AdminMedicoCrear from './components/adminMedicoCrear/AdminMedicoCrear';
import PacientePage from './pages/pacientePage/pacientePage';
import CrearPaciente from './components/crearpaciente/CrearPaciente';
import ModificarPaciente from './components/moificarPaciente/ModificarPaciente';
import ConsultaPage from './pages/consulta/consultaPage';
function App() {
  return (
    <BrowserRouter>
    <NavBar/>

       <Routes>
        
          <Route path='/' element={<Home />} /> 
          <Route path="/login" element={<Login />} />
          <Route path='/register' element={<Register />} /> 
          <Route path="/admin" element={<Admin/>} />
          <Route path="/loginSuccess" element={<LoginSuccess/>} />
          <Route path="/regSuccess" element={<RegSuccess/>} />
          <Route path="/adminUser" element={<AdminUser/>} />
          <Route path="/adminMedico" element={<AdminMedico/>} />
          <Route path="/detalle/:_id" element={<AdminDetalleMedico/>}/>
          <Route path='/crearMedico' element={<AdminMedicoCrear/>}/>
          <Route path='/paciente' element={<PacientePage/>}/>
          <Route path="/detallePaciente/:_id" element={<ModificarPaciente/>}/>
          <Route path='/crearPaciente' element={<CrearPaciente/>}/>
          <Route path='/consulta' element={<ConsultaPage/>}/>
          {/*  <Route path="/adminPaciente" element={<Admin/>} /> */}
        </Routes>
        <Footer/>
    </BrowserRouter>
    
    
  );
}

export default App;
