// Temporary component, not using globals

import styles from './Placeholder.module.css'

const Placeholder = (props) => {
    return (
        <div id={props.id} className={styles.container}>
            <h3>{props.title}</h3>
        </div>
    )
}
export default Placeholder
