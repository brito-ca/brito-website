import Image from 'next/image'
import styles from '@/styles/Hero.module.css'

export default function BannerImage() {
    const image = {
        ellipse: {
            className: 'styles.img_item',
            src: '/ellipse.png',
            alt: 'Parlemant',
            width: '632',
            height: '900',
        },
        rectangle: {
            src: '/rectangle_39.png',
            alt: 'Parlemant',
            width: '327',
            height: '194',
        },
    }

    return (
        <div>
            <div className={styles.img_mobile}>
                <Image {...image.rectangle} />
            </div>
            <div className={styles.img_monitor}>
                <Image {...image.ellipse} />
            </div>
        </div>
    )
}
