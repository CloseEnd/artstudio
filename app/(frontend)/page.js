import Image from "next/image";
import Header from "@/components/header/Header";
import styles from "./Page.module.scss";
import Hero from "@/components/hero/Hero";
import Projects from "@/components/projects/Projects";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <Hero />
        <Projects />
      </main>
      {/* footer */}
    </>
  );
}
