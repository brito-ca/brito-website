import { Icon } from '@/components'
import styles from './Popover.module.css'

export function Popover(props) {
    return (
        <div className={styles.popoverContainer}>
            <a onClick={(e) => e.preventDefault()}>
                <Icon
                    variant={props.icon}
                    className={styles.icon}
                />
            </a>
            <div class={styles.popoverContent}>
                <p>This status assists Brito in identifying suitable projects and job opportunities based on his type of visa. Some visas only permit 20 hours of work, and holding citizenship is a requirement for certain government positions, enhancing one's chances of securing a job.</p>
            </div>
        </div>
    )
}

export default Popover