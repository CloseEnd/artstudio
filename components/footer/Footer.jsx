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
            <a href="mailto:closeend11@gmail.com">
              <li>closeend11@gmail.com</li>
            </a>
            {/* <a href="">
              <li>Privacy policy</li>
            </a> */}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/CLOSE-END-105023639330529"
            >
              <li>
                <CiFacebook />
              </li>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://wa.me/256772632727"
            >
              <li>
                <AiOutlineWhatsApp />
              </li>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/breadgetta8/"
            >
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
