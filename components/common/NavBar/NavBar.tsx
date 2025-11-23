import Link from "next/link";
import Image from "next/image";
import styles from "./NavBar.module.scss";

const NavBar = () => (
    <nav className={styles.nav}>
        <Link href="/" className={styles.logo}>
            <Image src="/logo.png" height={100} width={190} alt="Logo" />
        </Link>

        <ul className={styles.links}>
            <li><Link href="/episodes">episodes</Link></li>
            <li><Link href="/characters">characters</Link></li>
            <li><Link href="/locations">locations</Link></li>
        </ul>
    </nav>
);

export default NavBar;