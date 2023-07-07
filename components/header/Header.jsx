"use client";
import { useState, useEffect } from "react";
import styles from "./Header.module.scss";
import Link from "next/link";
import logo from "../../public/logo.png";
import Image from "next/image";

const Header = () => {
  const [mobile, setmobile] = useState(false);
  const [menuopen, setmenuopen] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 768) {
      setmobile(true);
    }
    setmobile(false);
  }, [mobile]);
  return (
    <header className={styles.header}>
      <nav>
        <Link href={"/"}>
          <div className={styles.logo}>
            <Image src={logo} alt={logo} />
          </div>
        </Link>
        <p className={styles.menu} onClick={() => setmenuopen(!menuopen)}>
          {menuopen ? "Close" : "Menu"}
        </p>
        <ul className={styles.navlinks}>
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/"}>Projects</Link>
          </li>
          <li>
            <Link href={"/"}>About</Link>
          </li>
          <li>
            <Link href={"/"}>Shop</Link>
          </li>
          <li>
            <Link href={"/"}>Blog</Link>
          </li>
          <li>
            <Link href={"/"}>Contact</Link>
          </li>
        </ul>
        {menuopen && (
          <ul onClick={() => setmenuopen(false)} className={styles.navlinks2}>
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/"}>Projects</Link>
            </li>
            <li>
              <Link href={"/"}>About</Link>
            </li>
            <li>
              <Link href={"/"}>Blog</Link>
            </li>
            <li>
              <Link href={"/"}>Shop</Link>
            </li>
            <li>
              <Link href={"/"}>Contact</Link>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
