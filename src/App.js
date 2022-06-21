import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import { motion } from 'framer-motion'
import Navbar from './Navbar';
import Home from './Home';
import House from './House';
import About from './About'
import Activities from './Activities'
import Contact from './Contact'

const App = () => {
  return (
    <div className="App">
      <Link to='/'>
        <header className="header">
          <motion.h1 initial={{y: -50, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{type: 'spring', mass: 1}} className='header__h1'>14th Phoenix Legatus</motion.h1>
          <motion.h2 initial={{y: 50, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{type: 'spring', mass: 0.5, delay: 1.5}} className='header__h2'>Una Free Company de Final Fantasy XIV</motion.h2>
        </header>
      </Link>
      <Navbar/>
      <main>
        <section>
          <Routes>
            <Route path='/' element={<Home/>} exact/>
            <Route path='/about-us' element={<About/>}/>
            <Route path='/house' element={<House/>}/>
            <Route path='/activities' element={<Activities/>}/>
            <Route path='/contact-us' element={<Contact/>}/>
          </Routes>
        </section>
      </main>
    </div>
  );
}

export default App;
