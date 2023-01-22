import React from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeComponent from './pages/Home/Home';
import AboutComponent from './pages/About/About';
import { HeaderComponent } from './components/Header/Header';
import MovieDetailsComponent from './pages/MovieDetails/MovieDetails';



function App() {
  return (
    <BrowserRouter>
      <HeaderComponent/>
      <Routes>
          <Route path='/' element={<HomeComponent/>} />
          <Route path='/movie/:id' element={<MovieDetailsComponent/>} />
          <Route path='/about' element={<AboutComponent/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
