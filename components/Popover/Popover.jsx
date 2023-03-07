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
                <p class="popover__message">Joseph Francis "Joey" Tribbiani, Jr.</p>
            </div>
        </div>
    )
}

export default Popover


// import { Icon } from '@/components'
// import styles from './Popover.module.css'

// export function Popover(props) {
//     return (
//         <div>
//             <a onClick={(e) => e.preventDefault()}>
//                 <div className={`${styles.tooltip} ${styles.top}`}>
//                     <Icon
//                         variant={props.icon}
//                         className={styles.icon}
//                     />
//                 </div>
//             </a>
//             {/* <div className={`${styles.tooltip} ${styles.right}`}>Show Right</div> */}
//         </div>
//     )
// }

// export default Popover