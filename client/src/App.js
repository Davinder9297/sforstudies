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
import ScrollToTop from './ScrollToTop';
import Subject from './Subject';
import University_Subject from './university_subjects';
import Replace from './replace';
import Account from './Account';
import Temp from './temp';

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop/>
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
        <Route exact path={'/Punjabi University,Patiala (PUP)/BCA/:sem'} element={<SingleSemester/>}></Route>
        <Route exact path={'/Punjabi University,Patiala (PUP)/BCA/:sem/:subject'} element={<University_Subject/>}></Route>
        <Route exact path={'/Maharshi Dayanand University (MDU)/BCA/:sem'} element={<SingleSemester/>}></Route>
        <Route exact path={'/Maharshi Dayanand University (MDU)/BCA/:sem/:subject'} element={<University_Subject/>}></Route>
        <Route exact path={'/PSEB'} element={<Pseb/>}></Route>
        <Route exact path={'/PSEB/:classvalue'} element={<Class/>}></Route>        
        <Route exact path={'/PSEB/:classvalue/:subject'} element={<Subject/>}></Route>        
        <Route exact path={'/CBSE'} element={<Cbse/>}></Route>
        <Route exact path={'/CBSE/:classvalue'} element={<Class/>}></Route>
        <Route exact path={'/CBSE/:classvalue/:subject'} element={<Subject/>}></Route>
        <Route exact path={'/a'} element={<Temp/>}></Route>
        

    </Routes>
    <Footer/>
</BrowserRouter>
  );
}

export default App;
