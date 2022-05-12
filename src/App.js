
import './App.css';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import Footer from './components/Footer'
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./components/Home"
import { Cart } from './components/Cart';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
        <NavBar/>
    <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path='/cosmeticos' element={<ItemListContainer />}/>
        <Route exact path='/Item' element={<ItemDetailContainer/>}/>
        <Route exact path='/Item/:id' element={<ItemDetailContainer/>}/>
        <Route exact path='/Cart/:id/:quantityOnAdd' element={<Cart/>}/>

    </Routes>
    </BrowserRouter>
        <Footer/>
    </div>
  );
}

export default App;
