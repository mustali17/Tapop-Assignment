import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Register from './components/Register';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes,Route} from "react-router-dom"
import Signin from './components/Signin';
import Profile from './components/Profile';
import QR from './components/QR';

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path='/register' element={ <Register />} />
        <Route path='/signin' element={ <Signin/>} />
        <Route path='/profile/:id' element={ <Profile/>} />
        <Route path='/qr' element={ <QR/>} />
      </Routes>
     
    </>
  );
}

export default App;
