import Image from 'next/image'
import styles from '@/styles/Icon.module.css'

const Icon = (props) => {
    const { iconPath, iconWidth, iconHeight, value, description} = props;
    return (
        <div className={styles.icon}>
            <Image
                src={iconPath}
                alt={description}
                width={iconWidth}
                height={iconHeight}
             />
            <h1 className={styles.value}>{value}</h1>
            <p className={styles.description}>{description}</p>
        </div>
    )
};
export default Icon;
