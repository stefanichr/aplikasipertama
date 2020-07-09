import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import Homepage from './Component/Fungsional/Homepage';
import About from './Component/Fungsional/AboutComp';
// import BootstrapComp from './Component/Class/BootstrapComp';
import NavbarComp from './Component/Fungsional/NavbarComp';
import DetailComp from './Component/Fungsional/DetailComp';
import ListComp from './Component/Class/ListComp';
import TambahComp from './Component/Class/TambahComp';
import EditComp from './Component/Class/EditComp';
import KelasComp from './Component/Hooks/Class/KelasComp';
import HooksComp from './Component/Hooks/Functional/HooksComp';
import HooksUseEffects from './Component/Hooks/Functional/HooksUseEffects';
// import { BrowserRouter, Switch } from 'react-router-dom';
// import Homepage from './Component/Fungsional/Homepage';
// import Parent from './Component/Class/CSS/Parent';
// import logo from './logo.svg';
// import Home from './Component/Fungsional/Home'
// import Beranda from './Component/Class/Beranda'
//  import './App.css';

const App = () => {
  return (
    <BrowserRouter>
    <NavbarComp/>
    <Switch>
      <Route exact path="/" component={Homepage}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/mahasiswa" component={ListComp}/>
      <Route exact path="/mahasiswa/tambah" component={TambahComp}/>
      <Route exact path="/mahasiswa/edit" component={EditComp}/>
      <Route exact path="/kelas" component={KelasComp}/>
      <Route exact path="/hooks" component={HooksComp}/>
      <Route exact path="/useeffects" component={HooksUseEffects}/>
      {/* <Route exact path="/detail/:id" component={DetailComp}/> */}
    </Switch>
    </BrowserRouter>
  );
}

export default App;
