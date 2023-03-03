const Nav = (props) => {
  const { className } = props;

  return (
    <div className={className}>
      <a href="#about" className="margin">
        About
      </a>
      <a href="#join-us" className="margin">
        Join us
      </a>
      <a href="#contact" className="margin">
        Contact
      </a>
    </div>
  );
};

export default Nav;
