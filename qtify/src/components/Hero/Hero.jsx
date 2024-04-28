import styles from './hero.module.css'
import HeroHeadPhones from '../../assets/hero_headphones.png'

export default function Hero(){
    return <section className={styles.heroSection}>
        <h4 className={styles.heroTitle}>100 Thousand Songs, ad-free <br /> Over thousands podcast episodes</h4>
        <img src={HeroHeadPhones} alt="headphones-img" />
    </section>
}

