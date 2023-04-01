import styles from '@/styles/Header.module.css'
import Image from 'next/image'
import smallLogo from '../../public/images/logo-small.svg'
import Link from 'next/link'
import { useState } from 'react'
import { Icon, Nav, Languages } from '@/components'

const Header = (props) => {
    const { navigation, languages } = props
    const [modalOpen, setModalOpen] = useState(false)

    return (
        <div className={`${styles.header} flex-row-space-between`}>
            <Link href='/'>
                <Image className={styles.logo} alt='logo small' src={smallLogo} />
            </Link>
            <div className='flex-row-space-between'>
                <Nav
                    className={`${styles.nav} body1 horizontal-margin-lg`}
                    navigation={navigation}
                />
                <Languages
                    languages={languages}
                    className={`${styles.languages} horizontal-margin`}
                />
            </div>

            <div className={styles.menuIcon} onClick={() => setModalOpen(!modalOpen)}>
                <Icon variant='menu' />
            </div>

            {modalOpen && (
                <div className={styles.backdrop} onClick={() => setModalOpen(false)}>
                    <div className={styles.menuModal} onClick={(e) => void e.stopPropagation()}>
                        <div className={`${styles.menuHeader} flex-row-end padding`}>
                            <div onClick={() => setModalOpen(false)}>
                                <Icon variant='close' />
                            </div>
                        </div>
                        <Nav
                            className={`${styles.navMobile} body3 flex-column-start`}
                            closeModal={() => setModalOpen(false)}
                            navigation={navigation}
                        />
                    </div>
                </div>
            )}
        </div>
    )
}
export default Header
