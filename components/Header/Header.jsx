import Image from "next/image";
import smallLogo from "../../public/images/logo-small.svg";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex-row-space-between">
      <Image alt="logo small" src={smallLogo} />
      <div>
        <a href="#about">About</a>
        <a href="#join-us">Join us</a>
        <a href="#contact">Contact</a>
      </div>
      <div>
        <Link href="/en/home" className="uppercase">
          en
        </Link>
        <Link href="/pt/home" className="uppercase">
          pt
        </Link>
        <Link href="/fr/home" className="uppercase">
          fr
        </Link>
      </div>
    </div>
  );
};
export default Header;
