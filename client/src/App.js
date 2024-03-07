import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';
import Footer from './Footer';
import Login from './Login';
import Register from './Register';
import Upload from './upload';
import University from './pup-University';
import PUPUniversity from './pup-University';
import MDUUniversity from './mdu-university';
import PuSemester from './pu-semesters';
import SingleSemester from './singlesemester.';
import Pseb from './pseb';
import Class from './class';
import Cbse from './cbse';
import MduSemester from './mdu-semesters';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route exact path={'/'} element={<Home/>}></Route>
        <Route exact path={'/login'} element={<Login/>}></Route>
        <Route exact path={'/register'} element={<Register/>}></Route>
        <Route exact path={'/upload'} element={<Upload/>}></Route>
        <Route exact path={'/Punjabi University,Patiala (PUP)'} element={<PUPUniversity/>}></Route>
        <Route exact path={'/Maharshi Dayanand University (MDU)'} element={<MDUUniversity/>}></Route>
        <Route exact path={'/Punjabi University,Patiala (PUP)/BCA'} element={<PuSemester/>}></Route>
        <Route exact path={'/Maharshi Dayanand University (MDU)/BCA'} element={<MduSemester/>}></Route>
        <Route exact path={'/Punjabi University,Patiala (PUP)/BCA/semester'} element={<SingleSemester/>}></Route>
        <Route exact path={'/Maharshi Dayanand University (MDU)/BCA/semester'} element={<SingleSemester/>}></Route>
        <Route exact path={'/PSEB'} element={<Pseb/>}></Route>
        <Route exact path={'/PSEB/classes'} element={<Class/>}></Route>        
        <Route exact path={'/CBSE'} element={<Cbse/>}></Route>
        <Route exact path={'/CBSE/classes'} element={<Class/>}></Route>
        

    </Routes>
    <Footer/>
</BrowserRouter>
  );
}

export default App;
