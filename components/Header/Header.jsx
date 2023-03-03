import styles from '@/styles/Header.module.css'
import Image from 'next/image'
import smallLogo from '../../public/images/logo-small.svg'
import Link from 'next/link'
import { useState } from 'react'
import { Icon, Nav, Languages } from '@/components'

const Header = () => {
    const [modalOpen, setModalOpen] = useState(false)

    return (
        <div className={`${styles.header} flex-row-space-between`}>
            <Link href='/'>
                <Image className={styles.logo} alt='logo small' src={smallLogo} />
            </Link>
            <div className={styles.empty}></div>
            <Nav className={`${styles.nav} body1`} />
            <Languages className={`${styles.languages} ${styles.desktop}`} />

            <div className={styles.menuIcon} onClick={() => setModalOpen(!modalOpen)}>
                <Icon variant='menu' />
            </div>

            {modalOpen && (
                <div className={styles.backdrop} onClick={() => setModalOpen(false)}>
                    <div className={styles.menuModal} onClick={(e) => void e.stopPropagation()}>
                        <div className={`${styles.menuHeader} flex-row-space-between padding`}>
                            <Languages className={styles.languages} />
                            <div onClick={() => setModalOpen(false)}>
                                <Icon variant='close' />
                            </div>
                        </div>
                        <Nav
                            className={`${styles.navMobile} flex-column-start`}
                            closeModal={() => setModalOpen(false)}
                        />
                    </div>
                </div>
            )}
        </div>
    )
}
export default Header
