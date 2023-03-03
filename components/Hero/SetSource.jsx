import Image from 'next/image'
import styles from '@/styles/Hero.module.css'

const SetSource = (props) => {
    const {img_source, img_source_mbl, alt} = props
    return (
        <div>
            <div className={styles.img_mobile}>
                <Image
                    className={styles.img_item}
                    src={img_source_mbl}
                    alt={alt}
                    width={327}
                    height={194}
                />
            </div>
            <div className={styles.img_monitor}>
                <Image
                    className={styles.img_item}
                    src={img_source}
                    alt={alt}
                    width={632}
                    height={900}
                />
            </div>
        </div>
    )
}
export default SetSource;