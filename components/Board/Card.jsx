import { Icon } from '@/components'
import Image from 'next/image'
import styles from '@/styles/Board.module.css'

const Card = (props) => {
    const {image} = props
    return (
        <div className={styles.card_box}>
            <div className={styles.image_box}>
                <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                />
            </div>
            <div className={styles.title_box}>
                <h5>Marcelo - Dev director</h5>
            </div>
            <div>
                <p className={styles.info_text}>Senior Front-end Engineer with 20 years of experience building websites and applications using tech-edge for big techs, digital agencies, media and educational companies in Canada, the United States and Brazil.</p>
            </div>
            <div className={styles.linkedin_box}>
                <Icon variant='linkedinCard' />
            </div>
            <div className={styles.email_box}>
                <div>
                    <Icon variant='mailCard' />
                </div>
                <p className='no-padding'>contact@company.com</p>
            </div>
        </div>
    )
}
export default Card
