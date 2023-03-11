import styles from '@/styles/ContactUs.module.css'
import { Icon } from '@/components'

const ContactUs = (props) => {
    const { id,title,chat,descriptionChat,malito,email,malito1,email1,basedin,city,visit,instagramlink,linklinkedin,linkfacebook } = props

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

                <a className={styles.mail + ' body3'} href={malito}>
                    {email}
                </a>
            </div>
            <div className={styles.mailnoimg + ' padding'}>
                <a className={styles.mail + ' body3'} href={malito1}>
                    {email1}
                </a>
            </div>
            <div className={styles.marg_lg}>
                <h3 className={styles.subtitle + ' padding'}>{basedin}</h3>
                <p className='body2 horizontal-padding '>{city}</p>
            </div>
            <div className={styles.marg_lg + ' padding'}>
                <h3 className={styles.subtitle}>{visit}</h3>
                <div className='vertical-padding'>
                    <a href={instagramlink} className='instagram horizontal-padding'>
                        <Icon variant='instagram' />
                    </a>
                    <a href={linklinkedin} className='linkedin horizontal-padding'>
                        <Icon variant='linkedin' />
                    </a>
                    <a href={linkfacebook} className='facebook horizontal-padding'>
                        <Icon variant='facebook' />
                    </a>
                </div>
                <div className={styles.britologo}></div>
            </div>
        </div>
    )
}
export default ContactUs
