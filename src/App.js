
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Uk from "./Pages/Uk"
import Home from "./Pages/Home"
import Us from "./Pages/Us"
import SharedLayout from './ShredLayout.js/SharedLayout';
function App() {
  return (
    <BrowserRouter>
    
    <Routes>
     
    
     <Route path='/' element={<SharedLayout />} >
 
    {/* <MenuItems/> */}
           
           
          <Route index element={<Home/>} /> 
           <Route path='Uk' element={<Uk /> } />
           <Route path='Us' element={<Us /> } />

     
     
    
     </Route>
    
     </Routes>
     </BrowserRouter>

  );
}

export default App;
