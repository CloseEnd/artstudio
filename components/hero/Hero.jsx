import styles from "./Hero.module.scss";
import Link from "next/link";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div>
        <h1 className="wow animate__animated animate__backInLeft">
          Being creative is not a hobby, its a way of life.
        </h1>
        <p className="wow animate__animated animate__backInLeft animate__delay-1s">
          Discover Endless Inspiration at Close End Art gallery, Embrace your
          passion, explore your creativity, and let Close End be your artistic
          sanctuary. Discover captivating art and find high-quality work at
          affordable prices done the right way, by hand.
        </p>
        <Link href={"/shop"}>
          <button
            className={`wow animate__animated animate__backInLeft animate__delay-2s ${styles.button}`}
          >
            Shop now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
