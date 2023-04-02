import styles from '@/styles/Banner.module.css'

const Banner = (props) => {
    const { id, title, description } = props

    return (
        <div id={id} className='flex-row-center'>
            <div className={styles.banner}>
                <h4 className={styles.titleBanner}>{title}</h4>
                <div className='body1'>
                    <p className={styles.descriptionBanner + ' body4'}>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default Banner
