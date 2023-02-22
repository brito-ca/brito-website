const Banner = (props) => {
  const { title, description } = props;
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};
export default Banner;
