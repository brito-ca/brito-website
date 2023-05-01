import styles from '@/styles/ContactUs.module.css'
import { Icon } from '@/components'

const ContactUs = (props) => {
    const { id, title, chat, descriptionChat, email, basedin, city, visit, socialMedia } = props

    return (
        <div id={id} className={`flex-row-center`}>
            <div className={styles.maple}>
                <div>
                    <h2 className={styles.title}>{title}</h2>
                </div>
                <div className={styles.padding}>
                    <h3 className={styles.subtitle}>{chat}</h3>
                    <p className='body2'>{descriptionChat}</p>
                </div>
                <div className={styles.mailing + ' padding'}>
                    <Icon variant='mail' />
                    <a className={styles.mail + ' body3'} href={`mailto:${email}`}>
                        {email}
                    </a>
                </div>
                <div className={styles.padding}>
                    <div className={styles.marg_lg}>
                        <h3 className={styles.subtitle}>{basedin}</h3>
                        <p className='body2'>{city}</p>
                    </div>
                </div>
                <div className={styles.padding}>
                    <h3 className={styles.subtitle}>{visit}</h3>
                    <div className={`${styles.socialContainer} flex-row-start`}>
                        {socialMedia.map((media) => (
                            <a
                                key={media.id}
                                href={media.link}
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <Icon className={styles.icon} variant={media.icon} />
                            </a>
                        ))}
                    </div>
                    <div className={styles.britologo}></div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs
