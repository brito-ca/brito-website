import Image from 'next/image'
import britoFlag from '../../public/images/brito-logo-1.svg'
import britoWordMark from '../../public/images/brito-logo-2.svg'
import styles from '@/styles/Footer.module.css'
import labels from '@/constants/labels.en'
import { Icon } from '@/components'

const Footer = (props) => {
    const { description, icons, menu } = props
    return (
        <div>
            <div className={`${styles.footerContainer} flex-row-space-between`}>
                <div className={styles.logoAndSocial}>
                    <div className={styles.logoAndSocial}>
                        <Image alt={description.altFlag} src={britoFlag} className={styles.logo} />
                        <Image
                            alt={description.altWordmark}
                            src={britoWordMark}
                            className={styles.logo}
                        />
                        <p className={'vertical-padding'}>{description.phrase}</p>
                    </div>
                    <div className={styles.socialContainer}>
                        {icons.map((media) => (
                            <a
                                key={media.variant}
                                href={media.href}
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <Icon className={styles.icon} variant={media.variant} />
                            </a>
                        ))}
                    </div>
                </div>
                {menu.map((menuItem, index) => (
                    <div key={index}>
                        <h5 className={styles.title}>{menuItem.title}</h5>
                        {menuItem.links.map((link, index) => (
                            <p key={index} className={'vertical-padding'}>
                                <a href={link.href} className={styles.navigation + ' body2'}>
                                    {link.label}
                                </a>
                            </p>
                        ))}
                    </div>
                ))}
            </div>
            <div className={`${styles.footerBottom} vertical-padding`}>
                <p className={styles.copyrightText + ' body5'}>
                    {labels.footerCopyright.copyright}
                </p>
                <div className={styles.footerLinks}>
                    <p className={styles.copyrightText + ' body5'}>
                        {labels.footerCopyright.rights}
                    </p>
                    <p>|</p>
                    <p>
                        <a href='' className={styles.termsLink + ' body5'}>
                            {labels.footerCopyright.terms}
                        </a>
                    </p>
                    <p>|</p>
                    <p>
                        <a href='' className={styles.termsLink + ' body5'}>
                            {labels.footerCopyright.privacy}
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Footer
