import Image from "next/image";
import Header from "@/components/header/Header";
import styles from "./Page.module.scss";
import Hero from "@/components/hero/Hero";
import Projects from "@/components/projects/Projects";
import About from "@/components/about/About";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <Hero />
        <Projects />
        <About />
      </main>
      {/* footer */}
    </>
  );
}
