import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div>
        <h1>Being creative is not a hobby, its a way of life.</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo
          eaque sunt corrupti necessitatibus facilis assumenda expedita dolor
          saepe id voluptates nostrum praesentium, maxime optio iure!
        </p>
        <button className={styles.button}>Shop now</button>
      </div>
    </div>
  );
};

export default Hero;
