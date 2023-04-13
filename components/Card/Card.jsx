import { Icon, Image } from '@/components'
import styles from '@/styles/Board.module.css'

const Card = (props) => {
    const { image, title, description, email, linkedin } = props
    return (
        <div className={styles.card_box}>
            <div className={styles.image_box}>
                <Image {...image} alt={image.alt} />
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
                    <a
                        key='linkedin'
                        href={linkedin}
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <Icon variant='linkedinCard' />
                    </a>
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
