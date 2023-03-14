import labels from '@/constants/labels.en'
import styles from '@/styles/ContactUs.module.css'
import { Icon } from '@/components'

const ContactUs = (props) => {
    const { id } = props

    return (
        <div id={id} className={styles.maple}>
            <div>
                <h2 className={styles.title}>{labels.contactUs.title}</h2>
            </div>
            <div className='padding'>
                <h3 className={styles.subtitle}>{labels.chat.chat}</h3>
                <p className='body2'>{labels.chat.descriptionChat}</p>
            </div>
            <div className={styles.mailimg + ' padding'}>
                <Icon variant='mail' />

                <a className={styles.mail + ' body3'} href={labels.email.malito}>
                    {labels.email.email}
                </a>
            </div>
            <div className={styles.mailnoimg + ' padding'}>
                <a className={styles.mail + ' body3'} href={labels.email.malito}>
                    {labels.email.email}
                </a>
            </div>
            <div className={styles.marg_lg}>
                <h3 className={styles.subtitle + ' padding'}>{labels.location.Basedin}</h3>
                <p className='body2 horizontal-padding '>{labels.location.city}</p>
            </div>
            <div className={styles.marg_lg + ' padding'}>
                <h3 className={styles.subtitle}>{labels.midia.visit}</h3>
                <div className='vertical-padding'>
<<<<<<< HEAD
                    <a href={labels.midia.instagramlink} className='instagram horizontal-padding'>
                        <Icon className={styles.icon} variant='instagram' />
                    </a>
                    <a href={labels.midia.linklinkedin} className='linkedin horizontal-padding'>
                        <Icon className={styles.icon} variant='linkedin' />
                    </a>
                    <a href={labels.midia.linkfacebook} className='facebook horizontal-padding'>
                        <Icon className={styles.icon} variant='facebook' />
=======
                    <a
                        href={labels.midia.instagramlink}
                        aria-label='instagram link'
                        className='instagram horizontal-padding'
                    >
                        <Icon variant='instagram' />
                    </a>
                    <a
                        href={labels.midia.linklinkedin}
                        aria-label='linkedin link'
                        className='linkedin horizontal-padding'
                    >
                        <Icon variant='linkedin' />
                    </a>
                    <a
                        href={labels.midia.linkfacebook}
                        aria-label='facebook link'
                        className='facebook horizontal-padding'
                    >
                        <Icon variant='facebook' />
>>>>>>> origin/develop
                    </a>
                </div>
                <div className={styles.britologo}></div>
            </div>
        </div>
    )
}
export default ContactUs
