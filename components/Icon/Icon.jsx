import Image from 'next/image'

const Icon = (props) => {
    const { iconPath, iconWidth, iconHeight, value, description} = props;
    return (
        <div>
            <Image  
                src={iconPath}
                alt={description}
                width={iconWidth}
                height={iconHeight}
            />
            <h1>{value}</h1>
            <p>{description}</p>
        </div>
    )
};
export default Icon;
