import Image from 'next/image'
import britoFlag from '../../public/images/brito-logo-1.svg'
import britoWordMark from '../../public/images/brito-logo-2.svg'
import styles from '@/styles/Footer.module.css'
import navStyles from '@/styles/Header.module.css'
import { Icon, Nav } from '@/components'

const Footer = (props) => {
    const { footerContent, navigation, socialMedia } = props

    return (
        <>
            <div className='flex-row-space-between'>
                <div
                    style={{ width: '40%' }}
                    className={`${styles.footerLogoContainer} flex-column-center`}
                >
                    <div className='flex-column-space-between'>
                        <Image
                            alt={footerContent.altFlag}
                            src={britoFlag}
                            className={styles.logo}
                        />
                        <Image
                            alt={footerContent.altWordmark}
                            src={britoWordMark}
                            className={styles.logo}
                        />
                        <p className={'vertical-padding'}>{footerContent.phrase}</p>
                    </div>
                    <div className={`${styles.socialContainer} flex-row-center`}>
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
                </div>
                <div className={`${styles.footerNav} flex-column-center`}>
                    <h5>{footerContent.header}</h5>
                    <Nav
                        className={`${navStyles.nav} body3 flex-column-start`}
                        navigation={navigation}
                    />
                </div>
            </div>
            <div className={`${styles.footerBottom} vertical-padding flex-row-space-between body5`}>
                <p>{footerContent.copyright}</p>
                <div className='flex-row-center'>
                    <p>{footerContent.rights}</p>
                    <p>|</p>
                    <p>
                        <a href={footerContent.terms.href}>{footerContent.terms.text}</a>
                    </p>
                    <p>|</p>
                    <p>
                        <a href={footerContent.privacy.href}>{footerContent.privacy.text}</a>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Footer
