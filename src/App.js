// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/footer.jsx';
import Book from './components/images/book.jsx';
import Navbar from "./components/navbar/navbar.jsx";
import New from "./components/new/new.jsx";
// import Cast from './components/new/cast/cast.jsx';
// import Events from  "./components/events/events.jsx"


function App() {
return(
  <BrowserRouter>
 <div className='APP'>
 <Navbar/>
  <Routes>
    <Route path='/' element={<Book/>} />
    <Route path='/new' element={<New />} />
  </Routes>
    
  
  {/* <New/> */}
  {/* <Events/> */}
  {/* <Cast title={"Cast"}/> */}
  <Footer/>

 </div>
 </BrowserRouter>
);
}

export default App;
