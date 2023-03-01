import stylesbanner from '@/styles/banner.module.css'



const Banner = (props) => {
  const { title, description } = props;
  return (
    <div className={stylesbanner.banner}>
      <h3 className={stylesbanner.titleBanner} >{title}</h3>
      <p className={stylesbanner.descriptionBanner}>{description}</p>
    </div>
  );
};
export default Banner;
