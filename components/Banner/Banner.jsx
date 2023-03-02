import stylesbanner from '@/styles/Banner.module.css'



const Banner = (props) => {
  const { title, description } = props;
  return (
    <div className='flex-row-center'>
    <div className={stylesbanner.banner}>
      <h3 className={stylesbanner.titleBanner} >{title}</h3>
      <div className='body1 b1'>
      <p className={stylesbanner.descriptionBanner}  >{description}</p>
    </div>
    </div>
    </div>  
  );
};
export default Banner;
