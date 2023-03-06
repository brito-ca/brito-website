import Modal from 'react-modal'
import styles from './FormModal.module.css'

const FormModal = (isOpen, onRequestClose) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName='react-model-overlay'
            className='react-modal-content'
        >
            <div className={styles.modalContainer}>
                <p>Profile picture modal</p>
            </div>
        </Modal>
    )
}

export default FormModal
