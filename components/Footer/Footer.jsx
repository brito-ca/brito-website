import Image from 'next/image'
import styles from '@/styles/Footer.module.css'
import line from '@/public/line.png'
import britoFlag from '@/public/brito-logo-1.png'
import britoWordmark from '@/public/brito-logo-2.png'
import fbLogo from '@/public/facebook-footer.svg'
import instaLogo from '@/public/instagram-footer.svg'
import linkedinLogo from '@/public/linkedin-footer.svg'

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
                            Building the Brazilian IT community in Ottawa
                        </p>
                    </div>
                    <div className={styles.socialContainer}>
                        <a
                            href='https://www.facebook.com/groups/566404256865424'
                            target={'_blank'}
                            rel='noopener noreferrer'
                        >
                            <Image src={fbLogo} alt='facebook' width={9.82} height={18} />
                        </a>
                        <a href='' target={'_blank'} rel='noopener noreferrer'>
                            <Image src={instaLogo} alt='instagram' width={18} height={18} />
                        </a>
                        <a
                            href='https://www.linkedin.com/groups/12058916/'
                            target={'_blank'}
                            rel='noopener noreferrer'
                        >
                            <Image src={linkedinLogo} alt='linkedin' width={19} height={18} />
                        </a>
                    </div>
                </div>
                <div className={styles.navigationContainer}>
                    <h5 className={styles.title}>Company</h5>
                    <div>
                        <p>
                            <a className={styles.navigation + ' body2'}>About</a>
                        </p>
                        <p className={'vertical-padding'}>
                            <a className={styles.navigation + ' body2'}>Contact</a>
                        </p>
                    </div>
                </div>
                <div className={styles.navigationContainer}>
                    <h5 className={styles.title}>Join us</h5>
                    <p>
                        <a className={styles.navigation + ' body2'}>Network list</a>
                    </p>
                </div>
            </div>
            <Image src={line} alt='divisor' width={1240} height={3} />
            <div className={`${styles.footerBottom} vertical-padding`}>
                <p className={styles.copyrightText + ' body5'} >Copyright © 2023 Brito</p>
                <div className={styles.footerLinks}>
                    <p className={styles.copyrightText + ' body5'}>All Rights Reserved</p>
                    <p>|</p>
                    <p>
                        <a className={styles.termsLink + ' body5'} href=''>
                            Terms and Conditions
                        </a>
                    </p>
                    <p>|</p>
                    <p>
                        <a className={styles.termsLink + ' body5'} href=''>
                            Privacy Policy
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Footer
