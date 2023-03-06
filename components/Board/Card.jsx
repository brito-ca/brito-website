import { Icon } from '@/components'
import Image from 'next/image'
import marcelo from '../../public/image1.png'
import styles from '@/styles/Board.module.css'

const Card = () => {
    return (
        <div className={styles.card_box}>
            <div>
                <Image src={marcelo} alt='person' />
            </div>
            <div className={'body1'}>
                <p>Marcelo - Dev director</p>
            </div>
        </div>
    )
}
export default Card
