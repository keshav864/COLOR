import './App.css';
import Navbar from './component/navbar';
import Home from './component/home';
import Movies from './component/movies';
import Footer from './component/footer';
import Celberty from './component/celeberty';
import PageNotFound from "./component/404";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import AddFavourites from './component/addFavourities';
// import Forms from './forms';
function App() {
 return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/movies' element={<Movies/>}/>
        <Route path='/addfavourites' element={<AddFavourites/>} />
        <Route path='/celeberty' element={<Celberty/>}/>
        <Route path='*' element={<PageNotFound />}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
      
    </div>
  );
}
export default App;
