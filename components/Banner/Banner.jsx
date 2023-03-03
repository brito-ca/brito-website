import styles from '@/styles/Banner.module.css'
const Banner = (props) => {
    const { id, title, description } = props
    return (
        <div id={id} className='flex-row-center'>
            <div className={styles.banner}>
                <h3 className={styles.titleBanner}>{title}</h3>
                <div className='body1 b1'>
                    <p className={styles.descriptionBanner}>{description}</p>
                </div>
            </div>
        </div>
    )
}
export default Banner
