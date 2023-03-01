import Image from 'next/image'
import styles from '@/styles/Footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Image
                src={'/divisor.png'}
                alt='divisor'
                width={1240}
                height={3}
            />
            <div className={"flex-row-space-between"}>
                <div className={styles.logoAndSocial}>
                    <div className={styles.logoAndSocial}>
                        <Image src='/brito-logo-1.png' alt='logo' width={72.33} height={64.36} />
                        <Image src='/brito-logo-2.png' alt='wordmark' width={193} height={72} />
                        <p className={styles.body2}>Building the Brazilian IT community in Ottawa</p>
                    </div>
                    <div className={styles.iconContainer}>
                        <a href="https://www.facebook.com/groups/566404256865424" target={'_blank'} rel="noopener noreferrer">
                            <Image src={'/facebook-footer.png'} alt='facebook' width={9.82} height={18}/>
                        </a>
                        <a href="" target={'_blank'} rel="noopener noreferrer">
                            <Image src={'/instagram-footer.png'} alt='instagram' width={18} height={18}/>
                        </a>
                        <a href="https://www.linkedin.com/groups/12058916/" target={'_blank'}rel="noopener noreferrer">
                            <Image src={'/linkedin-footer.png'} alt='linkedin' width={19} height={18}/>
                        </a>
                    </div>
                </div>
                <div></div>
                <div>
                    <h5>Company</h5>
                    <p>
                        <a href="" className={styles.navigation}>About</a>
                    </p>
                    <p>
                        <a href="" className={styles.navigation}>Contact</a>
                    </p>
                </div>
                <div>
                    <h5>Join us</h5>
                    <p>
                        <a href="" className={styles.navigation}>Network list</a>
                    </p>
                </div>
            </div>
            <Image
                src={'/divisor.png'}
                alt='divisor'
                width={1240}
                height={3}
            />
            <div className={styles.footerBottom}>
                <p className={styles.fopyrightText}>Copyright © 2023 Brito</p>
                <p></p>
                <div className={styles.footerBottom}>
                    <p className={styles.copyrightText}>All Rights Reserved</p>
                    <p>&nbsp;|&nbsp;</p>
                    <p><a href="" className={styles.termsLink}>Terms and Conditions</a></p>
                    <p>&nbsp;|&nbsp;</p>
                    <p><a href="" className={styles.termsLink}>Privacy Policy</a></p>
                </div>
            </div>
        </footer>
    )
};
export default Footer;