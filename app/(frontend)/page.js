import styles from "./Page.module.scss";
import Hero from "@/components/hero/Hero";
import Projects from "@/components/projects/Projects";
import About from "@/components/about/About";
import Blogs from "@/components/blogs/Blogs";
import Shop from "@/components/shop/Shop";
import "animate.css";

export const revalidate = 30;

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <Hero />
        <Projects />
        <About />
        <Blogs />
        <Shop />
      </main>
    </>
  );
}
