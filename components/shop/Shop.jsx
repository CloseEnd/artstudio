import styles from "./Shop.module.scss";
import Image from "next/image";
import nextsvg from "../../public/next.svg";

const Shop = () => {
  return (
    <div className={styles.shop}>
      <h1>Shop</h1>
      <p>Latest custom projects that you can purchase.</p>
      <div className={styles.items}>
        <div className={styles.item}>
          <div className={styles.img}>
            <Image src={nextsvg} alt="img" />
          </div>
          <div className={styles.info}>
            <h4>Potrait Art</h4>
            <p>Ush 150,000</p>
            <a href="#contact">
              <button>contact now</button>
            </a>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.img}>
            <Image src={nextsvg} alt="img" />
          </div>
          <div className={styles.info}>
            <h4>Potrait Art</h4>
            <p>Ush 150,000</p>
            <a href="#contact">
              <button>contact now</button>
            </a>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.img}>
            <Image src={nextsvg} alt="img" />
          </div>
          <div className={styles.info}>
            <h4>Potrait Art</h4>
            <p>Ush 150,000</p>
            <a href="#contact">
              <button>contact now</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
