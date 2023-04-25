import styles from "./styles.module.scss";

import { FaFacebookF, FaTiktok } from "react-icons/fa";
import { BsInstagram, BsTwitter, BsYoutube, BsSnapchat } from "react-icons/bs";

export default function Socials() {
  return (
    <div className={styles.footer__socials}>
      <section>
        <h3>stay connected</h3>

        <ul>
          <li>
            <a href="/" target="_blank">
              <FaFacebookF />
            </a>
          </li>

          <li>
            <a href="/" target="_blank">
              <BsInstagram />
            </a>
          </li>

          <li>
            <a href="/" target="_blank">
              <BsTwitter />
            </a>
          </li>

          <li>
            <a href="/" target="_blank">
              <BsYoutube />
            </a>
          </li>

          <li>
            <a href="/" target="_blank">
              <BsSnapchat />
            </a>
          </li>

          <li>
            <a href="/" target="_blank">
              <FaTiktok />
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
