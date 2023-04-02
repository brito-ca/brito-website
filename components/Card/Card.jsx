import { Icon, Image } from '@/components'
import styles from '@/styles/Board.module.css'

const Card = (props) => {
    const { image, title, description, email } = props
    return (
        <div className={styles.card_box}>
            <div className={styles.image_box}>
                <Image alt={image.alt} {...image} />
            </div>
            <div className={styles.center_box}>
                <div className={styles.title_box}>
                    <h5 className={styles.title_text}>{title}</h5>
                </div>
                <div>
                    <p className={styles.info_text}>{description}</p>
                </div>
            </div>
            <div className={styles.bottom_box}>
                <div className={styles.linkedin_box}>
                    <Icon variant='linkedinCard' />
                </div>
                <div className={styles.email_box}>
                    <div className={styles.line}>
                        <Icon variant='mailCard' />
                    </div>
                    <p className='no-padding'>{email}</p>
                </div>
            </div>
        </div>
    )
}

export default Card
