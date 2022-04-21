
import './App.css';
import CustomNavBar from './components/NavBar'

import ItemListContainer from './components/ItemListContainer'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
        <CustomNavBar/>
        <ItemListContainer  regards="Bienvenidos a Cosmética Cba"/>
        <Footer/>
    </div>
  );
}

export default App;
