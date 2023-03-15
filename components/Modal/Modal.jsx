import styles from './Modal.module.css'

const Modal = (props) => {
    const { onClick, children } = props
    return (
        <div className={styles.backdrop} onClick={onClick}>
            <div className={styles.modal}>{children}</div>
        </div>
    )
}

export default Modal
