import React from 'react';
import './App.css';
import MovieList from './MovieList/MovieList';
import Data from './data.json';
import HeroBanner from './HeroBanner/HeroBanner';
import AppNavbar from './AppNavbar/AppNavbar';
import Footer from './Footer/Footer';

function App() {
  const layoutArray = Data?.titles?.filter(
    ({ moduleType }) => moduleType === 'LAYOUT'
  );
  const heroArray = Data?.titles?.filter(
    ({ moduleType }) => moduleType === 'HERO'
  );
  return (
    <div className='App'>
      <AppNavbar></AppNavbar>
      {heroArray?.map(({ title, layoutTitles, moduleId }) => (
        <HeroBanner
          title={title}
          list={layoutTitles?.titles}
          key={moduleId}
        ></HeroBanner>
      ))}
      {layoutArray?.map(({ title, layoutTitles, moduleId }) => (
        <MovieList
          title={title}
          list={layoutTitles?.titles}
          key={moduleId}
        ></MovieList>
      ))}
      <Footer></Footer>
    </div>
  );
}

export default App;
