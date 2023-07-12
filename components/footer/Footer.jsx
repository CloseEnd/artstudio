import styles from "./Footer.module.scss";
import { CiFacebook } from "react-icons/ci";
import { AiOutlineWhatsApp, AiOutlineInstagram } from "react-icons/ai";
import { LiaTelegramPlane } from "react-icons/lia";

const Footer = () => {
  return (
    <div className={styles.footercontainer}>
      <div className={styles.footer}>
        <h1>2023 Close End art gallery.</h1>
        <div>
          <ul>
            <a href="mailto:taleemmankuer@gmail.com">
              <li>email@example.com</li>
            </a>
            <a href="">
              <li>Privacy policy</li>
            </a>
            <a href="">
              <li>
                <CiFacebook />
              </li>
            </a>
            <a href="">
              <li>
                <AiOutlineWhatsApp />
              </li>
            </a>
            <a href="">
              <li>
                <AiOutlineInstagram />
              </li>
            </a>
            <a href="">
              <li>
                <LiaTelegramPlane />
              </li>
            </a>
            {/* <a href="">
              <li>tw</li>
            </a> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
