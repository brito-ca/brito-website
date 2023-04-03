import styles from '@/styles/Footer.module.css'
import { Nav, Image, Modal } from '@/components'
import { useState } from 'react'
import labels from '@/constants/labels.en'

const Footer = (props) => {
    const { footerContent, britoFlag, britoWorkMark, navigation } = props
    const [termsModalisOpen, setTermsModalOpen] = useState(false)
    const [privacyModalisOpen, setPrivacyModalOpen] = useState(false)

    const handleTermsModal = (e, setIsOpen) => {
        e.preventDefault()
        setIsOpen(true)
    }

    return (
        <>
            <div className={styles.footerContainer}>
                <div className={`${styles.footerLogoContainer} flex-column-center`}>
                    <div className='flex-column-space-between'>
                        <Image className={styles.logo} alt={britoFlag.alt} {...britoFlag} />
                        <Image className={styles.logo} alt={britoWorkMark.alt} {...britoWorkMark} />
                        <p className={'vertical-padding'}>{footerContent.description}</p>
                    </div>
                </div>
                <div className={styles.footerNav}>
                    <h5>{footerContent.header}</h5>
                    <Nav
                        className={`${styles.nav} body3 flex-column-start`}
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
                        <a onClick={(e) => handleTermsModal(e, setTermsModalOpen)} href='#'>
                            {footerContent.terms.text}
                        </a>
                        <Modal isOpen={termsModalisOpen} setIsOpen={setTermsModalOpen}>
                            {labels.termAndconditions}
                        </Modal>
                    </p>
                    <p>|</p>
                    <p>
                        <a onClick={(e) => handleTermsModal(e, setPrivacyModalOpen)} href='#'>
                            {footerContent.privacy.text}
                        </a>
                        <Modal isOpen={privacyModalisOpen} setIsOpen={setPrivacyModalOpen}>
                            {labels.privacyPolicy}
                        </Modal>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Footer
