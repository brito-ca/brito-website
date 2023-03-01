import Image from "next/image";
import smallLogo from "../../public/images/logo-small.svg"

const Header = () => {
  return (
    <div>
      <Image alt="logo small" src={smallLogo} />
    </div>
  );
};
export default Header;
