import styles from './card.module.css'
import Tooltip from '@mui/material/Tooltip';

export default function Card({cardData}){
    return <div className={styles.card}>
        <Tooltip arrow title={cardData.songs.length + " songs"} placement="top">
            <div className={styles.cardMain}>
                    <img className={styles.cardImg} src={cardData.image} alt={cardData.tilte + "album"} />
                    <div className={styles.cardPill}>{`${cardData.follows}k Follows`}</div>
            </div>
            <div className={styles.cardFooter}>
                <h3>{cardData.title}</h3>
            </div>
        </Tooltip>
    </div>
}