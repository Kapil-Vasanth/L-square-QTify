import styles from './songSection.module.css'
import Card from '../Card/Card'
import { useState } from 'react'
import Carousel from '../Carousel/Carousel'

export default function SongSection({data,title}){
    const [collapse,setCollapse] = useState(true)

    return <div className={styles.song_section}>
        <div className={styles.song_section_Header}>
            <p className={styles.song_section_Title}>{title}</p>
            <p className={styles.song_section_Btn} onClick={() => setCollapse(prev => !prev)}>Show All</p>
        </div>
        {collapse ? 
            <Carousel data={data} component={(song) => <Card cardData={song}/>}/> : 
            <div className={styles.cardWrapper}>
                {data && data.map(song => {
                    return <Card cardData={song} key={song.id}/>
                })}
            </div>
        }
    </div>
}