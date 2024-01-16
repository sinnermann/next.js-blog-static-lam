import styles from "./navbar.module.css";
import Links from "./links/Links";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}><Image src="/Marvel_Studios_2016_logo.svg.png" width={200} height={50}/> </Link>
      <div>
        {/* THE FIRST WAY TO CREATE LINKS FOR PAGES
        <Link href="/">Homepage</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        */}

        {/*THE SECOND WAY TO CREATE LINKS FROM THE LINKS COMPONENT*/}
        <Links />
      </div>
    </div>
  );
};

export default Navbar;
