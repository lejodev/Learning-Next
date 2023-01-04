import Link from "next/Link";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link className={styles.link} href="/">
        HOME
      </Link>
      <Link className={styles.link} href="/users">
        USERS
      </Link>
    </nav>
  );
};

export default Navbar;
