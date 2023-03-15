import styles from './Modal.module.css'

const Modal = (props) => {
    const { name, className } = props
    return (
        <div className={className}>
            <div className={styles.modal}>{name}</div>
        </div>
    )
}

export default Modal
