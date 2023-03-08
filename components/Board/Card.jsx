import { Icon } from '@/components'
import Image from 'next/image'
import styles from '@/styles/Board.module.css'

const Card = (props) => {
    const { image, info } = props
    return (
        <div className={styles.card_box}>
            <div className={styles.image_box}>
                <Image src={image.src} alt={image.alt} width={image.width} height={image.height} />
            </div>
            <div className={styles.center_box}>
                <div className={styles.title_box}>
                    <h5 className={styles.title_text}>{info.title}</h5>
                </div>
                <div>
                    <p className={styles.info_text}>{info.description}</p>
                </div>
            </div>
            <div className={styles.bottom_box}>
                <div className={styles.linkedin_box}>
                    <Icon variant='linkedinCard' />
                </div>
                <div className={styles.email_box}>
                    <div>
                        <Icon variant='mailCard' />
                    </div>
                    <p className='no-padding'>{info.email}</p>
                </div>
            </div>
        </div>
    )
}
export default Card
