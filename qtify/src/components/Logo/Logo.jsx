import logoImg from '../../assets/logo.png'
import styles from './logo.module.css'

export default function Logo(){
    return <div>
        <img src={logoImg} className={styles.logoImg} alt='LogoImg'/>
    </div>
}