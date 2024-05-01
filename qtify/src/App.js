import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero'
import { ThemeProvider } from '@mui/material/styles';
import { useEffect, useState } from 'react'
import axios from 'axios'
import theme from './theme'
import './App.css';
import SongSection from './components/SongSection/SongSection';

function App() {
  const [topSongs,setTopSongs] = useState([])
  const [newSongs,setNewSongs] = useState([])
  const [songs,setSongs] = useState([])
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
    async function fetchSongs(){
      try{
          let res = await axios.get('https://qtify-backend-labs.crio.do/albums/new');
          setSongs(res.data)
      }catch(err){
          alert(err);
      }
    }
    fetchTopAlbums();
    fetchNewAlbums();
    fetchSongs();
},[])


  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navbar />
        <Hero />
        <SongSection data={topSongs} title="Top Albums"/>
        <SongSection data={newSongs} title="New Albums"/>
        <div className='divider'></div>
        <SongSection data={songs} title="Songs"/>
        
      </div>
    </ThemeProvider>
  );
}

export default App;
