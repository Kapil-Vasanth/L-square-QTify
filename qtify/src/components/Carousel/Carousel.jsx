import styles from './carousel.module.css'
import Card from '../Card/Card'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Carousel({data}){
    const [collapse,setCollapse] = useState(false)
    const [topSongs,setTopSongs] = useState([])
    useEffect(() => {
        async function fetchTopAlbums(){
            try{
                let res = await axios.get('https://qtify-backend-labs.crio.do/albums/top');
                setTopSongs(res.data)
            }catch(err){
                alert(err);
            }
        }
        fetchTopAlbums();
    },[])


    return <div className={styles.carousel}>
        <div className={styles.carouselHeader}>
            <p className={styles.carouselTitle}>Top Albums</p>
            <p className={styles.carouselBtn} onClick={() => setCollapse(prev => !prev)}>Show All</p>
        </div>
        {collapse && "working"}
        <div className={styles.cardWrapper}>
            {topSongs && topSongs.map(topsong => {
                return <Card cardData={topsong} key={topsong.id}/>
            })}
        </div>
    </div>
}