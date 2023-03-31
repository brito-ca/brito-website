import { useState } from 'react'
import Link from 'next/link'
import styles from '@/styles/Header.module.css'

const isSelected = (selectedLng, lng) => {
    return selectedLng === lng ? styles.active : ''
}

const Languages = (props) => {
    const { className } = props
    const [fakeLng, setFakeLng] = useState('en')

    return (
        <div className={className + ' body4'}>
            <Link
                href='/'
                className={`uppercase ${isSelected(fakeLng, 'en')}`}
                onClick={() => setFakeLng('en')}
            >
                en
            </Link>
            <Link
                href='/pt'
                className={`uppercase horizontal-margin-xs ${isSelected(fakeLng, 'pt')}`}
                onClick={() => setFakeLng('pt')}
            >
                pt
            </Link>
            <Link
                href='/fr'
                className={`uppercase ${isSelected(fakeLng, 'fr')}`}
                onClick={() => setFakeLng('fr')}
            >
                fr
            </Link>
        </div>
    )
}

export default Languages
