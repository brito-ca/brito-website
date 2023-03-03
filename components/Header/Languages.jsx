import { useState } from 'react'
import Link from 'next/link'
import styles from '@/styles/Header.module.css'

const Languages = (props) => {
    const { className } = props
    const [fakeLng, setFakeLng] = useState('en')

    return (
        <div className={className + ' body4'}>
            <Link
                href='/'
                className={`uppercase ${fakeLng === 'en' ? styles.active : ''}`}
                onClick={() => setFakeLng('en')}
            >
                en
            </Link>
            <Link
                href='/'
                className={`uppercase horizontal-margin-xs ${
                    fakeLng === 'pt' ? styles.active : ''
                }`}
                onClick={() => setFakeLng('pt')}
            >
                pt
            </Link>
            <Link
                href='/'
                className={`uppercase ${fakeLng === 'fr' ? styles.active : ''}`}
                onClick={() => setFakeLng('fr')}
            >
                fr
            </Link>
        </div>
    )
}

export default Languages
