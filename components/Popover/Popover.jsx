import { Icon } from '@/components'
import styles from './Popover.module.css'

export function Popover(props) {
    return (
        <div className={styles.popoverContainer}>
            <div className={`${styles.popover} ${styles.top}`}>
                <Icon variant={props.icon} className={styles.icon} />
            </div>
        </div>
    )
}

export default Popover
