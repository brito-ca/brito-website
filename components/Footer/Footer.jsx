import Image from 'next/image'
import styles from '@/styles/Footer.module.css'
import line from '@/public/line.png'
import britoFlag from '@/public/brito-logo-1.png'
import britoWordmark from '@/public/brito-logo-2.png'
import labels from '@/constants/labels.en'
import { Icon } from '@/components'

const Footer = () => {
    return (
        <div>
            <Image src={line} alt='divisor' width={1240} height={3} />
            <div className={`${styles.footerContainer} flex-row-space-between`}>
                <div className={styles.logoAndSocial}>
                    <div className={styles.logoAndSocial}>
                        <Image src={britoFlag} alt='logo' width={72.33} height={64.36} />
                        <Image src={britoWordmark} alt='wordmark' width={193} height={72} />
                        <p className={'vertical-padding'}>
                            {labels.footerBrito.phrase}
                        </p>
                    </div>
                    <div className={styles.socialContainer}>
                        <a href='{labels.midia.instagramlink}' target={'_blank'} rel='noopener noreferrer'>
                            <Icon className={styles.icon} variant='instagram' />
                        </a>
                        <a href={labels.midia.linklinkedin} target={'_blank'} rel='noopener noreferrer'>
                            <Icon className={styles.icon} variant='linkedin' />
                        </a>
                        <a href={labels.midia.linkfacebook} target={'_blank'} rel='noopener noreferrer'>
                            <Icon className={styles.icon} variant='facebook' />
                        </a>
                    </div>
                </div>
                <div>
                    <h5 className={styles.title}>{labels.footerNavigation.company}</h5>
                    <div>
                        <p>
                            <a  href='#about' className={styles.navigation + ' body2'}>{labels.footerNavigation.about}</a>
                        </p>
                        <p className={'vertical-padding'}>
                            <a  href='#contact' className={styles.navigation + ' body2'}>{labels.footerNavigation.contact}</a>
                        </p>
                    </div>
                </div>
                <div className={styles.navigationContainer}>
                    <h5 className={styles.title}>{labels.footerNavigation.joinus}</h5>
                    <p>
                        <a  href='' className={styles.navigation + ' body2'}>{labels.footerNavigation.network}</a>
                    </p>
                </div>
            </div>
            <Image src={line} alt='divisor' width={1240} height={3} />
            <div className={`${styles.footerBottom} vertical-padding`}>
                <p className={styles.copyrightText + ' body5'} >{labels.footerContent.copyright}</p>
                <div className={styles.footerLinks}>
                    <p className={styles.copyrightText + ' body5'}>{labels.footerContent.rights}</p>
                    <p>|</p>
                    <p>
                        <a href='' className={styles.termsLink + ' body5'}>
                            {labels.footerContent.terms}
                        </a>
                    </p>
                    <p>|</p>
                    <p>
                        <a  href='' className={styles.termsLink + ' body5'}>
                            {labels.footerContent.privacy}
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Footer
