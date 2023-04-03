import styles from '@/styles/Footer.module.css'
import { Logo, Nav } from '@/components'

const Footer = (props) => {
    const { content, navigation } = props
    return (
        <>
            <div className={styles.footerContainer}>
                <div className={`${styles.footerLogoContainer} flex-column-center`}>
                    <div className='flex-column-space-between'>
                        <Logo size='lg' />
                        <p className={'vertical-padding'}>{content?.description}</p>
                    </div>
                </div>
                <div className={styles.footerNav}>
                    <h5>{content?.title}</h5>
                    <Nav
                        className={`${styles.nav} body3 flex-column-start`}
                        navigation={navigation}
                    />
                </div>
            </div>
            <div
                className={`${styles?.footerBottom} vertical-padding flex-row-space-between body5`}
            >
                <p>{content?.copyright}</p>
                <div className='flex-row-center'>
                    <p>{content?.rights}</p>
                </div>
            </div>
        </>
    )
}

export default Footer
