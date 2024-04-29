import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero'
import { ThemeProvider } from '@mui/material/styles';
import { useEffect, useState } from 'react'
import axios from 'axios'
import theme from './theme'
import './App.css';
import Carousel from './components/Carousel/Carousel';

function App() {
  const [topSongs,setTopSongs] = useState([])
  const [newSongs,setNewSongs] = useState([])
  useEffect(() => {
    async function fetchTopAlbums(){
        try{
            let res = await axios.get('https://qtify-backend-labs.crio.do/albums/top');
            setTopSongs(res.data)
        }catch(err){
            alert(err);
        }
    }
    async function fetchNewAlbums(){
      try{
          let res = await axios.get('https://qtify-backend-labs.crio.do/albums/new');
          setNewSongs(res.data)
      }catch(err){
          alert(err);
      }
  }
    fetchTopAlbums();
    fetchNewAlbums();
},[])


  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navbar />
        <Hero />
        <Carousel data={topSongs} title="Top Albums"/>
        <Carousel data={newSongs} title="New Albums"/>
      </div>
    </ThemeProvider>
  );
}

export default App;
