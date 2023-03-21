import Image from 'next/image'
import styles from '@/styles/AboutUs.module.css'

const VectorCard = (props) => {
    const { image, value, description } = props;
    return (
        <div className={styles.vectorContainer}>
            <Image
                alt={description}
                src={image.path}
                width={image.width}
                height={image.height}
            />
            <h1>{value}</h1>
            <p>{description}</p>
        </div>
    )
};
export default VectorCard;
