import styles from './carousel.module.css'
import Card from '../Card/Card'
import { useState } from 'react'


export default function Carousel({data,title}){
    const [collapse,setCollapse] = useState(false)
    


    return <div className={styles.carousel}>
        <div className={styles.carouselHeader}>
            <p className={styles.carouselTitle}>{title}</p>
            <p className={styles.carouselBtn} onClick={() => setCollapse(prev => !prev)}>Show All</p>
        </div>
        {collapse && "working"}
        <div className={styles.cardWrapper}>
            {data && data.map(song => {
                return <Card cardData={song} key={song.id}/>
            })}
        </div>
    </div>
}