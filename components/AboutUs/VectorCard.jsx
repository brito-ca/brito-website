import Image from 'next/image'

const VectorCard = (props) => {
    const { image, value, description } = props;
    return (
        <div>
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
