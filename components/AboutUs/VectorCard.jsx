import { Icon } from '@/components'
import styles from '@/styles/AboutUs.module.css'

const VectorCard = (props) => {
    const { icon, value, description } = props
    return (
        <div className={styles.vectorContainer}>
            <Icon variant={icon} />
            <h1>{value}</h1>
            <p>{description}</p>
        </div>
    )
}
export default VectorCard
