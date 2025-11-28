"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import styles from "./NavBar.module.scss";

const NavBar = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className={styles.nav}>
            <div className={styles.wrapper}>
                <Link href="/" className={styles.logo}>
                    <Image src="/logo.png" height={100} width={190} alt="Logo" />
                </Link>

                <button
                    className={styles.hamburger}
                    onClick={() => setOpen(!open)}
                    aria-label="Menu"
                >
                    <span className={open ? styles.open : ""}></span>
                </button>

                <ul className={`${styles.links} ${open ? styles.show : ""}`}>
                    <li><Link href="/episodes" onClick={() => setOpen(false)}>episodes</Link></li>
                    <li><Link href="/characters" onClick={() => setOpen(false)}>characters</Link></li>
                    <li><Link href="/locations" onClick={() => setOpen(false)}>locations</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;