import styles from '../../styles/Popover.module.css'

export function Popover(props) {
    const { children } = props
    return (
        <div className={styles.popover}>
            <div className={styles.popoverArrow}></div>
            <div className={styles.popoverContent}>{children}</div>
        </div>
    )
}

export default Popover
