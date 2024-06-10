import { useState } from 'react';
import { Route , Routes} from 'react-router-dom'
import './App.css';
import AppNavbar from './components/AppNavbar';
import { MovieData } from './components/MovieData';
import MovieList from './components/MovieList';
import AddMovie from './components/AddMovie';
import { formControlClasses } from '@mui/material';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Trailer from './pages/Trailer';




function App() {
  const [movies , setMovies] = useState(MovieData)
  const [searchTitle , setSearchTitle ] = useState("")
  
  // console.log(searchTitle )
    const addMovie = (newMovie)=>{
      // console.log (newMovie)
      setMovies([...movies , newMovie])
    }
  return (
    <div>
      <AppNavbar setSearchTitle={setSearchTitle} />
      <Routes>
      <Route path='/' element={<Home />} /> 
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/AddMovie' element={ <AddMovie  AddMovie={AddMovie} /> } />
      <Route path='/movies' element={<MovieList movies={movies} searchTitle={searchTitle} />} /> 
      <Route path='/trailer/:id' element={<Trailer movies={movies} />} />
     
      </Routes>
    </div>
  );
}

export default App;
