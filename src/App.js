import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import House from './House';
import About from './About'
import Ranks from './Ranks'
import Contact from './Contact'

const App = () => {
  return (
    <div className="App">
      <Link to='/'>
        <header className="header">
          <h1 className='header__h1'>14th Phoenix Legatus</h1>
          <h2 className='header__h2'>Una Free Company de Final Fantasy XIV</h2>
        </header>
      </Link>
      <Navbar/>
      <main>
        <section>
          <Routes>
            <Route path='/' element={<Home/>} exact/>
            <Route path='/about-us' element={<About/>}/>
            <Route path='/house' element={<House/>}/>
            <Route path='/ranks' element={<Ranks/>}/>
            <Route path='/contact-us' element={<Contact/>}/>
          </Routes>
        </section>
      </main>
      <footer>
        <p>2022</p>
      </footer>
    </div>
  );
}

export default App;
