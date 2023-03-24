
// import './App.css';
// import { BrowserRouter,Routes,Route } from 'react-router-dom';

// import About from './About';
// import Master from './Master';
// import Services from './Services';
// import Home from './Home';
// import Footer from './Footer';
// import Gallery from './Gallery';
// import Addminhome from './admin';



// function App() {
//   return (
    
//     <BrowserRouter>
//       <Routes >
      

//         <Route path="/" element={<Master />}> 
//         <Route path="Home" element={<Home />} />
//         <Route path="About" element={<About />} />
//         <Route path="Services" element={<Services/>}/>
//         <Route path="Gallery" element={<Gallery/>}/>
//         <Route path="Addminhome" element={<Addminhome/>}/>
//         <Route path="" element={<Addminhome/>}/>

        
        



//         <Route path="Footer" element={<Footer/>}/>

        
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   )
// }

// export default App;
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Addprops from "./Addprops"
import Subprops from "./Subprops"
import Multiprops from "./Multiprops"
import Divisionprops from "./Divisionprops"
import Operation from './Operation';
//import Layout from './Layout';
import Addhoc from './Addhoc';
import MultiHoc from './MultiHoc';
import SubHoc from './SubHoc';
import DivHoc from './DivHoc';
import Master2 from './Hocmaster2';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Layout  />}>
          <Route index element={<Operation ope="*" />} />
          <Route path="add" element={<Addprops />} />
          <Route path="sub" element={<Subprops />} />
          <Route path="multi" element={<Multiprops />} />
          <Route path="div" element={<Divisionprops />} />
          </Route> */}

          <Route path="/" element={<Master2  />}>
          <Route path="Add" element={<Addhoc />} />
          <Route path="Sub" element={<SubHoc />} />
          <Route path="multi" element={<MultiHoc/>} />
          <Route path="Div" element={<DivHoc />} />
          </Route>

      </Routes>
    </BrowserRouter>
    
  );
}
export default App;