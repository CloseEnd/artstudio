import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footercontainer}>
      <div className={styles.footer}>
        <h1>2023 Close End art gallery.</h1>
        <div>
          <ul>
            <a href="">
              <li>email@example.com</li>
            </a>
            <a href="">
              <li>Privacy policy</li>
            </a>
            <a href="">
              <li>f</li>
            </a>
            <a href="">
              <li>In</li>
            </a>
            <a href="">
              <li>Wa</li>
            </a>
            <a href="">
              <li>Tel</li>
            </a>
            <a href="">
              <li>tw</li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
