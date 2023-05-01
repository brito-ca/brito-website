import Link from 'next/link'

const Languages = (props) => {
    const { className, languages } = props

    return (
        <div className={className + ' body4'}>
            {languages?.map((item, index) => (
                <Link key={index} href={item.link} className={`uppercase margin-xxs`}>
                    {item.text}
                </Link>
            ))}
        </div>
    )
}

export default Languages
