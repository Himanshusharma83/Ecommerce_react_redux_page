import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Cards from './components/Cards';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes,Route} from 'react-router-dom';
import CardsDetails from './components/CardsDetails';

function App() {
  return (
    <div >
     <Header />
     <Routes>
      <Route path='/' element={<Cards />} />
      <Route path='/cart/:id' element={<CardsDetails />} />


     
     </Routes>
    </div>
  );
}

export default App;
