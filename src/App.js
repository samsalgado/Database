import './App.css';
import corrupt from './corrupt.png';
import ThreeStarTable from './threeStarTable';
import TwoStarTable from './twoStarTable';
import Farmersignup from './farmer-signup';
import Topbar from './topbar';
import FourStarTable from './fourStarTable';
import FiveStarTable from './fiveStarTable';
import background from './prevent-wellness.PNG'
import Footer from './footer';
function App() {
  return (
    <div className="App">
    <Topbar />
      <header className="App-header">
          <br></br>
          <h1>Healing comes from Within</h1>
          <img src={background} className="image" alt='picture' />
          <h1>Apothecary Database Tables</h1>
          <br></br>
          <img src={corrupt} className="image" alt='picture' />

          <br></br>
          <TwoStarTable />
          <br></br>

          <br></br>
          <ThreeStarTable />
          <br></br>
          <FourStarTable />
          <br></br>
          <FiveStarTable />
      </header>
      <footer className='container'>
          <Footer />
      </footer>
    </div>
  );
}

export default App;
