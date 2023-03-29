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

                {/* <div className='vertical-padding'>
                    {socialMedia.map((a) => (
                        <a
                            key={a.id}
                            href={a.link}
                            aria-label={`${a.id} link`}
                            className={'horizontal-padding'}
                        >
                            <Icon variant={a.icon} />
                        </a>
                    ))}
                </div> */}
                <div className={styles.britologo}></div>
            </div>
        </div>
    )
}
export default ContactUs
