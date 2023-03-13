import styles from '@/styles/ContactUs.module.css'
import { Icon } from '@/components'

const ContactUs = (props) => {
    const { id, title, chat, descriptionChat, email, basedin, city, visit, socialMedia } = props

    return (
        <div id={id} className={styles.maple}>
            <div>
                <h2 className={styles.title}>{title}</h2>
            </div>
            <div className='padding'>
                <h3 className={styles.subtitle}>{chat}</h3>
                <p className='body2'>{descriptionChat}</p>
            </div>
            <div className={styles.mailimg + ' padding'}>
                <Icon variant='mail' />
                <a className={styles.mail + ' body3'} href={`mailto:${email}`}>
                    {email}
                </a>
            </div>
            <div className={styles.marg_lg}>
                <h3 className={styles.subtitle + ' padding'}>{basedin}</h3>
                <p className='body2 horizontal-padding '>{city}</p>
            </div>
            <div className={styles.marg_lg + ' padding'}>
                <h3 className={styles.subtitle}>{visit}</h3>
                <div className='vertical-padding'>
                    {socialMedia.map((a) => (
                        <a key={a.id} href={a.link} className={'horizontal-padding'}>
                            <Icon variant={a.icon} />
                        </a>
                    ))}
                </div>
                <div className={styles.britologo}></div>
            </div>
        </div>
    )
}
export default ContactUs
