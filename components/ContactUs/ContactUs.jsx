import labels from '@/constants/labels.en'
import Image from 'next/image'
import styles from '@/styles/ContactUs.module.css'

const ContactUs = () => {
    return (
        <div className={styles.maple}>
            <div>
                <h3 className={styles.title}>{labels.contactUs.title}</h3>
            </div>
            <div className='padding'>
                <h4 className={styles.subtitle}>{labels.chat.chat}</h4>
                <p className='b2 body2'>{labels.chat.descriptionChat}</p>
            </div>
            <div>
                <address>
                    <Image
                        className={styles.mailimg}
                        width='20'
                        height='16'
                        src='/vector.svg'
                        alt='mail'
                    />
                    <a className={styles.mail + ' body3' + ' b3'} href={labels.email.malito}>
                        {labels.email.email}
                    </a>
                </address>
            </div>
            <div className='padding'></div>

            <div>
                <h4 className={styles.subtitle + ' padding'}>{labels.location.Basedin}</h4>
                <p className='b2 body2 padding'>{labels.location.city}</p>
            </div>

            <div className='padding'></div>
            <div className='padding'>
                <h4 className={styles.subtitle}>{labels.midia.visit}</h4>
                <div className={styles.midia}>
                    <a href={labels.midia.instagramlink} className='instagram'>
                        <Image
                            width='53'
                            height='53'
                            src='/instagram.svg'
                            alt={labels.midia.labelinstagram}
                        />
                    </a>
                    <a href={labels.midia.linklinkedin} className='linkedin'>
                        <Image
                            width='53'
                            height='53'
                            src='/linkedin.svg'
                            alt={labels.midia.labelinkedin}
                        />
                    </a>
                    <a href={labels.midia.linkfacebook} className='facebook'>
                        <Image
                            width='53'
                            height='53'
                            src='/facebook.svg'
                            alt={labels.midia.labelfacebook}
                        />
                    </a>
                </div>
            </div>
        </div>
    )
}
export default ContactUs