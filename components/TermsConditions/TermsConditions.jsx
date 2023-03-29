import Image from 'next/image'
import React, { useState } from 'react'
import Modal from '../Modal/Modal'
import closeModalIcon from '../../public/images/close-modal-icon.svg'
import styles from '../../styles/Form.module.css'

const TermsConditions = (show) => {
    const [subscriptionModalOpen, setSubscriptionModalOpen] = useState(show)

    return (
        <>
            {
                subscriptionModalOpen && <Modal className={styles.subscriptionModalContainer}>
                    <Image
                        src={closeModalIcon}
                        alt='X icon to close modal form'
                        className={styles.closeModalIcon}
                        onClick={() => { setSubscriptionModalOpen(!subscriptionModalOpen) }}
                    />
                    <div className={styles.subscriptionModalTextDescriptionContainer}>
                        <h1 className={styles.subscriptionModalTitle}>
                            This is a text
                        </h1>
                        <p className={styles.subscriptionModalDescription}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem minima quod a atque nisi illo, provident ratione pariatur in cupiditate sint enim doloremque, repellat voluptatibus? Totam ducimus omnis reprehenderit iusto.
                        </p>
                        <button
                            type='button'
                            className={styles.continueBrowsingButton}
                            onClick={() =>
                                setSubscriptionModalOpen(!subscriptionModalOpen)
                            }
                        >
                        </button>
                    </div>
                </Modal>
            }
        </>
    )
}

export default TermsConditions