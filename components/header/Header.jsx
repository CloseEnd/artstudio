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
            <Link href={"/projects"}>Projects</Link>
          </li>
          <li>
            <Link href={"/About"}>About</Link>
          </li>
          <li>
            <Link href={"/shop"}>Shop</Link>
          </li>
          <li>
            <Link href={"/Blog"}>Blog</Link>
          </li>
          <li>
            <a href={"#contact"}>Contact</a>
          </li>
        </ul>
        {menuopen && (
          <ul onClick={() => setmenuopen(false)} className={styles.navlinks2}>
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/projects"}>Projects</Link>
            </li>
            <li>
              <Link href={"/About"}>About</Link>
            </li>
            <li>
              <Link href={"/Blog"}>Blog</Link>
            </li>
            <li>
              <Link href={"/shop"}>Shop</Link>
            </li>
            <li>
              <a href={"#contact"}>Contact</a>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
