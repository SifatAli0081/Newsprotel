import './App.css';
import { BrowserRouter,Route, Routes } from "react-router-dom";
import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact';
import Error from './Component/Error';
function App() {
  return (
      
      <BrowserRouter>
       <Routes>
        <Route path="/" element={<Home></Home>}>
         <Route path="about" element={<About/>}/>
         <Route path="contact" element={<Contact/>}/>
         <Route path="*" element={<Error/>}/>
         </Route>
       </Routes>
     </BrowserRouter>
    
  );
}

export default App;
